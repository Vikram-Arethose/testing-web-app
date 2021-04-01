import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoggerService } from '../../../services/logger.service';
import { DateService } from '../../../services/date.service';
import { CartService } from '../../../services/cart.service';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BakeryFull, BakeryDetails, Category, Product } from '../../../models/http/bakeryFull';
import { BakeryService } from '../../../services/bakery.service';
import { ModalService } from '../../../services/modal.service';
import { User } from '../../../models/user';
import { AccountService } from '../../../services/account.service';
import { AlertService } from '../../../services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Subscription } from 'rxjs';
import { OpeningHours, OpeningHoursDay } from '../../../models/http/homeBranch';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit, OnDestroy {

  account: User;
  allWeek: boolean;
  bakeryAddress: string;
  bakeryDetails: BakeryDetails;
  bakeryInfoFull: string;
  bakeryInfoTrim: string;
  bakeryInfo: string;
  cart: Product[] = [];
  categories: Category[];
  date: string;
  dateLocale: string;
  isInfoFull: boolean;
  guest: boolean;
  productsList: Product[];
  openingHours: [string, any][];
  isBakeryInfoFull: boolean;
  selectedCategoryIndex: number;
  private bakeryId: number;
  private lastUsedPayment: string | undefined;
  private subscription: Subscription;

  constructor(
    public bakeryServ: BakeryService,
    public cartService: CartService,
    private accountServ: AccountService,
    private alertServ: AlertService,
    private dateService: DateService,
    private httpServ: HttpService,
    private locStorageServ: LocalStorageService,
    private logger: LoggerService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bakeryId = this.router.getCurrentNavigation().extras.state.bakeryId;
      }
    });
  }

  ngOnInit() {
    this.getUserData();
    this.dateService.changeDate(null);
    this.cartService.clearCart();
    this.getBakeryData();
    this.dateService.dateShared.subscribe(res => {
      if (res) {
        this.date = res;
        this.setProductList();
      }
    });
    this.dateLocale = this.locStorageServ.getDateLocale();
  }

  getShortDayName(dayName: string) {
    return this.translate.instant(`days.${dayName.slice(0, 3)}`);
  }

  getUserData() {
    this.subscription = this.accountServ.sharedGuest$.subscribe(isGuest => {
      if (isGuest) {
        this.guest = isGuest;
      } else {
        this.accountServ.sharedAccount.subscribe(res => {
          if (res) {
            this.account = res;
          } else if (localStorage.getItem('token')) {
            this.httpServ.getUserDetails().subscribe(resp => this.account = resp);
          }
        });
      }
    });
  }

  getBakeryData() {
    this.httpServ.getBranchDetail(this.bakeryId).subscribe((res: BakeryFull) => {
      this.bakeryServ.changeBakery(res);
      if (!this.guest) {
        this.presentPickUpDateModal();
      }
      this.allWeek = res.branchDetails.opening_hours_new.allWeek;
      this.bakeryDetails = res.branchDetails;
      this.bakeryAddress = `${res.branchDetails.street} ${res.branchDetails.number}, ${res.branchDetails.city}`;
      this.bakeryInfoFull = res.branchDetails.description;
      this.bakeryInfo = this.trimBakeryInfo();
      this.setOpeningHours(res.branchDetails.opening_hours_new);
      this.categories = res.categories;
      if (res.categories[0] && res.categories[0].products) {
        this.selectedCategoryIndex = 0;
        this.setProductList();
      }
      this.lastUsedPayment = res?.last_used_payment;
    });
  }

  setOpeningHours(openingHours: OpeningHours) {
    const openingHoursCopy = openingHours.default;
    // const openingHoursCopy = JSON.parse(JSON.stringify(openingHours.default));
    for (const day in openingHoursCopy) {
      if (openingHoursCopy.hasOwnProperty(day)) {
        if (openingHoursCopy[day]?.length === 3) {
          openingHoursCopy[day] = [];
        }
        openingHoursCopy[day] = openingHoursCopy[day].filter((item: OpeningHoursDay) => item.start && item.end);
      }
    }
    this.openingHours = Object.entries(openingHoursCopy);
  }

  onCategorySelect(index: number) {
    this.selectedCategoryIndex = index;
    this.setProductList();
  }

  setProductList() {
    if (this.categories && this.categories[0] && this.categories[0].products) {
      this.productsList = this.categories[this.selectedCategoryIndex].products.slice();
      this.productsList = this.productsList.filter(item => this.dateService.getProductAvailability(item));
      this.productsList = this.productsList.map(item => this.dateService.mapProductPrice(item));
    }
  }

  getCart() {
    this.cartService.getCart();
  }

  presentPickUpDateModal(isVerify?: boolean) {
    this.modalService.presentPickUpDateModal(isVerify);
  }

  onInfo() {
    this.isInfoFull = !this.isInfoFull;
  }

  trimBakeryInfo(): string {
    const maxLength = 90;
    if (this.bakeryInfoFull && this.bakeryInfoFull.length > maxLength) {
      const limit = this.bakeryInfoFull.substr(0, maxLength).lastIndexOf(' ');
      this.bakeryInfoTrim = `${this.bakeryInfoFull.substr(0, limit)} ...`;
    } else {
      this.bakeryInfoTrim = this.bakeryInfoFull;
    }
    return this.bakeryInfoTrim;
  }

  toggleBakeryInfo() {
    this.bakeryInfo = this.isBakeryInfoFull ? this.bakeryInfoTrim : this.bakeryInfoFull;
    this.isBakeryInfoFull = !this.isBakeryInfoFull;
  }

  getProductAvailability(product: Product) {
    return this.dateService.getProductAvailability(product);
  }

  openShoppingCart() {
    if (this.account.first_name && this.account.last_name && this.account.email) {
      const navigationExtras: NavigationExtras = {
        state: {
          data: {
            branchId: this.bakeryDetails.bakery_id,
            minOrderValue: this.bakeryDetails.min_order_value,
            lastUsedPayment: this.lastUsedPayment
          }
        }
      };
      this.router.navigate(['/bakery-search/bakery/shopping-cart'], navigationExtras);
    } else {
      this.alertServ.presentAlert(this.translate.instant('bakery.addMissedData'));
      this.router.navigate(['account']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
