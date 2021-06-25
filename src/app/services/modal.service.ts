import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../components/pick-up-date/pick-up-date.component';
import { Product } from '../models/http/bakeryFull';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { LoginFirstComponent } from '../components/login-first/login-first.component';
import { LoggerService } from './logger.service';
import { DateService } from './date.service';
import { Router } from '@angular/router';
import { PaymentMethodsComponent } from '../components/payment-methods/payment-methods.component';
import { repeat } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  date: string;
  

  constructor(
    private dateServ: DateService,
    private modalController: ModalController,
    private loggerServ: LoggerService,
    private router: Router
  ) {
    this.dateServ.dateShared.subscribe(res => this.date = res);
  }

  async presentPickUpDateModal(isVerify?: boolean, repeatOrder?: boolean) {
    const modal = await this.modalController.create({
      component: PickUpDateComponent,
      cssClass: 'pick-up-date-modal',
      componentProps: {
        isVerify,
        repeatOrder
      }
    });

    modal.onDidDismiss().then((res) => {
      if (!this.date) {
        this.router.navigate(['bakery-search']);
      }
    });

    return await modal.present();
  }

  async presentProductDetailsModal(product: Product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      cssClass: 'product-details-modal',
      componentProps: {
        product
      }
    });
    return await modal.present();
  }

  async presentLoginFirstModal() {
    const modal = await this.modalController.create({
      component: LoginFirstComponent,
      cssClass: 'login-first-modal'
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

}
