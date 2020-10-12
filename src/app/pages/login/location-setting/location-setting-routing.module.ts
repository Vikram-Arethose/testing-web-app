import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationSettingPage } from './location-setting.page';

const routes: Routes = [
  {
    path: '',
    component: LocationSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationSettingPageRoutingModule {}
