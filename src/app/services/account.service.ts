import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account = new BehaviorSubject(null);
  sharedAccount = this.account.asObservable();

  constructor(
    private translate: TranslateService
  ) {
  }

  changeAccount(data) {
    this.account.next(data);
  }
}
