import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/http/bakeryFull';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/modal.service';

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
    private modalServ: ModalService
  ) { }

  ngOnInit() {}

  getProductCount(id: number): number {
    return this.cartServ.getProductCount(id);
  }

  removeProductFromCart(product: Product, $event) {
    $event.stopPropagation();
    this.cartServ.removeProductFromCart(product);
  }

  addProductToCart(product: Product, $event) {
    $event.stopPropagation();
    if (!this.date) {
      this.presentPickUpDateModal();
    } else {
      this.cartServ.addProductToCart(product);
    }
  }

  presentPickUpDateModal() {
    this.modalServ.presentPickUpDateModal();
  }

}
