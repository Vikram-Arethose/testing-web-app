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
  enter: string = this.translate.instant('account.enter');
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
  radioValue: string;

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
    const your: string = this.translate.instant('account.your');
    switch (this.data) {
      case 'name':
        this.title = your + 'Name';
        this.settingLabel = 'Name';
        this.inputText = this.account.name;
        break;
      case 'email':
        const email: string = this.translate.instant('account.email');
        this.title = your + email;
        this.settingLabel = email;
        this.inputText = this.account.email;
        break;
      case 'phone':
        const phone: string = this.translate.instant('account.phoneNum');
        this.title = your + phone;
        this.settingLabel = phone;
        this.placeholder = this.translate.instant('account.enterYourNum');
        break;
      case 'country':
        const country: string = this.translate.instant('account.country');
        this.title = country;
        this.settingLabel = country;
        this.dataForRepeat = this.countries;
        this.radioValue = this.account.country;
        break;
      case 'language':
        const language: string = this.translate.instant('account.language');
        this.title = language;
        this.settingLabel = language;
        this.dataForRepeat = this.languages;
        this.radioValue = this.account.language.value;
        break;
      case 'notifications':
        this.title = this.translate.instant('account.notifications');
        break;
      case 'password':
        this.title = this.translate.instant('account.changePass');
        break;
      case 'payments':
        this.title = this.translate.instant('account.paymentMeth');
        break;
      case 'privacy':
        this.title = this.translate.instant('account.privacy');
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
