import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../../services/date.service';
import { CartService } from '../../../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../../../../components/pick-up-date/pick-up-date.component';
import { PaymentMethodsComponent } from '../../../../components/payment-methods/payment-methods.component';
import { Router } from '@angular/router';
import { ProductInCart } from '../../../../models/productInCart';
import { Observable } from 'rxjs';
import { LoggerService } from '../../../../services/logger.service';
import { Product } from '../../../../models/http/bakeryFull';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  date: string;

  constructor(
    public dateService: DateService,
    public cartService: CartService,
    private modalController: ModalController,
    private router: Router,
    private logger: LoggerService
  ) { }

  ngOnInit() {
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
      cssClass: 'payment-methods-modal',
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

}
