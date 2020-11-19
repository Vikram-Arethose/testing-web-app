import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Coordinates } from '../../../models/coordinates';
import { GeolocationService } from '../../../services/geolocation.service';

@Component({
  selector: 'app-location-options',
  templateUrl: './location-options.page.html',
  styleUrls: ['./location-options.page.scss'],
})
export class LocationOptionsPage implements OnInit {

  @ViewChild('search')
  private searchElementRef: ElementRef;

  constructor(
    private geolocationServ: GeolocationService
  ) { }

  async ngOnInit() {
    // if (await this.getMyLocation()) {
    //   this.myAddress = await this.geolocationServ.getAddress(this.lat, this.lng);
    //   this.bakeries = this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    // }
  }

  async getInitData() {
    const coordinates: Coordinates = await this.geolocationServ.getCurrentPosition();
    if (coordinates) {
    }
  }

}
