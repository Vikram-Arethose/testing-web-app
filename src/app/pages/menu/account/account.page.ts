import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account: any;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private logger: LoggerService
  ) { }

  ngOnInit() {
    this.accountService.sharedAccount.subscribe(res => this.account = res);
  }

  open(page: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        page
      }
    };
    this.router.navigate(['account/account-detail'], navigationExtras);
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['start']);
  }

}
