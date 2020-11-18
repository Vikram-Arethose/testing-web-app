import { Component, OnInit } from '@angular/core';

import { Bakery } from '../../models/bakery';
import { Bakeries } from '../../core/mocks/bakeries';
import { LoggerService } from '../../services/logger.service';
import { GeolocationService } from '../../services/geolocation.service';
import { Coordinates } from '../../models/coordinates';

@Component({
  selector: 'app-bakery-search',
  templateUrl: './bakery-search.page.html',
  styleUrls: ['./bakery-search.page.scss'],
})
export class BakerySearchPage implements OnInit {

  bakeries: Bakery[] = Bakeries;
  lat: number;
  lng: number;
  myAddress: string;

  constructor(
    private logger: LoggerService,
    private geolocationServ: GeolocationService
  ) { }

  async ngOnInit() {
    await this.getMyLocation();
    this.myAddress = await this.geolocationServ.getAddress(this.lat, this.lng);
  }

  async getMyLocation() {
    const coordinates: Coordinates = await this.geolocationServ.getCurrentPosition();
    if (coordinates) {
      this.logger.log('coordinates: ', coordinates);
      this.lat = coordinates.latitude;
      this.lng = coordinates.longitude;
    }
  }

  onLike(bakery, $event) {
    bakery.isFavorite = !bakery.isFavorite;
    $event.stopPropagation();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
