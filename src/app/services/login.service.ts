import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

import { LoggerService } from './logger.service';
import { HttpService } from './http.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { RegisterData } from '../models/registerData';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: RegisterData;

  constructor(
    private alertController: AlertController,
    private logger: LoggerService,
    private httpService: HttpService,
    private router: Router,
    private localStorageServ: LocalStorageService
  ) { }

  openAppleSignIn() {
    const { SignInWithApple } = Plugins;
    SignInWithApple.Authorize()
      .then((res) => {
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
              this.localStorageServ.setArr([{key: 'token', value: response.access_token}, {key: 'user', value: response.user}]);
              this.router.navigate(['google-login']);
            }, error => {
              this.logger.log('server response error: ', error);
            }
          );
        } else {
          this.logger.warn('res.response && res.response.identityToken do not true!');
        }
      })
      .catch((error) => {
        this.logger.warn('response error', error);
      });
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
