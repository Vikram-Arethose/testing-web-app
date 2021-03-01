import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
import { GeolocationService } from '../../services/geolocation.service';
import { HomeBranch } from '../../models/http/homeBranch';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '../../models/location';
import { BakeryService } from '../../services/bakery.service';

@Component({
  selector: 'app-bakery-search',
  templateUrl: './bakery-search.page.html',
  styleUrls: ['./bakery-search.page.scss'],
})
export class BakerySearchPage implements OnInit {

  bakeries$: Observable<HomeBranch[]>;
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

  ngOnInit() {
    this.geolocationServ.currLocation.subscribe(async (res: Location) => {
      if (res.lat && res.lng) {
        this.myAddress = res.address;
        this.lat = res.lat;
        this.lng = res.lng;
      } else {
        if (!await this.geolocationServ.getCurrentPosition()) {
          await this.router.navigate(['bakery-search/location-options']);
          return;
        }
      }
      this.getBakeries();
    });
  }

  ionViewWillEnter() {
    this.getBakeries();
  }

  getBakeries() {
    if (this.lat && this.lng) {
      this.bakeries$ = this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    }
  }

  onFavorite(bakeryId: number, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(() => this.getBakeries() );
    $event.stopPropagation();
  }

   doRefresh(event) {
     this.getBakeries();
     event.target.complete();
   }

  openSuggestBakeryUrl() {
    this.httpServ.getIab('https://broetchen.app/einen-baecker-empfehlen/');
  }

}
