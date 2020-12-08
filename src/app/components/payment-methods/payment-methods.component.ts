import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglePayComponent } from '../google-pay/google-pay.component';
import { OtherOptionsComponent } from './other-options/other-options.component';
import { LoggerService } from '../../services/logger.service';
import { CreateStxRes } from '../../models/http/createStxRes';
import { HttpService } from '../../services/http.service';
import { InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { CartService } from '../../services/cart.service';
import { DateService } from '../../services/date.service';
import { BakeryService } from '../../services/bakery.service';
import { BakeryFull, Product } from '../../models/http/bakeryFull';
import { DebitComponent } from './debit/debit.component';
import { DataForCreateStx } from '../../models/http/dataForCreateStx';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {

  isLoading: boolean;
  private bakery: BakeryFull;
  private date: string;

  constructor(
    private alertServ: AlertService,
    private bakeryServ: BakeryService,
    private cartServ: CartService,
    private dateServ: DateService,
    private httpServ: HttpService,
    private modalController: ModalController,
    private logger: LoggerService,
    private router: Router,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.bakeryServ.bakery.subscribe(res => this.bakery = res);
    this.dateServ.dateShared.subscribe(res => this.date = res);
  }

  async onGooglePay() {
    await this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: GooglePayComponent,
      cssClass: 'google-pay-modal'
    });
    return await modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async onOtherOption() {
    await this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: OtherOptionsComponent,
      cssClass: 'other-option-modal'
    });
    return await modal.present();
  }

  makePaymentBy(paymentType: string) {
    switch (paymentType) {
      case 'credit':
        this.createSmartTransaction(1);
        break;
      case 'debit':
        this.presentDebitModal();
        break;
    }
  }

  getDataForCreateStx(paymentMethod: number) {
    return {
      branchId: this.bakery.branchDetails.bakery_id,
      basketSum: this.cartServ.getTotalPrice(),
      products: this.cartServ.getCart().map((item: Product) => ({ id: item.id, quantity: item.count })),
      pickupDate: this.date.split('T')[0] + ' ' + this.date.split('T')[1].substr(0, 5),
      paymentMethod
    };
  }

  createSmartTransaction(paymentMethod: number) {
    this.isLoading = true;
    const dataForCreateStx: DataForCreateStx = this.getDataForCreateStx(paymentMethod);
    this.httpServ.createSmartTransaction(dataForCreateStx)
      .subscribe((res: CreateStxRes | false) => {
        this.isLoading = false;
        if (res) {
          if (paymentMethod === 1) {
            this.creditCartPayment(res);
          }
        }
      });
  }

  creditCartPayment(createStxRes: CreateStxRes) {
    const browser = this.httpServ.openCreditCardPayment(createStxRes.stx_id, createStxRes.user_id);
    browser.on('loadstart').subscribe((res: InAppBrowserEvent) => {
      if (res.url.includes('/payment/success')) {
        this.modalController.dismiss();
        browser.close();
        const navigationExtras: NavigationExtras = {
          state: {
            isConfirm: true,
            orderId: res.url.substr(res.url.lastIndexOf('=') + 1)
          }
        };
        this.ngZone.run(() => this.router.navigate(['orders'], navigationExtras));
        this.cartServ.clearCart();
        this.dateServ.changeDate('');
      } else if (res.url.includes('/payment/failed')) {
        this.alertServ.presentAlert('Payment was failed! Please try again later.');
        browser.close();
      }
    });
  }

  async presentDebitModal() {
    await this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: DebitComponent,
      componentProps: {
        dataForCreateStx: this.getDataForCreateStx(2)
      }
    });
    return await modal.present();
  }

}
