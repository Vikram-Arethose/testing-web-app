import { Component, OnInit } from '@angular/core';

import { Bakery } from '../../models/bakery';
import { Bakeries } from '../../core/mocks/bakeries';
import { LoggerService } from '../../services/logger.service';
import { GeolocationService } from '../../services/geolocation.service';
import { Coordinates } from '../../models/coordinates';
import { HomeBranch } from '../../models/http/homeBranch';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bakery-search',
  templateUrl: './bakery-search.page.html',
  styleUrls: ['./bakery-search.page.scss'],
})
export class BakerySearchPage implements OnInit {

  bakeries: Observable<HomeBranch[]>;
  iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
  iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';
  lat: number;
  lng: number;
  myAddress: string;

  constructor(
    private logger: LoggerService,
    private geolocationServ: GeolocationService,
    private httpServ: HttpService
  ) { }

  async ngOnInit() {
    if (await this.getMyLocation()) {
      this.myAddress = await this.geolocationServ.getAddress(this.lat, this.lng);
      this.bakeries = this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    }
  }

  async getMyLocation() {
    const coordinates: Coordinates = await this.geolocationServ.getCurrentPosition();
    if (coordinates) {
      this.logger.log('my coordinates : ', coordinates);
      this.lat = coordinates.latitude;
      this.lng = coordinates.longitude;
      return true;
    }
  }

  async getBakeries() {
    if (this.lat && this.lng) {
      this.bakeries = await this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    }
  }

  onFavourite(bakeryId: number, $event) {
     this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
       this.getBakeries();
    });
     $event.stopPropagation();
  }

  async doRefresh(event) {
    await this.getBakeries();
    event.target.complete();
  }

}
