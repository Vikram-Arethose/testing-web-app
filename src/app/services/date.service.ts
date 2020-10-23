import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../components/pick-up-date/pick-up-date.component';

@Injectable({
  providedIn: 'root'
})
export class DateService {

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
}
