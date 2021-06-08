import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PlatformService } from '../../../services/platform.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AccountService } from '../../../services/account.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  android = this.platformService.android;
  otherOptOn = false;
  userVersion = {
    build: null,
    version: '',
    packageName: null
  };
  appLastVersion = {
    build: 6,
    version: '1.4',
  };

  constructor(
    private accountServ: AccountService,
    private platformService: PlatformService,
    private router: Router,
    private loginService: LoginService,
    private appVersion: AppVersion,
    private market: Market,
    public alertController: AlertController,
    private translate: TranslateService,
  ) {
  }

  ngOnInit() {
    this.appVersion.getVersionCode().then(build => {
      this.userVersion.build = build;
    });
    this.appVersion.getVersionNumber().then( version => {
      this.userVersion.version = version;
    });
    this.appVersion.getPackageName().then( packName => {
      this.userVersion.packageName = packName;
    });
    setTimeout(() => {
       this.checkVersionApp();
     }, 1000);
  }

  onOtherOpt($event) {
    $event.stopPropagation();
    this.otherOptOn = true;
  }

  loginWith(loginWith: string, isLogin?: boolean) {
    this.platformService.loginWith = loginWith;
    switch (loginWith) {
      case 'ios':
        this.loginService.openAppleSignIn();
        break;
      case 'google':
        this.loginService.googleLogin();
        break;
      case 'facebook':
        this.loginService.facebookSignIn();
        break;
    }
    if (isLogin) {
      const navigationExtras: NavigationExtras = {
        state: { isLogin }
      };
      this.router.navigate(['email-registration'], navigationExtras);
    }
  }

  onContentTap() {
    if (this.otherOptOn) {
      this.otherOptOn = false;
    }
  }

  guestLogin() {
    this.router.navigate(['/location-setting']);
    this.accountServ.changeGuest(true);
  }
  checkVersionApp() {
    if (+this.userVersion.version === +this.appLastVersion.version && this.userVersion.build === this.appLastVersion.build) {
      console.log('version and build is ok');
    } else if (+this.userVersion.version === +this.appLastVersion.version && this.userVersion.build > this.appLastVersion.build) {
      console.log('ALERT user has latest build than database');
    }else if (+this.userVersion.version > +this.appLastVersion.version ) {
      console.log('ALERT user has latest VERSION than database');
    } else if (+this.userVersion.version < +this.appLastVersion.version || this.userVersion.build < this.appLastVersion.build){
      console.log('need update app version is old');
      // this.market.open(`${this.userVersion.packageName}`);
      this.updateAppAlert();
    }
    // if ( this.userVersion.version < this.appLastVersion.version) {
    //   // this.market.open(`${this.userVersion.packageName}`);
    //   console.log('need update app version is old');
    // }
    // if (this.userVersion.version === this.appLastVersion.version) {
    //   if(this.userVersion.build < this.appLastVersion.build) {
    //     console.log('need update app version Ok  build is old');
    //     // this.market.open(`${this.userVersion.packageName}`);
    //   }else {
    //     console.log('version and build is ok');
    //   }
    // }else {
    //   console.log('ALERT user has latest version than database');
    // }
  }
  async updateAppAlert() {
    const alert = await this.alertController.create({
      cssClass: 'update-alert',
      message: this.translate.instant('start.updateApp'),
      backdropDismiss: false,
      buttons: [
         {
          text: 'Update',
          handler: () => {
            this.market.open(`${this.userVersion.packageName}`);
          }
        }
      ]
    });
    await alert.present();
  }
}
