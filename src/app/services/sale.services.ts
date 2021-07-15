import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SaleServices {
  constructor() {}
  checkSale(date, product) {
    if (product.special_price) {
      return new Date(date).getTime() > new Date(product.special_price_from).getTime() && new Date(date).getTime() < new Date(product.special_price_to).getTime();
    }
  }
}
