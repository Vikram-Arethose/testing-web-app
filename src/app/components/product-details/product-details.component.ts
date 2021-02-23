import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../../models/http/bakeryFull';
import { LoggerService } from '../../services/logger.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  get availability(): string {
    if (this.product.availability_new.length === 7) {
      return this.translate.instant('productDetails.availableEveryDay');
    } else {
      const availableDaysLabels = this.product.availability_new.map(item => item.label);
      return this.translate.instant('productDetails.only') + ' ' + availableDaysLabels.join(', ');
    }
  }

  constructor(
    private modalController: ModalController,
    private logger: LoggerService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
