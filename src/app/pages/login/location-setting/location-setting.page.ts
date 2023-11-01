import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { GoogleMap, GoogleMapsModule } from '@angular/google-maps'

import { LoggerService } from '../../../services/logger.service';
import { GeolocationService } from '../../../services/geolocation.service';
import { BranchNear } from '../../../models/http/branchesNear';
import { HttpService } from '../../../services/http.service';
import { Observable, Subscription } from 'rxjs';
import { Location } from '../../../models/location';

@Component({
  selector: 'app-location-setting',
  templateUrl: './location-setting.page.html',
  styleUrls: ['./location-setting.page.scss']
})
export class LocationSettingPage implements OnInit {

  branchesNear$: Observable<BranchNear[]>;
  useCurrLocation: boolean;
  locationSearched: boolean;
  location: string;
  lat: number;
  lng: number;
  googleMapType = 'satellite';
  showMap: boolean;
  private subscription: Subscription;
  @ViewChild(GoogleMap)
  public map!: GoogleMap;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  defaultPosition = {    
    lat: 51.165691,
    lng: 10.451526,
};

  constructor(  
    private ngZone: NgZone,
    private logger: LoggerService,
    private geolocationServ: GeolocationService,
    private httpServ: HttpService,
  ) { }

  ngOnInit() {
    this.makeInit();
  }

  ionViewDidEnter() {
    this.geolocationServ.findAddress(this.searchElementRef).then(() => {
      this.getBranchesNear();
      this.useCurrLocation = false;
      this.locationSearched = true;
    });
  }

  async makeInit() {
    this.defaultPosition = this.geolocationServ.defaultLocation;

    this.subscription = this.geolocationServ.currLocation.subscribe((res: Location) => {
      this.lat = res.lat;
      this.lng = res.lng;
      this.logger.log('lat, lng', this.lat, this.lng);
    });
    if (await this.geolocationServ.getCurrentPosition()) {
      this.useCurrLocation = true;
    } else {
      this.geolocationServ.changeLocation();
    }
    this.showMap = true;
    this.getBranchesNear();
  }

  async onUseCurrLocation() {
    await this.geolocationServ.getCurrentPosition();
    if (this.lat && this.lng) {
      this.useCurrLocation = true;
      this.getBranchesNear();
      this.resetSearchField();
    }
  }

  getBranchesNear() {
    if (this.lng && this.lat) {
      this.branchesNear$ = this.httpServ.getBranchesNear(this.lat.toString(), this.lng.toString());
    }
  }

  resetSearchField() {
    this.searchElementRef.nativeElement.value = '';
    this.locationSearched = false;
  }

  ionViewDidLeave() {
    this.resetSearchField();
    this.subscription.unsubscribe();
    this.showMap = false;
  }

}
