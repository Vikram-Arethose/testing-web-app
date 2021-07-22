import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/http/bakeryFull';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/modal.service';
import { LoggerService } from '../../services/logger.service';
import { AccountService } from '../../services/account.service';
import { DateService } from '../../services/date.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SaleServices } from '../../services/sale.services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() date: string;
  @Input() product: Product;
  guest: boolean;
  private dateSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  dateFromDatePicker: Observable<string> = this.dateSource.asObservable();

  constructor(
    private accountServ: AccountService,
    private cartServ: CartService,
    private logger: LoggerService,
    private modalServ: ModalService,
    private saleServ: SaleServices
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
    this.cartServ.setActualDate(this.date);
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
