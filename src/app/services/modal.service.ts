import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../components/pick-up-date/pick-up-date.component';
import { Product } from '../models/http/bakeryFull';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { LoginFirstComponent } from '../components/login-first/login-first.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalController: ModalController,
  ) { }

  async presentPickUpDateModal() {
    const modal = await this.modalController.create({
      component: PickUpDateComponent,
      cssClass: 'pick-up-date-modal'
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

}
