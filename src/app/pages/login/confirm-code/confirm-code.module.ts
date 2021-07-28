import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { ConfirmCodeComponent } from './confirm-code.component';
import { ConfirmCodeRoutingModule } from './confirm-code-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ConfirmCodeRoutingModule
  ],
  declarations: [ConfirmCodeComponent]
})
export class ConfirmCodeModule {}
