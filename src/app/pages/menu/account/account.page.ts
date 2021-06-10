import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { LoggerService } from '../../../services/logger.service';
import { HttpService } from '../../../services/http.service';
import { User } from '../../../models/user';
import { Language } from '../../../models/language';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account: User;
  language: Language;
  selectedLangLabel: string;
  version: string;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private logger: LoggerService,
    private loginServ: LoginService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.accountService.sharedAccount.subscribe((res: any) => {
      if (res) {
        this.account = res;
        this.selectedLangLabel = res.languages.find((item: Language) => item.isActive === true).label;
      }
      this.version = localStorage.getItem('appVersion');
    });

    this.http.getUserDetails().subscribe((res: User) => {
      this.accountService.changeAccount(res);
    });
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
    this.loginServ.logout();
  }

}
