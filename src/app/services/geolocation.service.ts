import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Plugins } from '@capacitor/core';
import { AlertService } from './alert.service';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private logger: LoggerService,
    private alertServ: AlertService
  ) { }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.logger.log('Current', coordinates);
      return coordinates;
    } catch (error) {
        this.logger.warn('Geolocation.getCurrentPosition error: ', error);
        if (error.message) {
          this.alertServ.presentAlert(error.message + ' You can go to app settings and enable geolocation permission.');
        }
    }
  }
}
