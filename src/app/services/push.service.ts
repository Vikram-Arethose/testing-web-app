import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  Capacitor
} from '@capacitor/core';
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
        // this.createChannel();
      }
    });

    PushNotifications.addListener('registration', async (token: PushNotificationToken) => {
        const info = await Device.getInfo();
        this.logger.log('My token: ' + JSON.stringify(token));
        this.logger.log('info: ', info);
        this.httpServ.registerPushToken(token.value, info.model, info.platform, info.osVersion);
      }
    );

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        this.logger.log('Push received: ' + JSON.stringify(notification));
      }
    );
  }

  // createChannel() {
  //   const channel = {
  //     id: '1',
  //     name: 'channel1',
  //     description: 'channel for testing',
  //     sound: 'sound.mp3',
  //     importance: 5,
  //     visibility: 1,
  //     lights: true,
  //     lightColor: '#008000',
  //     vibration: true
  //   };
  //   // @ts-ignore
  //   PushNotifications.createChannel(channel)
  //     .then(success => {
  //       this.logger.log('success createChannel', success);
  //       PushNotifications.listChannels().then(res => this.logger.log('channels list: ', res));
  //     })
  //     .catch(error => this.logger.error(error));
  // }
}
