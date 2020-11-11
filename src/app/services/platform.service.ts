import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  android = this.isPlatformAndroid();
  loginWith: string;

  constructor(
    private platform: Platform,
    private logger: LoggerService
  ) { }

  isPlatformAndroid(): boolean {
    let result: boolean;
    result = this.platform.is('android');
    this.logger.log('platform is android: ', result);
    return result;
  }

}
