import { Injectable } from '@angular/core';
import { Capacitor, DeviceInfo, Plugins, PushNotificationToken } from '@capacitor/core';
import { LoggerService } from './logger.service';
import { HttpService } from './http.service';

const { PushNotifications } = Plugins;
const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private logger: LoggerService,
    private httpServ: HttpService
  ) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener('registration', async (token: PushNotificationToken) => {
        const info = await Device.getInfo();
        this.logger.log('My token: ' + JSON.stringify(token));
        this.logger.log('info: ', info);
        this.httpServ.registerPushToken(token.value, info.model, info.platform, info.osVersion);
      }
    );
  }
}
