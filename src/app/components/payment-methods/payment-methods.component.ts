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
import { ProductForTransaction } from '../../models/http/productForTransaction';
import { BakeryService } from '../../services/bakery.service';
import { BakeryFull } from '../../models/http/bakeryFull';
import { DebitComponent } from './debit/debit.component';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {

  @Input() private productsForTransaction: ProductForTransaction[];
  isLoading: boolean;
  private bakery: BakeryFull;

  constructor(
    private alertServ: AlertService,
    private bakeryServ: BakeryService,
    private modalController: ModalController,
    private logger: LoggerService,
    private httpServ: HttpService,
    private router: Router,
    private ngZone: NgZone,
    private cartServ: CartService,
    private dateServ: DateService
  ) { }

  ngOnInit() {
    this.bakeryServ.bakery.subscribe(res => this.bakery = res);
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
        this.createSmartTransaction();
        break;
      case 'debit':
        this.presentDebitModal();
        break;
    }
  }

  createSmartTransaction() {
    this.isLoading = true;
    this.httpServ.createSmartTransaction(this.bakery.branchDetails.bakery_id, this.cartServ.getTotalPrice(), this.productsForTransaction)
      .subscribe((res: CreateStxRes) => {
        this.isLoading = false;
        this.creditCartPayment(res);
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
            isConfirm: true
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
      component: DebitComponent
    });
    return await modal.present();
  }

}
