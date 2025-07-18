import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../../models/http/bakeryFull';
import { LoggerService } from '../../services/logger.service';
import { TranslateService } from '@ngx-translate/core';
import { BakeryService } from 'src/app/services/bakery.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  get availability(): string { 
         let bakeryDetails
         let isDelveryAvailable
      this.bakeryService.bakeryDetails$.subscribe(details => {
      bakeryDetails = details;
      if(bakeryDetails && bakeryDetails.delivery && bakeryDetails.delivery == 1)isDelveryAvailable = true;
      console.log('bakeryDetails: ', bakeryDetails);
    });
        let takeAwayOrDeliveryAvailability = isDelveryAvailable ? this.product?.deliver_availability : this.product?.availability_new;
    if (takeAwayOrDeliveryAvailability?.length === 7) {
      return this.translate.instant('productDetails.availableEveryDay');
    } else {
      if(takeAwayOrDeliveryAvailability == null || takeAwayOrDeliveryAvailability?.length === 0) {
        return this.translate.instant('productDetails.notAvailable');
      }else{
        const availableDaysLabels = takeAwayOrDeliveryAvailability?.map(item => item.label);
        return this.translate.instant('productDetails.only') + ' ' + availableDaysLabels?.join(', ');
      }
    }
  }

  constructor(
    private modalController: ModalController,
    private logger: LoggerService,
    private translate: TranslateService,
    private bakeryService: BakeryService
    
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
