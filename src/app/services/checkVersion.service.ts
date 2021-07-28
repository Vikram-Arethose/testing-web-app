import { Injectable } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AlertController } from '@ionic/angular';
import { HttpService } from './http.service';
import { Plugins } from '@capacitor/core';
import { Market } from '@ionic-native/market/ngx';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const { Device } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class CheckVersion {
  private userPackageName = 'com.brotchen.app';
  browser: any;
  constructor(
    private appVersion: AppVersion,
    public alertController: AlertController,
    private httpServ: HttpService,
    private market: Market,
    private translate: TranslateService,
    private iab: InAppBrowser,
  ) {
  }
async getUserVersion() {
  const userVersion = {
    version: '',
    packageName: null,
    platform: ''
  };
  this.appVersion.getVersionNumber().then( version => {
    userVersion.version = version;
    localStorage.setItem('appVersion', version);
  });
  this.appVersion.getPackageName().then( packName => {
    userVersion.packageName = packName;
  });
  const deviceInfo = await Device.getInfo();
  userVersion.platform = deviceInfo.platform;
  // this.userPackageName = userVersion.packageName;
  return userVersion;
}
 async checkReleaseVersion() {
   const userVersion = await this.getUserVersion();
   const versionResponse = await this.httpServ.getVersionFromDB();
   const appLastVersion = {
      ios: {
        version: versionResponse.app_data[0].version
      },
      android: {
        version: versionResponse.app_data[1].version
      },
     web: {
        version: '3.0'
      }
    };

   this.checkPlatform(userVersion, appLastVersion);
}
  checkPlatform(userVersion, appLastVersion) {
    const userPlatform = userVersion.platform;
    if (userPlatform === 'ios') {
      this.compareVersions(userVersion.version, appLastVersion.ios.version, userPlatform);
    }
    if ( userPlatform === 'android') {
      this.compareVersions(userVersion.version, appLastVersion.android.version, userPlatform);
    }
  }
  compareVersions(userAppVersion, appVersion, platform) {
    const userVersion = userAppVersion.split('.');
    const serverVersion = appVersion.split('.');
    if (+userVersion[0] < +serverVersion[0]) {
      this.updateAppAlert(platform);
    }
    if (+userVersion[1] < +serverVersion[1]) {
      this.updateAppAlert(platform);
    }
    // if (userAppVersion.length === appVersion.length) {
    //   if (+userAppVersion.replace(/[\s.,%]/g, '') < +appVersion.replace(/[\s.,%]/g, '')) {
    //     this.updateAppAlert(platform);
    //   }
    //   if (platform === 'web') {
    //     console.log('Planform web');
    //   }
    // }
    // // if (userAppVersion.length > appVersion.length) {
    // //   appVersion += '.0';
    // //   if (appVersion.localeCompare(userAppVersion) > 0 ) {
    // //     this.updateAppAlert(platform);
    // //   }else {
    // //   }
    // // }
    // if (userAppVersion.length < appVersion.length) {
    //   // userAppVersion += '.0';
    //   console.log('appVersion.localeCompare(userAppVersion)', appVersion.localeCompare(userAppVersion));
    //   if (appVersion.localeCompare(userAppVersion) > 0 ) {
    //     this.updateAppAlert(platform);
    //   }else {
    //   }
    // }
  }
  async updateAppAlert(platform) {
    const alert = await this.alertController.create({
      cssClass: 'update-alert',
      message: this.translate.instant('start.updateApp'),
      backdropDismiss: false,
      buttons: [
        {
          text: 'Update',
          handler: () => {
            if (platform === 'android') {
              this.market.open(`${this.userPackageName}`);
            }
            if (platform === 'ios') {
              this.openMarket();
            }
          }
        }
      ]
    });
    await alert.present();
  }
  openMarket() {
    this.browser = this.iab.create('https://apps.apple.com/us/app/brötchen-app/id1545325368', '_blank');
  }
}
