import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';
import { ProductsList } from '../../../core/mocks/products-list';
import { LoggerService } from '../../../services/logger.service';
import { DateService } from '../../../services/date.service';
import { PickUpDateComponent } from '../../../components/pick-up-date/pick-up-date.component';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../../../components/product-details/product-details.component';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit {
  productsList: Product[] = ProductsList;
  selected: boolean[] = [];
  sections: string[] = ['Rolls', 'Bread', 'Cake', 'Lunch', 'Rolls', 'Bread', 'Cake', 'Lunch'];

  constructor(
    private logger: LoggerService,
    private dateService: DateService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.selected[0] = true;
  }

  onSectionSelect(index: number) {
    this.selected.length = 0;
    this.selected[index] = !this.selected[index];
  }

  onCountReduce(index: number) {
    if (this.productsList[index].count === 0) {
      return;
    }
    this.productsList[index].count--;
  }

  async presentPickUpDateModal() {
    const modal = await this.modalController.create({
      component: PickUpDateComponent,
      cssClass: 'pick-up-date-modal'
    });
    return await modal.present();
  }

  async presentProductDetailsModal() {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      cssClass: 'product-details-modal'
    });
    return await modal.present();
  }

  onCountAdd(index: number, $event) {
    $event.stopPropagation();
    if (!this.dateService.date) {
      this.presentPickUpDateModal();
    } else {
      this.productsList[index].count++;
    }
  }
}
