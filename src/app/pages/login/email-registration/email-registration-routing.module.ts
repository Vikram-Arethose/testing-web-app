import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailRegistrationPage } from './email-registration.page';
import { ChangePasswordComponent } from '../../../components/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: EmailRegistrationPage
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailRegistrationPageRoutingModule {}
