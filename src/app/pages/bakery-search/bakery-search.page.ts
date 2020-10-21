import { Component, OnInit } from '@angular/core';

import { Bakery } from '../../models/bakery';
import { Bakeries } from '../../core/mocks/bakeries';

@Component({
  selector: 'app-bakery-search',
  templateUrl: './bakery-search.page.html',
  styleUrls: ['./bakery-search.page.scss'],
})
export class BakerySearchPage implements OnInit {
  bakeries: Bakery[] = Bakeries;

  constructor() {
  }

  ngOnInit() {
  }

  onLike(bakery: Bakery) {
    bakery.isFavorite = !bakery.isFavorite;
  }

}
