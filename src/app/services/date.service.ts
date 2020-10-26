import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickUpDateComponent } from '../components/pick-up-date/pick-up-date.component';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date: string;

  constructor(
    private modalController: ModalController,
  ) { }

  dismiss() {
    this.modalController.dismiss();
  }
}
