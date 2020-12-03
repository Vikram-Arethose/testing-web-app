import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../../services/date.service';
import { CartService } from '../../../../services/cart.service';
import { AlertController, ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../../../../components/pick-up-date/pick-up-date.component';
import { PaymentMethodsComponent } from '../../../../components/payment-methods/payment-methods.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInCart } from '../../../../models/productInCart';
import { Observable } from 'rxjs';
import { LoggerService } from '../../../../services/logger.service';
import { Product } from '../../../../models/http/bakeryFull';
import { AlertService } from '../../../../services/alert.service';
import { HttpService } from '../../../../services/http.service';
import { ProductForTransaction } from '../../../../models/http/productForTransaction';
import { DateForPayment } from '../../../../models/http/dateForPayment';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  date: string;
  isLoading: boolean;
  paymentMethod: string;
  private branchDetails: { branchId: number, minOrderValue: string };

  constructor(
    public cartService: CartService,
    public dateService: DateService,
    private alertServ: AlertService,
    private alertController: AlertController,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private httpServ: HttpService
  ) {
    this.route.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.branchDetails = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }

  ngOnInit() {
    // this.paymentMethod = 'Credit Card';
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

  async presentPaymentMethodsModal(dataForPayment: DateForPayment) {
    const modal = await this.modalController.create({
      component: PaymentMethodsComponent,
      cssClass: 'payment-methods-modal',
      componentProps: {dataForPayment}
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

  checkout() {
    const minOrderValue = this.branchDetails.minOrderValue;
    const cart = this.cartService.getCart();
    if (cart.length > 0 && this.cartService.getTotalPrice() > Number.parseFloat(minOrderValue)) {
      if (cart.some(item => item.isAvailable !== false)) {
        const productsForTransaction: ProductForTransaction[] = cart.map((item: Product) => ({ id: item.id, quantity: item.count }) );
        this.isLoading = true;
        this.httpServ.createSmartTransaction(this.branchDetails.branchId, this.cartService.getTotalPrice(), productsForTransaction)
          .subscribe((res: DateForPayment) => {
            this.isLoading = false;
            if (res) {
              this.presentPaymentMethodsModal(res);
            }
          });
      } else {
        this.presentAlertConfirm(cart);
      }
    } else {
        this.alertServ.presentAlert(`Min order total cost for this bakery should be bigger than ${minOrderValue} €!`);
    }
  }

}
