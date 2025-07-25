import { Injectable } from '@angular/core';
import { DateService } from './date.service';
import { BakeryFull, Product, BakeryDetails } from '../models/http/bakeryFull';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from './cart.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoggerService } from './logger.service';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  private bakeryData: BakeryFull;
  private bakerySource: BehaviorSubject<BakeryFull> = new BehaviorSubject<BakeryFull>(null);
  bakery: Observable<BakeryFull> = this.bakerySource.asObservable();

  private bakeryDetailsSource: BehaviorSubject<BakeryDetails> = new BehaviorSubject<BakeryDetails>(null);
  bakeryDetails$ = this.bakeryDetailsSource.asObservable();
 
  private addressesSubject = new BehaviorSubject<Address>(null);
   addresses$ = this.addressesSubject.asObservable();


  constructor(
    private cartServ: CartService,
    private logger: LoggerService,
    private router: Router
  ) {}

  changeBakery(bakery: BakeryFull) {
    this.bakeryData = bakery;
    this.bakerySource.next(bakery);
  }

  setBakeryDetails(details: BakeryDetails) {
    this.bakeryDetailsSource.next(details);
  }

  getBakeryDetails(): BakeryDetails {
    return this.bakeryDetailsSource.getValue();
  }

  updateAddresses(addresses: Address) {
    this.addressesSubject.next(addresses);
  }

  getCurrentAddresses(): Address{
    return this.addressesSubject.getValue();
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

  getDataForPayment(date: string) {
    date = new Date(date).toISOString();
    return {
      branch_id: this.bakeryData.branchDetails.id,
      basket_sum: this.cartServ.getTotalPrice(),
      // tslint:disable-next-line:max-line-length
      products: this.cartServ.getCart().map((item: Product) => ({ id: item.id, quantity: item.count, sliced: (!item.sliced ? 0 : item.sliced) })),
      pickup_date: date.split('T')[0] + ' ' + date.split('T')[1].substr(0, 5),
      delivery: this.bakeryData.branchDetails.delivery = 1 ? true : false,
    };
  }

  openConfirmOrder(orderId: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        orderId
      }
    };
    this.router.navigate(['orders'], navigationExtras);
  }

}
