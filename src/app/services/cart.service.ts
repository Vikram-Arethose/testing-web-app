import { Injectable } from '@angular/core';
// import { Product } from '../models/product';
import { LoggerService } from './logger.service';
import { ProductInCart } from '../models/productInCart';
import { Product } from '../models/http/bakeryFull';
import { Router } from '@angular/router';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor(
    private logger: LoggerService,
    private router: Router,
  ) { }

  getCart(): Product[]  {
    return this.cart;
  }

  clearCart() {
    this.cart.length = 0;
  }

  getProductCount(id: number): number {
    const productCartIndex = this.cart.findIndex(item => item.id === id);
    if (productCartIndex === -1) {
      return 0;
    }
    return this.cart[productCartIndex].count;
  }

  addProductToCart(product: Product){
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = 1;
      this.cart.push(product);
    } else {
      if (product.quantity === 'unlimited' || product.quantity_items > this.cart[index].count) {
        this.cart[index].count++;
      }
    }
  }

  removeProductFromCart(product: Product) {
    const cartProductIndex = this.cart.findIndex(item => item.id === product.id);
    if (cartProductIndex === -1) {
      return;
    }
    if (this.cart[cartProductIndex].count > 1) {
      this.cart[cartProductIndex].count--;
    } else {
      this.cart.splice(cartProductIndex, 1);
      if (this.cart.length === 0) {
        this.router.navigate(['bakery-search/bakery']);
      }
    }
  }

  deleteCartProduct(i: number) {
    this.cart.splice(i, 1);
    if (this.cart.length === 0) {
      this.router.navigate(['bakery-search/bakery']);
    }
  }

  getTotalCount() {
    const reducer = (accumulator, currentValue: Product) => accumulator + currentValue.count;
    const initialValue = 0;
    return this.cart.reduce(reducer, initialValue);
  }

  getTotalPrice() {
    const reducer = (accumulator, currentValue: Product) => {
      return  accumulator + +(currentValue.count * Number.parseFloat(currentValue.price)).toFixed(2);
    };
    const initialValue = 0;
    return this.cart.reduce(reducer, initialValue);
  }
}
