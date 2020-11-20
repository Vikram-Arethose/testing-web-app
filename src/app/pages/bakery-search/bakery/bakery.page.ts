import { Component, OnInit } from '@angular/core';

import { ProductsList } from '../../../core/mocks/products-list';
import { LoggerService } from '../../../services/logger.service';
import { DateService } from '../../../services/date.service';
import { PickUpDateComponent } from '../../../components/pick-up-date/pick-up-date.component';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../../../components/product-details/product-details.component';
import { CartService } from '../../../services/cart.service';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BakeryFull, BakeryDetails, Category, Product } from '../../../models/http/bakeryFull';
import { BakeryService } from '../../../services/bakery.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit {

  cart: Product[] = [];
  isInfoFull: boolean;
  bakeryAddress: string;
  bakeryDetails: BakeryDetails;
  productsList: Product[];
  selected: boolean[] = [];
  categories: Category[];
  openingHours: [string, any][];
  bakeryInfoFull: string;
  bakeryInfoTrim: string;
  bakeryInfo: string;
  isBakeryInfoFull: boolean;
  private bakeryId: number;

  constructor(
    public bakeryServ: BakeryService,
    public cartService: CartService,
    private dateService: DateService,
    private httpServ: HttpService,
    private logger: LoggerService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.bakeryId = this.router.getCurrentNavigation().extras.state.bakeryId;
     }
    });
  }

  ngOnInit() {
    this.selected[0] = true;
    this.getBakeryData();
  }

  getBakeryData() {
    this.httpServ.getBranchDetail(this.bakeryId).subscribe((res: BakeryFull) => {
      this.bakeryDetails = res.branchDetails;
      this.bakeryAddress = `${res.branchDetails.street}, ${res.branchDetails.number}, ${res.branchDetails.city}`;
      this.bakeryInfoFull = res.branchDetails.description;
      this.bakeryInfo = this.trimBakeryInfo();
      this.openingHours = Object.entries(res.branchDetails.opening_hours.default);
      this.categories = res.categories;
      if (res.categories[0] && res.categories[0].products) {
        this.productsList = res.categories[0].products;
      }
    });
  }

  onSectionSelect(index: number) {
    this.selected.length = 0;
    this.selected[index] = !this.selected[index];
    this.productsList = this.categories[index].products;
  }

  getCart() {
    this.cartService.getCart();
  }

  getProductCount(id: number): number {
    return this.cartService.getProductCount(id);
  }

  async presentPickUpDateModal() {
    const modal = await this.modalController.create({
      component: PickUpDateComponent,
      cssClass: 'pick-up-date-modal'
    });
    return await modal.present();
  }

  async presentProductDetailsModal() {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      cssClass: 'product-details-modal'
    });
    return await modal.present();
  }

  removeProductFromCart(product: Product, $event) {
    $event.stopPropagation();
    // this.cartService.removeProductFromCart(product);
  }

  addProductToCart(product: Product, $event) {
    $event.stopPropagation();
    if (!this.dateService.date) {
      this.presentPickUpDateModal();
    } else {
      // this.cartService.addProductToCart(product);
    }
  }

  onExit() {
    this.cartService.cart.length = 0;
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

  getProductImgCorner(product: Product): string {
    if (product.is_new) {
      return '../../../../assets/img/bakery/neu.png';
    } else if (product.bio_certification) {
      return '../../../../assets/img/bakery/bio.png';
    }
  }
}
