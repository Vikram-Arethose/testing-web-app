import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakerySearchPage } from './bakery-search.page';

const routes: Routes = [
  {
    path: '',
    component: BakerySearchPage
  },
  {
    path: 'location-options',
    loadChildren: () => import('./location-options/location-options.module').then( m => m.LocationOptionsPageModule)
  },
  {
    path: 'bakery',
    loadChildren: () => import('./bakery/bakery.module').then( m => m.BakeryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakerySearchPageRoutingModule {}
