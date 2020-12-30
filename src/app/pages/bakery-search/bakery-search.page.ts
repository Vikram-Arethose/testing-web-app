import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
import { GeolocationService } from '../../services/geolocation.service';
import { HomeBranch } from '../../models/http/homeBranch';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '../../models/location';
import { BakeryService } from '../../services/bakery.service';

@Component({
  selector: 'app-bakery-search',
  templateUrl: './bakery-search.page.html',
  styleUrls: ['./bakery-search.page.scss'],
})
export class BakerySearchPage implements OnInit {

  bakeries: Observable<HomeBranch[]>;
  currLocation: Observable<Location>;
  iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
  iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';
  lat: number;
  lng: number;
  myAddress: string;
  today: string;

  constructor(
    public bakeryServ: BakeryService,
    private logger: LoggerService,
    private geolocationServ: GeolocationService,
    private httpServ: HttpService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.geolocationServ.currLocation.subscribe((res: Location) => {
      this.myAddress = res.address;
      this.lat = res.lat;
      this.lng = res.lng;
    });
    if (!await this.geolocationServ.getCurrentPosition()) {
      await this.router.navigate(['bakery-search/location-options']);
    }
  }

  async ionViewWillEnter() {
    if (this.lat && this.lng) {
      this.bakeries = this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    }
  }

  async getBakeries() {
    if (this.lat && this.lng) {
      this.bakeries = await this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    }
  }

  onFavorite(bakeryId: number, $event) {
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
