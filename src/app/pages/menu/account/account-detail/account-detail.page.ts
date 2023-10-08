import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoggerService } from '../../../../services/logger.service';
import { TranslateService } from '@ngx-translate/core';

import { Language } from '../../../../models/language';
import { AccountService } from '../../../../services/account.service';
import { HttpService } from '../../../../services/http.service';
import { User } from '../../../../models/user';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  account: User;
  countries: string[] = ['Germany', 'Austria', 'Switzerland'];
  country: string[];
  changePasswordForm: UntypedFormGroup;
  data: string;
  enter: string = this.translate.instant('account.enter');
  inputText: string;
  placeholder: string;
  language: string;
  settingLabel: string;
  settingLabel2: string;
  type: string;
  public title: string;
  dataForRepeat: any[];
  radioValue: string;
  private selectedLang: Language;

  constructor(
    private alertServ: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private translate: TranslateService,
    private accountService: AccountService,
    private httpServ: HttpService,
    private formBuilder: UntypedFormBuilder
  ) {
    this.route.queryParams.subscribe( params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.page;
      }
    });
  }

  ngOnInit() {
    this.accountService.sharedAccount.subscribe(res => {
      this.account = res;
      this.selectedLang = this.account.languages.find(item => item.isActive === true);
      this.chooseDataToShow();
    });

    this.initChangePasswordForm();
  }

  initChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPasswordConfirm: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  chooseDataToShow() {
    const your: string = this.translate.instant('account.your');
    switch (this.data) {
      case 'first_name':
        this.title = your + 'Name';
        this.settingLabel = 'Name';
        this.inputText = this.account.first_name;
        this.type = 'text';
        break;
      case 'last_name':
        const lastName: string = this.translate.instant('emailRegister.lastName');
        this.title = your + lastName;
        this.settingLabel = lastName;
        this.inputText = this.account.last_name;
        this.type = 'text';
        break;
      case 'email':
        const email: string = this.translate.instant('account.email');
        this.title = your + email;
        this.settingLabel = email;
        this.inputText = this.account.email;
        this.type = 'email';
        break;
      case 'phone':
        const phone: string = this.translate.instant('account.phoneNum');
        this.title = your + phone;
        this.settingLabel = phone;
        this.inputText = this.account.phone;
        this.placeholder = this.translate.instant('account.enterYourNum');
        this.type = 'tel';
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
        this.dataForRepeat = this.account.languages;
        this.radioValue = this.selectedLang.code;
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
    const updateData = {
      first_name: this.account.first_name,
      last_name: this.account.last_name,
      email: this.account.email,
      phone: this.account.phone,
    };
    this.updateUserDetails(updateData);
  }

  acceptRadio() {
    if (this.data === 'language' && this.radioValue) {
    // if (this.data === 'language' && this.radioValue && this.radioValue !== this.selectedLang.code) {
      const selectedLanguageIndex: number = this.account.languages.findIndex(item => item.code === this.radioValue);
      this.account.languages.forEach(item => item.isActive = false);
      this.account.languages[selectedLanguageIndex].isActive = true;
      localStorage.setItem('language', this.radioValue);
      this.updateUserDetails({language_id: this.account.languages[selectedLanguageIndex].id});
    } else if (this.data === 'country' && this.radioValue !== this.account.country) {
      this.account[this.data] = this.radioValue;
      this.updateUserDetails({country: this.radioValue});
    }
  }

  updateUserDetails(updateData) {
    this.httpServ.updateUserDetails(updateData).subscribe((res: boolean) => {
      if (res === true) {
        this.accountService.changeAccount(this.account);
        if (this.data === 'language') {
          this.translate.use(this.radioValue);
        } else if (this.data === 'password') {
          this.alertServ.presentToast('Success!');
          this.changePasswordForm.reset();
        }
      }
    });
  }

  onNotificationChange() {
    this.account.notifications = !this.account.notifications;
    this.accountService.changeAccount(this.account);
    this.updateUserDetails({notifications: this.account.notifications});
  }

  submitChangePassword() {
    const newPassword = this.changePasswordForm.get(['newPassword']);
    const newPasswordConfirm = this.changePasswordForm.get(['newPasswordConfirm']);
    if (newPassword.value !== newPasswordConfirm.value) {
      this.alertServ.presentAlert('New password and confirm new password must be equal!');
      newPassword.reset();
      newPasswordConfirm.reset();
    } else {
      this.updateUserDetails({
        current_password: this.changePasswordForm.get(['currentPassword']).value,
        new_password: newPassword.value});
    }
  }

  deleteAccount() {
    this.httpServ.deleteUserAccount().subscribe((res: boolean) => {
      if (res) {
        this.router.navigate(['start']);
        localStorage.clear();
      }
    });
  }

}
