import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';
import { ProductsList } from '../../../core/mocks/products-list';
import { LoggerService } from '../../../services/logger.service';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit {
  productsList: Product[] = ProductsList;
  selected: boolean[] = [];
  sections: string[] = ['Rolls', 'Bread', 'Cake', 'Lunch', 'Rolls', 'Bread', 'Cake', 'Lunch'];
  firstClick = true;

  constructor(
    private logger: LoggerService,
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.selected[0] = true;
    this.logger.log('productsList: ', this.productsList);
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

  onCountAdd(index: number) {
    if (this.firstClick) {
      this.dateService.presentPickUpDateModal();
      this.firstClick = false;
    }
    this.productsList[index].count++;
  }
}
