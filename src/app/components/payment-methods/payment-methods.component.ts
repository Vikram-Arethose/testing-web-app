import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglePayComponent } from '../google-pay/google-pay.component';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async onGooglePay() {
    await this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: GooglePayComponent,
      cssClass: 'google-pay-modal'
    });
    return await modal.present();
  }

}
