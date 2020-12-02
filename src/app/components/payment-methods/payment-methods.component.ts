import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglePayComponent } from '../google-pay/google-pay.component';
import { OtherOptionsComponent } from './other-options/other-options.component';
import { LoggerService } from '../../services/logger.service';
import { DateForPayment } from '../../models/http/dateForPayment';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {

  @Input() private dataForPayment: DateForPayment;

  constructor(
    private modalController: ModalController,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.logger.log('this.dataForPayment: ', this.dataForPayment);
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

}
