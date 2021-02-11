import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../../services/date.service';
import { CartService } from '../../../../services/cart.service';
import { AlertController, ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../../../../components/pick-up-date/pick-up-date.component';
import { PaymentMethodsComponent } from '../../../../components/payment-methods/payment-methods.component';
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

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  date: string;
  dateLocale: string;
  language: string;
  lastPaymentMethod: string;
  private branchDetails: BranchDetailsForPayment;

  constructor(
    public cartService: CartService,
    public dateService: DateService,
    private alertServ: AlertService,
    private alertController: AlertController,
    private bakeryServ: BakeryService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private locStorageServ: LocalStorageService,
    private loadingServ: LoadingService,
    private httpServ: HttpService
  ) {
    this.route.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.branchDetails = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }

  ngOnInit() {
    this.dateLocale = this.locStorageServ.getDateLocale();
    this.lastPaymentMethod = this.branchDetails.lastUsedPayment;
    this.date = localStorage.getItem('date');
    this.dateService.dateShared.subscribe((res: string) => {
      if (res && res !== this.date) {
        this.date = res;
        localStorage.setItem('date', res);
        this.cartService.getCart().map(item => this.dateService.mapProductInCartAvailability(item));
      }
    });
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

  async presentPaymentMethodsModal() {
    const modal = await this.modalController.create({
      component: PaymentMethodsComponent,
      cssClass: 'payment-methods-modal'
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
      this.alertServ.presentAlert(`Min order total cost for this bakery should be bigger or equal ${minOrderValue} €!`);
    }
  }

  checkout() {
    if (this.checkCart()) {
      if (this.lastPaymentMethod) {
        this.loadingServ.presentLoading();
        this.httpServ.useLastPayment(this.bakeryServ.getDataForPayment(this.date)).subscribe((res: ApiResponse) => {
          this.loadingServ.dismiss();
          this.logger.log('useLastPayment res : ', res);
          if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.order_id) {
            this.cartService.clearCart();
            this.bakeryServ.openConfirmOrder(res.data?.order_id);
          } else {
            this.alertServ.presentAlert();
          }
        });
      } else {
        this.presentPaymentMethodsModal();
      }
    }
  }

  chooseOtherPayment() {
    if (this.checkCart()) {
      this.presentPaymentMethodsModal();
    }
  }

}
