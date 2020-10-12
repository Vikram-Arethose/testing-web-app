import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppleRegistrationPage } from './apple-registration.page';

const routes: Routes = [
  {
    path: '',
    component: AppleRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppleRegistrationPageRoutingModule {}
