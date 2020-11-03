import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoggerService } from '../../../../services/logger.service';
import { TranslateService } from '@ngx-translate/core';

import { Language } from '../../../../models/language';
import { AccountService } from '../../../../services/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  account;
  countries: string[] = ['Germany', 'Austria', 'Switzerland'];
  country: string[];
  data: string;
  inputText: string;
  placeholder: string;
  languages: Language[] = [
    { title: 'English', value: 'en'},
    { title: 'German', value: 'de'}
  ];
  language: string;
  settingLabel: string;
  settingLabel2: string;
  public title: string;
  dataForRepeat: any[];
  // private name = 'Jenny';
  private radioValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private translate: TranslateService,
    private accountService: AccountService
  ) {
    this.route.queryParams.subscribe( params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.page;
      }
    });
  }

  ngOnInit() {
    this.accountService.sharedAccount.subscribe(res => this.account = res);
    this.chooseDataToShow();
  }

  chooseDataToShow() {
    switch (this.data) {
      case 'name':
        this.title = 'Your Name';
        this.settingLabel = 'Name';
        this.inputText = this.account.name;
        break;
      case 'email':
        this.title = 'Your Email-Address';
        this.settingLabel = 'E-Mail-Address';
        this.inputText = this.account.email;
        break;
      case 'phone':
        this.title = 'Your Phone Number';
        this.settingLabel = 'Phone number';
        this.placeholder = 'Enter your number';
        break;
      case 'country':
        this.title = 'Country';
        this.settingLabel = 'Country';
        this.dataForRepeat = this.countries;
        break;
      case 'language':
        this.title = 'Language';
        this.settingLabel = 'Language';
        this.dataForRepeat = this.languages;
        this.radioValue = this.language;
        break;
      case 'notifications':
        this.title = 'Notifications';
        break;
      case 'password':
        this.title = 'Change Password';
        break;
      case 'payments':
        this.title = 'Payment Methods';
        break;
      case 'privacy':
        this.title = 'Privacy';
        break;
    }
  }

  open(subPage: string) {
    const navigationExtras: NavigationExtras = {
      state: { data: subPage }
    };
    this.router.navigate(['privacy'], navigationExtras);
  }

  onRadioChange(value) {
    this.radioValue = value;
  }

  accept() {
    this.account[this.data] = this.inputText;
    this.accountService.changeAccount(this.account);
  }

  acceptRadio() {
    if (this.data === 'language' && this.radioValue && this.radioValue !== this.account.language.value) {
      const selectedLanguage = this.languages.find(item => item.value === this.radioValue);
      this.account[this.data] = selectedLanguage;
      this.accountService.changeAccount(this.account);
      this.translate.use(this.radioValue);
    } else if (this.data === 'country' && this.radioValue !== this.account.country) {
      this.account[this.data] = this.radioValue;
      this.accountService.changeAccount(this.account);
    }
  }

}
