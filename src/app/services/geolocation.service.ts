import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private logger: LoggerService
  ) { }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.logger.log('Current', coordinates);
    return coordinates;
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.logger.log('geolocation resp: ', resp);
    //   return resp;
    // }).catch((error) => {
    //   this.logger.warn('Error getting location', error);
    // });
  }
}
