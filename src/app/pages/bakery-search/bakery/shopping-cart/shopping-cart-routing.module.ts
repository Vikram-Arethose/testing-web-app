import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartPage } from './shopping-cart.page';
import { GooglePayComponent } from '../../../../components/google-pay/google-pay.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPage
  },
  {
    path: 'gpay',
    component: GooglePayComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartPageRoutingModule {}
