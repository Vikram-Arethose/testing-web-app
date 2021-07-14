import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/http/bakeryFull';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/modal.service';
import { LoggerService } from '../../services/logger.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() date: string;
  @Input() product: Product;
  guest: boolean;
  // this field added to img when product has limited counter
  // counter = 12;
  constructor(
    private accountServ: AccountService,
    private cartServ: CartService,
    private logger: LoggerService,
    private modalServ: ModalService,
  ) { }

  ngOnInit() {
    this.accountServ.sharedGuest$.subscribe(res => this.guest = res);
  }

  getProductCount(id: number): number {
    return this.cartServ.getProductCount(id);
  }

  removeProductFromCart() {
    this.cartServ.removeProductFromCart(this.product);
  }

  addProductToCart() {
    console.log('product', this.product);
    if (this.guest) {
      this.modalServ.presentLoginFirstModal();
    } else {
      if (this.product.product_category_id === 2) {
        const checkBasketCount = this.cartServ.getCart().findIndex( item => item.id === this.product.id);
        if (checkBasketCount === -1 ) {
          this.modalServ.presentSlicedModal(this.product);
        }else {
          this.cartServ.addProductToCart(this.product);
        }
      }else {
        this.cartServ.addProductToCart(this.product);
      }
    }
  }

  presentPickUpDateModal() {
    this.modalServ.presentPickUpDateModal();
  }

  presentProductDetailsModal() {
    this.modalServ.presentProductDetailsModal(this.product);
  }

}
