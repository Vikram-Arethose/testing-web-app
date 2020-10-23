import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakeryPage } from './bakery.page';
import { PickUpDateComponent } from '../../../components/pick-up-date/pick-up-date.component';

const routes: Routes = [
  {
    path: '',
    component: BakeryPage
  },
  {
    path: 'pick',
    component: PickUpDateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakeryPageRoutingModule {}
