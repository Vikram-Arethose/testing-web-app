import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleLoginPageRoutingModule } from './google-login-routing.module';

import { GoogleLoginPage } from './google-login.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleLoginPageRoutingModule,
    TranslateModule
  ],
  declarations: [GoogleLoginPage]
})
export class GoogleLoginPageModule {}
