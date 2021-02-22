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
    if (!this.date) {
      this.presentPickUpDateModal();
    } else if (this.guest) {
      // TODO: present modal
      this.logger.log('You should login first!');
    } else {
      this.cartServ.addProductToCart(this.product);
    }
  }

  presentPickUpDateModal() {
    this.modalServ.presentPickUpDateModal();
  }

  presentProductDetailsModal() {
    this.modalServ.presentProductDetailsModal(this.product);
  }

}
