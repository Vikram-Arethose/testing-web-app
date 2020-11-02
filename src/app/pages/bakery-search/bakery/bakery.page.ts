import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';
import { ProductsList } from '../../../core/mocks/products-list';
import { LoggerService } from '../../../services/logger.service';
import { DateService } from '../../../services/date.service';
import { PickUpDateComponent } from '../../../components/pick-up-date/pick-up-date.component';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../../../components/product-details/product-details.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit {
  info: boolean = true;
  cart: Product[] = [];
  productsList: Product[] = ProductsList;
  selected: boolean[] = [];
  sections: string[] = ['Rolls', 'Bread', 'Cake', 'Lunch', 'Rolls', 'Bread', 'Cake', 'Lunch'];
  iconsRow: string[] = ['../../../../assets/icons/bakery/people-at-table.svg', '../../../../assets/icons/bakery/piece-of-cake.svg',
    '../../../../assets/icons/bakery/coffee.svg'];
  openingHours = [{day: 'Mon', time: '7:00 - 18:30'}, {day: 'Tue', time: '7:00 - 18:30'}, {day: 'Wed', time: '7:00 - 18:30'},
    {day: 'Thu', time: '7:00 - 18:30'}, {day: 'Fri', time: '7:00 - 18:30'}, {day: 'Sat', time: '7:00 - 18:30'}, {day: 'Sun', time: '7:00 - 18:30'}];

  constructor(
    private logger: LoggerService,
    private dateService: DateService,
    private modalController: ModalController,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.selected[0] = true;
  }

  onSectionSelect(index: number) {
    this.selected.length = 0;
    this.selected[index] = !this.selected[index];
  }

  getCart() {
    this.cartService.getCart();
  }

  getProductCount(id: number): number {
    return this.cartService.getProductCount(id);
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

  removeProductFromCart(product: Product, $event) {
    $event.stopPropagation();
    this.cartService.removeProductFromCart(product);
  }

  addProductToCart(product: Product, $event) {
    $event.stopPropagation();
    if (!this.dateService.date) {
      this.presentPickUpDateModal();
    } else {
      this.cartService.addProductToCart(product);
    }
  }

  onExit() {
    this.cartService.cart.length = 0;
  }

  onInfo() {
    this.info = !this.info;
  }
}
