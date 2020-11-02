import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private account = new BehaviorSubject({name: 'Jenny', email: 'Jenny@gmail.com', language: { title: 'English', value: 'en'}, });
  sharedAccount = this.account.asObservable();

  constructor(
    private translate: TranslateService
  ) {
  }

  changeAccount(data) {
    this.account.next(data);
  }
}
