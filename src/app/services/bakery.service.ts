import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  constructor() { }

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
