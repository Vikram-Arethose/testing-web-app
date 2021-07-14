import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-sliced-modal',
  templateUrl: './sliced-modal.component.html',
  styleUrls: ['./sliced-modal.component.scss'],
})
export class SlicedModalComponent implements OnInit {
  @Input() product;
  constructor(
    private modalServ: ModalService,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }
  getAnswer(answer) {
  this.cartService.getModalAnswer(answer, this.product);
  this.modalServ.closeModal();
  }
}
