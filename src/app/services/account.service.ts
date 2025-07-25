import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public sharedGuest$: Observable<boolean>;
  private account = new BehaviorSubject(null);
  private guest: BehaviorSubject<boolean>;
  sharedAccount = this.account.asObservable();

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.guest = new BehaviorSubject<boolean>(false);
    this.sharedGuest$ = this.guest.asObservable();
  }

  changeAccount(data) {
    this.account.next(data);
  }

  changeGuest(value: boolean) {
    this.guest.next(value);
  }

  open(page: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: page
      }
    };
    this.router.navigate(['privacy'], navigationExtras);
  }

}
