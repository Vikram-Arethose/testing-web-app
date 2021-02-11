import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/http/bakeryFull';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/modal.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() date: string;
  @Input() product: Product;
  guest = localStorage.getItem('guest');

  constructor(
    private cartServ: CartService,
    private logger: LoggerService,
    private modalServ: ModalService
  ) { }

  ngOnInit() {
    this.presentProductDetailsModal();
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
