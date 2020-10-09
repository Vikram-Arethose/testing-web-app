import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationSettingPageRoutingModule } from './location-setting-routing.module';

import { LocationSettingPage } from './location-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationSettingPageRoutingModule
  ],
  declarations: [LocationSettingPage]
})
export class LocationSettingPageModule {}
