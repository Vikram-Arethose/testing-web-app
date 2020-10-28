import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from './logger.service';
import { ProductInCart } from '../models/productInCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ProductInCart[] = [];

  constructor(
    private logger: LoggerService
  ) { }

  getCart(): ProductInCart[]  {
    return this.cart;
  }

  getProductCount(id: number): number {
    const productCartIndex = this.cart.findIndex(item => item.id === id);
    if (productCartIndex === -1) {
      return 0;
    }
    return this.cart[productCartIndex].count;
  }

  addProductToCart(product: Product){
    const cartProductIndex = this.cart.findIndex(item => item.id === product.id);
    if (cartProductIndex === -1) {
      this.cart.push({id: product.id, name: product.name, price: product.price, count: 1});
    } else {
      this.cart[cartProductIndex].count++;
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
    }
  }

  getTotalCount() {
    const reducer = (accumulator, currentValue: ProductInCart) => accumulator + currentValue.count;
    const initialValue = 0;
    const totalCount = this.cart.reduce(reducer, initialValue);
    return totalCount;
  }

  getTotalPrice() {
    const reducer = (accumulator, currentValue: ProductInCart) => accumulator + +(currentValue.count * currentValue.price).toFixed(2);
    const initialValue = 0;
    const totalPrice = this.cart.reduce(reducer, initialValue);
    return totalPrice;
  }
}
