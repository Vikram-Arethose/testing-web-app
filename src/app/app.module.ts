import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import { Interceptor } from './core/interceptors/interceptor';
import { ErrorService } from './services/error.service';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AgmCoreModule } from '@agm/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJO2_bi4MbTVRaSzcwj_jg-AvMYRA_9lQ',
      libraries: ['places']
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'de-De'},
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: ErrorHandler, useClass: ErrorService },
    NativeGeocoder,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
