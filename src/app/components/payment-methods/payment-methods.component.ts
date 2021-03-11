import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { GooglePayComponent } from '../google-pay/google-pay.component';
import { CreateStxRes } from '../../models/http/createStxRes';
import { HttpService } from '../../services/http.service';
import { InAppBrowserObject } from '@ionic-native/in-app-browser';
import { AlertService } from '../../services/alert.service';
import { CartService } from '../../services/cart.service';
import { DateService } from '../../services/date.service';
import { BakeryService } from '../../services/bakery.service';
import { BakeryFull } from '../../models/http/bakeryFull';
import { DebitComponent } from './debit/debit.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {

  isAndroid: boolean = this.platform.is('android');
  private bakery: BakeryFull;
  private date: string;

  constructor(
    private alertServ: AlertService,
    private bakeryServ: BakeryService,
    private cartServ: CartService,
    private dateServ: DateService,
    private httpServ: HttpService,
    private iab: InAppBrowser,
    private modalController: ModalController,
    private platform: Platform
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

  makePaymentBy(paymentType: string) {
    switch (paymentType) {
      case 'credit':
        this.createSmartTransaction();
        break;
      case 'debit':
        this.presentDebitModal();
        break;
      case 'sofort':
        this.makeIabPayment('/payment/sofort');
        break;
      case 'paypal':
        this.makeIabPayment('/payment/paypal');
        break;
    }
  }

  createSmartTransaction() {
    this.httpServ.createSmartTransaction(this.bakeryServ.getDataForPayment(this.date))
      .subscribe((res: CreateStxRes | false) => {
        if (res) {
          this.creditCartPayment(res);
        }
      });
  }

  creditCartPayment(createStxRes: CreateStxRes) {
    const browser: InAppBrowserObject = this.httpServ.openCreditCardPayment(createStxRes.stx_id, createStxRes.user_id);
    this.httpServ.handleIabResult(browser);
  }

  makeIabPayment(url: string) {
    this.httpServ.iabPayment(url);
  }

  async presentDebitModal() {
    await this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: DebitComponent,
      componentProps: {
        dataForCreateStx: this.bakeryServ.getDataForPayment(this.date)
      }
    });
    return await modal.present();
  }

}
