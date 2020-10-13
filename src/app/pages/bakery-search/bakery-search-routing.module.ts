import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakerySearchPage } from './bakery-search.page';

const routes: Routes = [
  {
    path: '',
    component: BakerySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakerySearchPageRoutingModule {}
