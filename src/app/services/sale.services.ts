import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class SaleServices {
  constructor() {}
  checkSale(currentDate, product) {
    const date = moment(currentDate);
    const from = moment(product.special_price_from);
    const to = moment(product.special_price_to);
    if (product.special_price) {
      return date > from && date < to;
    }
  }
}
