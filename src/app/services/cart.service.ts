import { Injectable } from '@angular/core';
// import { Product } from '../models/product';
import { LoggerService } from './logger.service';
import { ProductInCart } from '../models/productInCart';
import { Product } from '../models/http/bakeryFull';
import { Router } from '@angular/router';
import { DateService } from './date.service';
import { SaleServices } from './sale.services';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private absentProductsCart = [];
  private actualDate: string;
  product: Product;
  date: string;
  constructor(
    private logger: LoggerService,
    private router: Router,
    private saleServ: SaleServices,
    // private dateServ: DateService
  ) { }

  getCart(): Product[]  {
    return this.cart;
  }

  clearCart() {
    this.cart.length = 0;
  }

  updateCart(cart: Product[]) {
    this.cart = cart;
  }

  getProductCount(id: number): number {
    const productCartIndex = this.cart.findIndex(item => item.id === id);
    if (productCartIndex === -1) {
      return 0;
    }
    return this.cart[productCartIndex].count;
  }

  addProductToCart(product: Product, date = null ){
    this.product = product;
    this.date = date;
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = 1;
      product.isAvailable = true;
      this.cart.push(product);
    } else {
      if (product.quantity === 'unlimited' || product.quantity_items > this.cart[index].count) {
        this.cart[index].count++;
      }
      if (product.quantity === 'reorder') {
          this.cart[index].count++;
      }
    }
  }

  addReorderToCart(product, count) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = count;
      product.isAvailable = true;
      this.cart.push(product);
    }
  }
  addAbsentCart(products) {
    this.absentProductsCart.push(products);
  }
  getAbsentCart() {
    return this.absentProductsCart;
  }
  clearAbsentCart() {
    this.absentProductsCart.length = 0;
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

  /**
   * check if product exist discount price
   */
  getActualPrice(product) {
    return this.saleServ.checkSale(this.actualDate, product) ? product.special_price : product.price;
  }

  setActualDate(date) {
    this.actualDate = date;
  }

  getTotalPrice() {
    const reducer = (accumulator, currentValue: Product) => {
      return  accumulator + +(currentValue.count * Number.parseFloat(this.getActualPrice(currentValue))).toFixed(2);
    };
    const initialValue = 0;
    return this.cart.reduce(reducer, initialValue);
  }
  getModalAnswer(answer, product) {
    let slicedProduct;
    if (answer === 'yes') {
      slicedProduct = product;
      slicedProduct.sliced = 1;
      this.addProductToCart(product);
    }else {
      product.sliced = 0;
      this.addProductToCart(product);
    }
  }
}
