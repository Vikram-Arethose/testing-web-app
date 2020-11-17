import { Component, OnInit } from '@angular/core';

import { Bakery } from '../../models/bakery';
import { Bakeries } from '../../core/mocks/bakeries';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-bakery-search',
  templateUrl: './bakery-search.page.html',
  styleUrls: ['./bakery-search.page.scss'],
})
export class BakerySearchPage implements OnInit {
  bakeries: Bakery[] = Bakeries;

  constructor(
    private logger: LoggerService
  ) {
  }

  ngOnInit() {
  }

  onLike(bakery, $event) {
    bakery.isFavorite = !bakery.isFavorite;
    $event.stopPropagation();
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
