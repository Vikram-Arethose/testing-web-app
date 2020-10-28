import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakeryPage } from './bakery.page';

const routes: Routes = [
  {
    path: '',
    component: BakeryPage
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakeryPageRoutingModule {}
