import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeolocationService } from '../../../services/geolocation.service';
import { Location } from '../../../models/location';
import { LocalStorageService } from '../../../services/local-storage.service';
import { LoggerService } from '../../../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-options',
  templateUrl: './location-options.page.html',
  styleUrls: ['./location-options.page.scss'],
})
export class LocationOptionsPage implements OnInit {

  locationArr: Location[];
  @ViewChild('search')
  private searchElementRef: ElementRef;
  myAddress: string;

  constructor(
    private geolocationServ: GeolocationService,
    private localStorageServ: LocalStorageService,
    private logger: LoggerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.geolocationServ.currLocation.subscribe((res: Location) => {
      this.myAddress = res.address;
      setTimeout(() => {
        this.locationArr = this.localStorageServ.get('locationArr');
      }, 0);
    });
  }

  ionViewDidEnter() {
    this.geolocationServ.findAddress(this.searchElementRef);
  }

  setMyLocation(location: Location) {
    this.geolocationServ.changeLocation(location);
  }

  go() {
    this.router.navigate(['bakery-search']);
  }

}
