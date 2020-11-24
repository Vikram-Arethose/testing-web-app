import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

import { Md5 } from 'ts-md5/dist/md5';

import { LoggerService } from './logger.service';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any = {};

  constructor(
    private alertController: AlertController,
    private logger: LoggerService,
    private httpService: HttpService,
    private router: Router,
    private localStorageServ: LocalStorageService
  ) { }

  async googleLogin() {
    const googleUser = await Plugins.GoogleAuth.signIn(null) as any;
    if (googleUser) {
      // prepare user info for posting on server
      this.user.email = googleUser.email;
      this.user.first_name = googleUser.givenName;
      this.user.reg_auth_type = 'google';
      this.user.reg_auth_token = googleUser.idToken;
      this.user.reg_auth_user_id = googleUser.id;
      this.logger.log('googleUser', this.user);
      // posting on server
      this.httpService.postData('/register', this.user).subscribe(
        (response: any) => {
          this.logger.log('server response: ', response);
          localStorage.setItem('token', response.access_token);
          this.router.navigate(['google-login']);
        });
    }
  }

  openAppleSignIn() {
    const { SignInWithApple } = Plugins;
    SignInWithApple.Authorize()
      .then(
        (res) => {
        if (res.response && res.response.identityToken) {
          // prepare user info for posting on server
          this.user.email = res.response.email;
          this.user.first_name = res.response.givenName;
          this.user.reg_auth_type = 'apple';
          this.user.reg_auth_token = res.response.identityToken;
          this.user.reg_auth_user_id = res.response.user;
          this.logger.log('this.user', this.user);
          // posting on server
          this.httpService.postData('/register', this.user).subscribe(
            (response: any) => {
              this.logger.log('server response: ', response);
              localStorage.setItem('token', response.access_token);
              this.router.navigate(['google-login']);
            }, error => {
              this.logger.warn('server response error: ', error);
            }
          );
        } else {
          this.logger.warn('res.response && res.response.identityToken do not true!');
        }
      })
      .catch((error) => {
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
      let userInfo: any = await fetch(`https://graph.facebook.com/${this.user.reg_auth_user_id}?fields=email,first_name&access_token=${token}`);
      userInfo = await userInfo.json();
      this.logger.log('userInfo: ', userInfo);
      if (userInfo.email) {
        this.user.email = userInfo.email;
        this.user.first_name = userInfo.first_name;
        this.logger.log('this.user: ', this.user);
        // posting on server
        this.httpService.postData('/register', this.user).subscribe(
          (response: any) => {
            this.logger.log('server response: ', response);
            localStorage.setItem('token', response.access_token);
            this.router.navigate(['google-login']);
          }, error => {
            this.logger.warn('server response error: ', error);
          });
      } else {
        this.presentAlert();
      }
    } else {
      this.presentAlert();
    }
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
