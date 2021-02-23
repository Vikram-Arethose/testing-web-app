import { Injectable, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

import { Md5 } from 'ts-md5/dist/md5';

import { LoggerService } from './logger.service';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';
import { PushService } from './push.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthResponse } from '../models/authResponse';
import { AnalyticsService } from './analytics.service';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any = {};

  constructor(
    private accountServ: AccountService,
    private alertController: AlertController,
    private analyticsServ: AnalyticsService,
    private httpService: HttpService,
    private logger: LoggerService,
    private ngZone: NgZone,
    private pushServ: PushService,
    private router: Router,
    private localStorageServ: LocalStorageService,
    private translate: TranslateService
  ) { }

  async googleLogin() {
    const googleUser = await Plugins.GoogleAuth.signIn(null) as any;
    // this.logger.log('googleUser: ', googleUser);
    if (googleUser) {
      // prepare user info for posting on server
      this.user.email = googleUser.email;
      this.user.first_name = googleUser.givenName;
      this.user.last_name = googleUser.familyName;
      this.user.reg_auth_type = 'google';
      this.user.reg_auth_token = googleUser.idToken;
      this.user.reg_auth_user_id = googleUser.id;
      // posting on server
      this.registerOnApi();
    }
  }

  openAppleSignIn() {
    this.analyticsServ.logEvent('start_apple_login');
    const {SignInWithApple} = Plugins;
    SignInWithApple.Authorize()
      .then(
        (res) => {
          this.analyticsServ.logEvent('apple_login_return_res', res);
          if (res.response && res.response.identityToken) {
            // prepare user info for posting on server
            this.user.email = res.response.email;
            this.user.first_name = res.response.givenName;
            this.user.last_name = res.response.familyName;
            this.user.reg_auth_type = 'apple';
            this.user.reg_auth_token = res.response.identityToken;
            this.user.reg_auth_user_id = res.response.user;
            this.logger.log('this.user', this.user);
            // posting on server
            this.registerOnApi();
          } else {
            this.logger.warn('res.response && res.response.identityToken do not true!');
          }
        })
      .catch((error) => {
        this.analyticsServ.logEvent('apple_login_return_error', error);
        this.presentAlert();
      });
  }

  async facebookSignIn(): Promise<void> {
    this.logger.log('facebookSignIn');
    const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

    const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    this.logger.log('login result: ', result);
    if (result && result.accessToken) {
      // prepare user info for posting on server
      this.user.reg_auth_type = 'facebook';
      const token = result.accessToken.token;
      const userIdHashed = new Md5().appendStr(result.accessToken.userId).end();
      this.user.reg_auth_token = userIdHashed;
      this.user.reg_auth_user_id = result.accessToken.userId;
      let userInfo: any = await fetch(`https://graph.facebook.com/${this.user.reg_auth_user_id}?fields=email,first_name,last_name&access_token=${token}`);
      userInfo = await userInfo.json();
      this.logger.log('userInfo: ', userInfo);
      if (userInfo.email) {
        this.user.email = userInfo.email;
        this.user.first_name = userInfo.first_name;
        this.user.last_name = userInfo.last_name;
        this.logger.log('this.user: ', this.user);
        // posting on server
        this.registerOnApi();
      } else {
        this.presentAlert();
      }
    } else {
      this.presentAlert();
    }
  }

  registerOnApi() {
    this.httpService.postData('/register', this.user).subscribe((res: AuthResponse) => {
      this.analyticsServ.logEvent('register_on_our_api_res', res);
      this.handleRegisterRes(res);
      this.router.navigate(['google-login']);
      this.analyticsServ.logEvent('login');
    }, error => {
      this.analyticsServ.logEvent('register_on_our_api_error', error);
      this.logger.warn('server response error: ', error);
    });
  }

  handleRegisterRes(res: AuthResponse) {
    this.logger.log('server res: ', res);
    localStorage.setItem('token', res.access_token);
    this.analyticsServ.setUser(res.access_token);
    const language = res.user.language;
    localStorage.setItem('language', language);
    this.translate.use(language);
    this.pushServ.initPush();
  }

  async logout() {
    await Plugins.FacebookLogin.logout();
    await this.router.navigate(['start']);
    localStorage.removeItem('token');
    this.analyticsServ.logEvent('logout');
    this.accountServ.changeGuest(false);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Please try again later',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
