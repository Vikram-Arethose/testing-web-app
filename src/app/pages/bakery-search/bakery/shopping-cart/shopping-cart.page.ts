import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateService } from '../../../../services/date.service';
import { CartService } from '../../../../services/cart.service';
import { AlertController, ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../../../../components/pick-up-date/pick-up-date.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../../services/logger.service';
import { Product } from '../../../../models/http/bakeryFull';
import { AlertService } from '../../../../services/alert.service';
import { HttpService } from '../../../../services/http.service';
import { BranchDetailsForPayment } from '../../../../models/http/branchDetailsForPayment';
import { BakeryService } from '../../../../services/bakery.service';
import { ApiResponse } from '../../../../models/http/apiResponse';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { LoadingService } from '../../../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '../../../../services/modal.service';
import { SaleServices } from '../../../../services/sale.services';
import * as moment from 'moment';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit, OnDestroy {

  date: string;
  dateLocale: string;
  language: string;
  lastPaymentMethod: string;
  reorder = false;
  absentProducts: any;
  private branchDetails: BranchDetailsForPayment;
  checked;
  timer;
  toastIsShowing: boolean;

  constructor(
    public cartService: CartService,
    public dateService: DateService,
    private alertServ: AlertService,
    private alertController: AlertController,
    private bakeryServ: BakeryService,
    private httpServ: HttpService,
    private loadingServ: LoadingService,
    private locStorageServ: LocalStorageService,
    private logger: LoggerService,
    private modalController: ModalController,
    private modalServ: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    public saleServ: SaleServices,
    public toast: AlertService
  ) {
    this.route.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.branchDetails = this.router.getCurrentNavigation().extras.state.data;
      }
      if (this.router.getCurrentNavigation().extras.state.data?.reorder) {
        this.reorder = true;
      }else {
        this.reorder = false;
      }
    });
  }

  ngOnInit() {
    this.toastIsShowing = false;
    this.dateLocale = this.locStorageServ.getDateLocale();
    this.lastPaymentMethod = this.branchDetails.lastUsedPayment;
    // this.date = localStorage.getItem('date');
    this.dateService.dateShared.subscribe((res: string) => {
      if (res && res !== this.date) {
        this.date = res;
        localStorage.setItem('date', res);
        const basket = this.cartService.getCart().map(item => this.dateService.mapProductInCartAvailability(item));
        const updatedBasket = basket.filter( item => this.dateService.getProductAvailability(item));
        if (basket.length !== updatedBasket.length) {
          this.toastIsShowing = true;
          this.showToast(this.toastIsShowing);
          this.toastIsShowing = false;
        }
        this.cartService.updateCart(updatedBasket);
        if (this.cartService.getCart().length === 0) {
          this.router.navigate(['bakery-search/bakery']);
        }
      }
    });
    this.absentProducts = this.cartService.getAbsentCart();
    if (this.reorder) {
    this.refreshDate();
    }
  }
  validateBasketByDate(basket) {
    if (moment().isSameOrAfter(this.date, 'day')) {
      const filteredBasket = basket.filter( item => this.dateService.getProductAvailability(item));
      console.log('filteredBasket', filteredBasket);
      return filteredBasket;
    }else {
      return basket;
    }
  }
  showToast(showToast) {
    if (showToast) {
      this.toast.deletedProductToast(this.translate.instant('shoppingCart.deletedProduct'));
    }
  }
  ionViewWillEnter() {
    if (this.cartService.getCart().length === 0) {
      this.router.navigateByUrl('/bakery-search');
    }
  }

  async presentVerifyDateModal() {
    const modal = await this.modalController.create({
      component: PickUpDateComponent,
      cssClass: 'pick-up-date-modal',
      componentProps: {isVerify: true}
    });
    return await modal.present();
  }

  add(product: Product) {
    this.cartService.addProductToCart(product);
  }

  reduce(product: Product) {
    this.cartService.removeProductFromCart(product);
  }

  delete(i: number) {
    this.cartService.deleteCartProduct(i);
  }

  async presentAlertConfirm(cart: Product[]) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Individual products are not available at the selected time. Would you like to remove or adjust?</strong>',
      buttons: [
        {
          text: 'Adjust',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Remove',
          handler: () => {
            this.cartService.updateCart(cart.filter(product => product.isAvailable === true));
          }
        },
      ]
    });
    await alert.present();
  }

  checkCart() {
    const minOrderValue = this.branchDetails.minOrderValue;
    const cart = this.cartService.getCart();
    if (cart.length > 0 && this.cartService.getTotalPrice() >= Number.parseFloat(minOrderValue)) {
      if (cart.some(item => item.isAvailable !== false)) {
        return  true;
      } else {
        this.presentAlertConfirm(cart);
      }
    } else {
      this.alertServ.presentAlert(`${this.translate.instant('alert.minOrderCost')} ${minOrderValue} €!`);
    }
  }

  checkout() {
    if (this.checkCart()) {
      if (this.lastPaymentMethod) {
        this.loadingServ.presentLoading();
        this.httpServ.useLastPayment(this.bakeryServ.getDataForPayment(this.date)).subscribe((res: ApiResponse) => {
          this.loadingServ.dismiss();
          this.logger.log('useLastPayment res : ', res);
          if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res?.iframe_url) {
            this.httpServ.handleIabResult(this.httpServ.getIab(res.iframe_url));
            this.cartService.clearCart();
            this.cartService.clearAbsentCart();
          } else if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.order_id) {
            this.cartService.clearCart();
            this.cartService.clearAbsentCart();
            this.bakeryServ.openConfirmOrder(res.data?.order_id);
          }else {
            this.alertServ.presentAlert();
          }
        });
      } else {
        this.modalServ.presentPaymentMethodsModal();
      }
    }
  }

  chooseOtherPayment() {
    if (this.checkCart()) {
      this.modalServ.presentPaymentMethodsModal();
    }
  }

  redirectToMain() {
    this.cartService.clearCart();
    this.cartService.clearAbsentCart();
    this.router.navigate(['/bakery-search']);
  }
  cutToggler(e) {
    let checkedStatus = e.detail.checked;
    (checkedStatus === true) ? checkedStatus = 1 : checkedStatus = 0;
    const basket = this.cartService.getCart();
    const id = e.target.name;
    const index = basket.findIndex(item => item.id === +id);
    basket[index].sliced = checkedStatus;
    this.cartService.updateCart(basket);
  }
  refreshDate() {
    this.timer = setInterval(() => {
      this.date = this.dateService.getDateFromPicker();
    }, 200);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
