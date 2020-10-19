import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';
import { TranslateService } from '@ngx-translate/core';

import { Language } from '../../../models/language';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  countries: string[] = ['Germany', 'Austria', 'Switzerland'];
  country: string[];
  data: string;
  inputValue: string;
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
  private radioValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private translate: TranslateService
  ) {
    this.route.queryParams.subscribe( params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.page;
      }
    });
  }

  ngOnInit() {
    this.chooseDataToShow();
  }

  chooseDataToShow() {
    switch (this.data) {
      case 'name':
        this.title = 'Your Name';
        this.settingLabel = 'Name';
        this.inputValue = 'Jenny';
        break;
      case 'email':
        this.title = 'Your Email-Address';
        this.settingLabel = 'E-Mail-Address';
        this.inputValue = 'Jenny@gmail.com';
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
    this.language = value;
    this.logger.log('this.language', this.language);
    this.translate.use(this.language);
  }

}
