import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../services/platform.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {
  android = this.platformService.android;
  continueBtnLabel: string;
  btnRouterLink = '/location-setting';

  constructor(
    private translate: TranslateService,
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.getBtnLabel();
  }

  continue() {
  }

  getBtnLabel() {
    switch (this.platformService.loginWith) {
      case 'md':
        this.continueBtnLabel = this.translate.instant('start.googleBtn');
        break;
      case 'ios':
        this.continueBtnLabel = this.translate.instant('googleLogin.createAccBtn');
        break;
      case 'email':
        this.continueBtnLabel = this.translate.instant('general.continue');
        this.btnRouterLink = '/email-registration';
        break;
    }
  }

}
