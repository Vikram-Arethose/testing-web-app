import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmCodeComponent } from './confirm-code.component';



const routes: Routes = [
  {
    path: '',
    component: ConfirmCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCodeRoutingModule {}
