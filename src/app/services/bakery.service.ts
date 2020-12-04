import { Injectable } from '@angular/core';
import { DateService } from './date.service';
import { BakeryFull, Product } from '../models/http/bakeryFull';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  private bakerySource: BehaviorSubject<BakeryFull> = new BehaviorSubject<BakeryFull>(null);
  bakery: Observable<BakeryFull> = this.bakerySource.asObservable();

  constructor() {}

  changeBakery(bakery: BakeryFull) {
    this.bakerySource.next(bakery);
  }

  getIcon(feature: string) {
    let icon: string;

    switch (feature) {
      case 'seating':
        icon = '../../../assets/icons/bakery/people-at-table.svg';
        break;
      case 'coffeeToGo':
        icon = '../../../assets/icons/bakery/coffee.svg';
        break;
      case 'lunch':
        icon = '../../../assets/icons/bakery/drink.svg';
        break;
      case 'pastry':
        icon = '../../../assets/icons/bakery/piece-of-cake.svg';
        break;
    }

    return icon;
  }

}
