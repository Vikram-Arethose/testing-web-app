(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [{
  path: '',
  redirectTo: 'start',
  pathMatch: 'full'
}, {
  path: 'start',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_start_start_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/start/start.module */ 91021)).then(m => m.StartPageModule)
}, {
  path: 'confirm-code',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_confirm-code_confirm-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/confirm-code/confirm-code.module */ 72222)).then(m => m.ConfirmCodeModule)
}, {
  path: 'google-login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_google-login_google-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/google-login/google-login.module */ 71306)).then(m => m.GoogleLoginPageModule)
}, {
  path: 'location-setting',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_location-setting_location-setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/location-setting/location-setting.module */ 46400)).then(m => m.LocationSettingPageModule)
}, {
  path: 'apple-registration',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_apple-registration_apple-registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/apple-registration/apple-registration.module */ 91845)).then(m => m.AppleRegistrationPageModule)
}, {
  path: 'email-registration',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("src_app_pages_login_email-registration_email-registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/email-registration/email-registration.module */ 6685)).then(m => m.EmailRegistrationPageModule)
}, {
  path: 'bakery-search',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_bakery-search_bakery-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bakery-search/bakery-search.module */ 83841)).then(m => m.BakerySearchPageModule)
}, {
  path: 'account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/account/account.module */ 70657)).then(m => m.AccountPageModule)
}, {
  path: 'privacy',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_privacy_privacy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/privacy/privacy.module */ 43152)).then(m => m.PrivacyPageModule)
}, {
  path: 'inbox',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_inbox_inbox_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/inbox/inbox.module */ 96190)).then(m => m.InboxPageModule)
}, {
  path: 'orders',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_orders_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/orders/orders.module */ 26825)).then(m => m.OrdersPageModule)
}, {
  path: 'favorites',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_favorites_favorites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/favorites/favorites.module */ 38095)).then(m => m.FavoritesPageModule)
}, {
  path: 'payment-methods',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_payment-methods_payment-methods_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/payment-methods/payment-methods.module */ 82058)).then(m => m.PaymentMethodsPageModule)
}, {
  path: 'legal',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_menu_legal_legal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/legal/legal.module */ 67362)).then(m => m.LegalPageModule)
}, {
  path: 'bakery',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_change-password_change-password_component_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_bakery-search_bakery_bakery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bakery-search/bakery/bakery.module */ 51304)).then(m => m.BakeryPageModule)
}, {
  path: 'addresses',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_address-list_address-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/address-list/address-list.module */ 97345)).then(m => m.AddressListPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules,
    anchorScrolling: 'enabled'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/login.service */ 54120);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/logger.service */ 51273);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/account.service */ 89876);
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/push.service */ 52314);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _services_checkVersion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/checkVersion.service */ 89104);

















const {
  App
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__.Plugins;
let AppComponent = class AppComponent {
  constructor(accountServ, loginServ, logger, menu, platform, pushServ, router, splashScreen, statusBar, translate, iab, alertController, checkVersion) {
    this.accountServ = accountServ;
    this.loginServ = loginServ;
    this.logger = logger;
    this.menu = menu;
    this.platform = platform;
    this.pushServ = pushServ;
    this.router = router;
    this.splashScreen = splashScreen;
    this.statusBar = statusBar;
    this.translate = translate;
    this.iab = iab;
    this.alertController = alertController;
    this.checkVersion = checkVersion;
    this.appPages = [{
      title: 'menu.inbox',
      url: '/inbox',
      src: './assets/icons/menu/mail-png.svg'
    }, {
      title: 'menu.orders',
      url: '/orders',
      src: './assets/icons/menu/shopping-cart-png.svg'
    }, {
      title: 'menu.favorites',
      url: '/favorites',
      src: './assets/icons/bakery/heart-outline.svg'
    }, {
      title: 'menu.paymentMethods',
      url: '/payment-methods',
      src: './assets/icons/menu/credit-card-png.svg'
    }, {
      title: 'menu.legal',
      url: '/legal',
      src: 'assets/icons/menu/check.svg',
      forGuest: true
    }, {
      title: 'menu.maps',
      url: '/location-setting',
      src: 'assets/icons/menu/location.svg',
      // icon: 'location',
      forGuest: true
    }];
    this.selectedIndex = 0;
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.translate.setDefaultLang('de');
      this.useLanguage();
      this.openFirstPage();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
      this.pushServ.setResetPushBadgeCount();
      this.checkVersion.checkReleaseVersion();
      this.deviceBackButton();
      this.platform.resume.subscribe(() => {
        this.checkVersion.checkReleaseVersion();
        const redirectToEnterCode = localStorage.getItem('ConfirmStatusCode');
        if (redirectToEnterCode === 'true') {
          this.router.navigate(['confirm-code']);
        }
      });
    });
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.accountServ.sharedGuest$.subscribe(res => this.guest = res);
  }
  useLanguage() {
    const language = localStorage.getItem('language');
    if (language) {
      this.translate.use(language);
    }
  }
  toAccount() {
    if (!this.guest) {
      this.router.navigate(['account']);
      this.menu.close();
    }
  }
  openFirstPage() {
    const redirectToEnterCode = localStorage.getItem('ConfirmStatusCode');
    if (redirectToEnterCode === 'true') {
      this.router.navigate(['confirm-code']);
    } else {
      const token = localStorage.getItem('token');
      console.log(token);
      if (token) {
        this.router.navigate(['bakery-search']);
      } else {
        this.router.navigate(['start']);
      }
    }
  }
  openSupportPage(url) {
    this.browser = this.iab.create(url, '_blank');
  }
  // changePasswordCheck() {
  //   const redirectToEnterCode = localStorage.getItem('ConfirmStatusCode');
  //   if (redirectToEnterCode === 'true') {
  //     setTimeout(() => {
  //       this.router.navigate(['email-registration/confirm-code']);
  //     }, 1200);
  //   }
  // }
  deviceBackButton() {
    this.platform.backButton.subscribe(() => {
      if (this.router.url === '/bakery-search') {
        App.exitApp();
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_6__.AccountService
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_5__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
  }, {
    type: _services_push_service__WEBPACK_IMPORTED_MODULE_7__.PushService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
  }, {
    type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }, {
    type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__.InAppBrowser
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
  }, {
    type: _services_checkVersion_service__WEBPACK_IMPORTED_MODULE_10__.CheckVersion
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/de */ 48855);
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/extra/de */ 7470);
/* harmony import */ var _core_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/interceptors/interceptor */ 33787);
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/error.service */ 84889);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/market/ngx */ 68538);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/google-maps */ 3889);























(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11__["default"], 'de-DE', _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_12__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11__["default"], 'en-US', _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_12__["default"]);
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
  entryComponents: [],
  imports: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_16__.GoogleMapsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
    }
  })],
  providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.LOCALE_ID,
    useValue: 'de-De'
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.LOCALE_ID,
    useValue: 'en-Us'
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_4__.Interceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ErrorHandler,
    useClass: _services_error_service__WEBPACK_IMPORTED_MODULE_5__.ErrorService
  }, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__.AppVersion, _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_9__.Market],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
})], AppModule);


/***/ }),

/***/ 33787:
/*!**************************************************!*\
  !*** ./src/app/core/interceptors/interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interceptor": () => (/* binding */ Interceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/logger.service */ 51273);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loading.service */ 4471);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analytics.service */ 44832);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ 25970);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ 54120);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);











let Interceptor = class Interceptor {
  constructor(analyticsServ, logger, alertServ, loadingService, loginServ, translate) {
    this.analyticsServ = analyticsServ;
    this.logger = logger;
    this.alertServ = alertServ;
    this.loadingService = loadingService;
    this.loginServ = loginServ;
    this.translate = translate;
    this.message = '';
  }
  intercept(request, next) {
    const token = localStorage.getItem('token');
    if (token) {
      // if the token is  stored in localstorage add it to http header
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Authorization', 'Bearer ' + token);
      // clone http to the custom AuthRequest and send it to the server
      const AuthRequest = request.clone({
        headers
      });
      return this.handleError(next.handle(AuthRequest));
    } else {
      return this.handleError(next.handle(request));
    }
  }
  handleError(requestForHandling) {
    return requestForHandling.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      if (error.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        this.logger.warn(`Interceptor: A client-side or network error occurred. An error message:`, error.error.message);
        this.alertServ.presentAlert(error.error.message);
      } else {
        if (error.error.unregisterd_by_form) {
          this.logger.warn(`Interceptor: A client-side or network error occurred. An error message:`, error.error.message);
          this.message = this.translate.instant('emailRegister.unregisteredByForm');
        }
        if (error.error.wrong_code) {
          this.logger.warn(`Interceptor: A client-side or network error occurred. An error message:`, error.error.message);
          this.message = this.translate.instant('emailRegister.wrongCode');
        }
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        if (error.status === 401) {
          this.loginServ.logout();
        }
        this.logger.warn('Interceptor: An error occurred: ', error);
        if (error.status === 405) {
          this.message = error.error.message;
          this.alertServ.presentAlert(this.message);
        }
        if (error.status === 400) {
          this.message = error.error.message;
          this.alertServ.presentAlert(this.message);
        }
        if (this.message === '') {
          this.alertServ.presentAlert();
        } else {
          this.alertServ.presentAlert(this.message);
        }
      }
      this.analyticsServ.logEvent('interceptor_http_error_response', error);
      this.loadingService.dismiss();
      // If you want to return a new response:
      // return of(new HttpResponse({body: [{name: "Default value..."}]}));
      // If you want to return the error on the upper level:
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
      // or just return nothing:
      // return EMPTY;
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }];
};
Interceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()], Interceptor);


/***/ }),

/***/ 89876:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let AccountService = class AccountService {
  constructor(translate, router) {
    this.translate = translate;
    this.router = router;
    this.account = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.sharedAccount = this.account.asObservable();
    this.guest = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sharedGuest$ = this.guest.asObservable();
  }
  changeAccount(data) {
    this.account.next(data);
  }
  changeGuest(value) {
    this.guest.next(value);
  }
  open(page) {
    const navigationExtras = {
      state: {
        data: page
      }
    };
    this.router.navigate(['privacy'], navigationExtras);
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
AccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AccountService);


/***/ }),

/***/ 25970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





let AlertService = class AlertService {
  constructor(alertCtrl, toastController, translate) {
    this.alertCtrl = alertCtrl;
    this.toastController = toastController;
    this.translate = translate;
  }
  presentAlert(message, header) {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!message) {
        message = _this.translate.instant('alert.defaultErrorMessage');
      }
      const alert = yield _this.alertCtrl.create({
        header: localStorage.getItem('language') === 'de' && header ? header : _this.translate.instant('alert.error'),
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  presentToast(message) {
    var _this2 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message,
        duration: 2000
      });
      toast.present();
    })();
  }
  comparePasswordToast(message) {
    var _this3 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    })();
  }
  deletedProductToast(message) {
    var _this4 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastController.create({
        message,
        duration: 4000,
        cssClass: 'deleted-product',
        position: 'middle'
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
  }];
};
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AlertService);


/***/ }),

/***/ 44832:
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 67285);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ 51273);






let AnalyticsService = class AnalyticsService {
  constructor(logger, router) {
    this.logger = logger;
    this.router = router;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(e => {
      console.log('route changed: ', e.url);
      this.setScreenName(e.url);
    });
  }
  setScreenName(screenName) {
    _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.FirebaseAnalytics.setScreenName({
      screenName
    });
  }
  setUser(userId) {
    _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.FirebaseAnalytics.setUserId({
      userId
    });
  }
  logEvent(name, data) {
    // prepare data
    const params = {};
    if (data) {
      data = JSON.stringify(data).match(/.{1,100}/g);
      data.forEach((elem, index) => {
        params['data' + index] = elem;
      });
    }
    // logEvent
    _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.FirebaseAnalytics.logEvent({
      name,
      params
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
AnalyticsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AnalyticsService);


/***/ }),

/***/ 24934:
/*!********************************************!*\
  !*** ./src/app/services/bakery.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakeryService": () => (/* binding */ BakeryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.service */ 90910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ 51273);






let BakeryService = class BakeryService {
  constructor(cartServ, logger, router) {
    this.cartServ = cartServ;
    this.logger = logger;
    this.router = router;
    this.bakerySource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.bakery = this.bakerySource.asObservable();
    this.bakeryDetailsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.bakeryDetails$ = this.bakeryDetailsSource.asObservable();
    this.addressesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.addresses$ = this.addressesSubject.asObservable();
  }
  changeBakery(bakery) {
    this.bakeryData = bakery;
    this.bakerySource.next(bakery);
  }
  setBakeryDetails(details) {
    this.bakeryDetailsSource.next(details);
  }
  getBakeryDetails() {
    return this.bakeryDetailsSource.getValue();
  }
  updateAddresses(addresses) {
    this.addressesSubject.next(addresses);
  }
  getCurrentAddresses() {
    return this.addressesSubject.getValue();
  }
  getIcon(feature) {
    let icon;
    switch (feature) {
      case 'seating':
        icon = '../../../assets/icons/bakery/people-at-table.svg';
        break;
      case 'coffeeToGo':
        icon = '../../../assets/icons/bakery/coffee.svg';
        break;
      case 'lunch':
        icon = '../../../assets/icons/bakery/drink.svg';
        break;
      case 'pastry':
        icon = '../../../assets/icons/bakery/piece-of-cake.svg';
        break;
    }
    return icon;
  }
  getDataForPayment(date) {
    date = new Date(date).toISOString();
    return {
      branch_id: this.bakeryData.branchDetails.id,
      basket_sum: this.cartServ.getTotalPrice(),
      // tslint:disable-next-line:max-line-length
      products: this.cartServ.getCart().map(item => ({
        id: item.id,
        quantity: item.count,
        sliced: !item.sliced ? 0 : item.sliced
      })),
      pickup_date: date.split('T')[0] + ' ' + date.split('T')[1].substr(0, 5),
      delivery: this.bakeryData.branchDetails.delivery =  true ? true : 0
    };
  }
  openConfirmOrder(orderId) {
    const navigationExtras = {
      state: {
        orderId
      }
    };
    this.router.navigate(['orders'], navigationExtras);
  }
  static #_ = this.ctorParameters = () => [{
    type: _cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService
  }, {
    type: _logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
BakeryService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], BakeryService);


/***/ }),

/***/ 90910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.service */ 51273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sale_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.services */ 73030);





let CartService = class CartService {
  constructor(logger, router, saleServ) {
    this.logger = logger;
    this.router = router;
    this.saleServ = saleServ;
    this.cart = [];
    this.absentProductsCart = [];
  }
  getCart() {
    return this.cart;
  }
  clearCart() {
    this.cart.length = 0;
  }
  updateCart(cart) {
    this.cart = cart;
  }
  getProductCount(id) {
    const productCartIndex = this.cart.findIndex(item => item.id === id);
    if (productCartIndex === -1) {
      return 0;
    }
    return this.cart[productCartIndex].count;
  }
  addProductToCart(product, date = null) {
    this.product = product;
    this.date = date;
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = 1;
      product.isAvailable = true;
      this.cart.push(product);
    } else {
      if (product.quantity === 'unlimited' || product.quantity_items > this.cart[index].count) {
        this.cart[index].count++;
      }
      if (product.quantity === 'reorder') {
        this.cart[index].count++;
      }
    }
  }
  addReorderToCart(product, count) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.count = count;
      product.isAvailable = true;
      this.cart.push(product);
    }
  }
  addAbsentCart(products) {
    this.absentProductsCart.push(products);
  }
  getAbsentCart() {
    return this.absentProductsCart;
  }
  clearAbsentCart() {
    this.absentProductsCart.length = 0;
  }
  removeProductFromCart(product) {
    const cartProductIndex = this.cart.findIndex(item => item.id === product.id);
    if (cartProductIndex === -1) {
      return;
    }
    if (this.cart[cartProductIndex].count > 1) {
      this.cart[cartProductIndex].count--;
    } else {
      this.cart.splice(cartProductIndex, 1);
      if (this.cart.length === 0) {
        this.router.navigate(['bakery-search/bakery']);
      }
    }
  }
  deleteCartProduct(i) {
    this.cart.splice(i, 1);
    if (this.cart.length === 0) {
      this.router.navigate(['bakery-search/bakery']);
    }
  }
  getTotalCount() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.count;
    const initialValue = 0;
    return this.cart.reduce(reducer, initialValue);
  }
  /**
   * check if product exist discount price
   */
  getActualPrice(product) {
    return this.saleServ.checkSale(this.actualDate, product) ? product.special_price : product.special_price === product.price ? product.old_price : product.price;
    //  if (this.saleServ.checkSale(this.actualDate, product)) {
    //    return product.special_price;
    //  }else {
    //    if (product.special_price === product.price) {
    //      return product.old_price;
    //   }else {
    //      return product.price;
    //   }
    // }
  }

  setActualDate(date) {
    this.actualDate = date;
  }
  getTotalPrice() {
    const reducer = (accumulator, currentValue) => {
      return accumulator + +(currentValue.count * Number.parseFloat(this.getActualPrice(currentValue))).toFixed(2);
    };
    const initialValue = 0;
    return this.cart.reduce(reducer, initialValue);
  }
  getModalAnswer(answer, product) {
    let slicedProduct;
    if (answer === 'yes') {
      slicedProduct = product;
      slicedProduct.sliced = 1;
      this.addProductToCart(product);
    } else {
      product.sliced = 0;
      this.addProductToCart(product);
    }
  }
  setPeymentsSettings(data) {
    this.payPalSettings = data;
  }
  getPaymentSettings() {
    return this.payPalSettings;
  }
  static #_ = this.ctorParameters = () => [{
    type: _logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: _sale_services__WEBPACK_IMPORTED_MODULE_1__.SaleServices
  }];
};
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], CartService);


/***/ }),

/***/ 89104:
/*!**************************************************!*\
  !*** ./src/app/services/checkVersion.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckVersion": () => (/* binding */ CheckVersion)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/market/ngx */ 68538);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);










const {
  Device
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Plugins;
let CheckVersion = class CheckVersion {
  constructor(appVersion, alertController, httpServ, market, translate, iab) {
    this.appVersion = appVersion;
    this.alertController = alertController;
    this.httpServ = httpServ;
    this.market = market;
    this.translate = translate;
    this.iab = iab;
    this.userPackageName = 'com.brotchen.app';
  }
  getUserVersion() {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userVersion = {
        version: '',
        packageName: null,
        platform: ''
      };
      _this.appVersion.getVersionNumber().then(version => {
        userVersion.version = version;
        localStorage.setItem('appVersion', version);
      });
      _this.appVersion.getPackageName().then(packName => {
        userVersion.packageName = packName;
      });
      const deviceInfo = yield Device.getInfo();
      userVersion.platform = deviceInfo.platform;
      // this.userPackageName = userVersion.packageName;
      return userVersion;
    })();
  }
  checkReleaseVersion() {
    var _this2 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userVersion = yield _this2.getUserVersion();
      const versionResponse = yield _this2.httpServ.getVersionFromDB();
      const appLastVersion = {
        ios: {
          version: versionResponse.app_data[0].version
        },
        android: {
          version: versionResponse.app_data[1].version
        },
        web: {
          version: '3.0'
        }
      };
      _this2.checkPlatform(userVersion, appLastVersion);
    })();
  }
  checkPlatform(userVersion, appLastVersion) {
    const userPlatform = userVersion.platform;
    if (userPlatform === 'ios') {
      this.compareVersions(userVersion.version, appLastVersion.ios.version, userPlatform);
    }
    if (userPlatform === 'android') {
      this.compareVersions(userVersion.version, appLastVersion.android.version, userPlatform);
    }
  }
  compareVersions(userAppVersion, appVersion, platform) {
    const userVersion = userAppVersion.split('.');
    const serverVersion = appVersion.split('.');
    if (+userVersion[0] < +serverVersion[0]) {
      this.updateAppAlert(platform);
    }
    if (+userVersion[1] < +serverVersion[1]) {
      this.updateAppAlert(platform);
    }
    // if (userAppVersion.length === appVersion.length) {
    //   if (+userAppVersion.replace(/[\s.,%]/g, '') < +appVersion.replace(/[\s.,%]/g, '')) {
    //     this.updateAppAlert(platform);
    //   }
    //   if (platform === 'web') {
    //     console.log('Planform web');
    //   }
    // }
    // // if (userAppVersion.length > appVersion.length) {
    // //   appVersion += '.0';
    // //   if (appVersion.localeCompare(userAppVersion) > 0 ) {
    // //     this.updateAppAlert(platform);
    // //   }else {
    // //   }
    // // }
    // if (userAppVersion.length < appVersion.length) {
    //   // userAppVersion += '.0';
    //   console.log('appVersion.localeCompare(userAppVersion)', appVersion.localeCompare(userAppVersion));
    //   if (appVersion.localeCompare(userAppVersion) > 0 ) {
    //     this.updateAppAlert(platform);
    //   }else {
    //   }
    // }
  }

  updateAppAlert(platform) {
    var _this3 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'update-alert',
        message: _this3.translate.instant('start.updateApp'),
        backdropDismiss: false,
        buttons: [{
          text: 'Update',
          handler: () => {
            if (platform === 'android') {
              _this3.market.open(`${_this3.userPackageName}`);
            }
            if (platform === 'ios') {
              _this3.openMarket();
            }
          }
        }]
      });
      yield alert.present();
    })();
  }
  openMarket() {
    this.browser = this.iab.create('https://apps.apple.com/us/app/brötchen-app/id1545325368', '_blank');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_1__.AppVersion
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
  }, {
    type: _http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
  }, {
    type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__.Market
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }, {
    type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
  }];
};
CheckVersion = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], CheckVersion);


/***/ }),

/***/ 82963:
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateService": () => (/* binding */ DateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ 51273);
/* harmony import */ var _bakery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bakery.service */ 24934);






let DateService = class DateService {
  constructor(logger, bakeryServ) {
    this.logger = logger;
    this.bakeryServ = bakeryServ;
    this.datePickerMin = '';
    this.datePickerMax = '';
    this.weekDays = ['sun', 'mo', 'tue', 'wed', 'thu', 'fri', 'sat'];
    this.weekDaysFull = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.dateSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    this.dateShared = this.dateSource.asObservable();
    this.fullDay = 86400;
    this.isDelveryAvailable = false;
    this.bakeryServ.bakery.subscribe(res => {
      this.bakery = res;
    });
  }
  getDatePickerMin() {
    const today = new Date();
    return this.datePickerMin = moment__WEBPACK_IMPORTED_MODULE_0__(today).format('YYYY-MM-DD');
  }
  getDatePickerMax() {
    const today = new Date();
    const maxDate = moment__WEBPACK_IMPORTED_MODULE_0__(today).add(1, 'months');
    return this.datePickerMax = moment__WEBPACK_IMPORTED_MODULE_0__(maxDate).format('YYYY-MM-DD');
  }
  changeDate(date) {
    this.logger.log('date: ', date);
    this.date = date;
    this.dateSource.next(date);
  }
  getDaysAvailability(product) {
    // check days availability
    const selectedDay = this.selectedDate.getDay();
    let takeAwayOrDeliveryAvailability = this.isDelveryAvailable ? product?.deliver_availability : product?.availability_new;
    if (takeAwayOrDeliveryAvailability ? takeAwayOrDeliveryAvailability.some(item => item.day === this.weekDays[selectedDay]) : false) {
      // check product available from to
      if (product?.period_available_from && product?.period_available_to && !this.isDelveryAvailable) {
        this.availableFrom = this.getLocalFromServerDate(product.period_available_from);
        this.availableTo = this.getLocalFromServerDate(product.period_available_to);
        return this.selectedDate >= this.availableFrom && this.selectedDate <= this.availableTo;
      }
      let Slecteddaytimings = product?.delivery_days?.default[this.weekDaysFull[selectedDay]];
      if (Slecteddaytimings && this.isDelveryAvailable) {
        const slots = Object.keys(Slecteddaytimings).filter(key => key !== 'is_disable') // Ignore non-slot keys
        .map(key => Slecteddaytimings[key]);
        return slots.some(slot => {
          const [startH, startM] = slot.start.split(':').map(Number);
          const [endH, endM] = slot.end.split(':').map(Number);
          const selectedMinutes = this.selectedDate.getHours() * 60 + this.selectedDate.getMinutes();
          const startMinutes = startH * 60 + startM;
          const endMinutes = endH * 60 + endM;
          return selectedMinutes >= startMinutes && selectedMinutes <= endMinutes;
        });
      }
    } else {
      return false;
    }
  }
  checkSpecificTime(time) {
    if (time >= this.specificTime) {
      return true;
    }
    if (time < this.specificTime) {
      return false;
    }
  }
  checkPreOrderTime(time) {
    if (time <= this.preOrderTime) {
      return true;
    }
    if (time > this.preOrderTime) {
      return false;
    }
  }
  datesAreOnSameDay(today, selected) {
    return today.getFullYear() === selected.getFullYear() && today.getMonth() === selected.getMonth() && today.getDate() === selected.getDate();
  }
  getProductAvailability(product) {
    this.bakeryServ.bakeryDetails$.subscribe(details => {
      this.bakeryDetails = details;
      if (this.bakeryDetails && this.bakeryDetails.delivery && this.bakeryDetails.delivery == 1) {
        this.isDelveryAvailable = true;
      } else {
        this.isDelveryAvailable = false;
      }
      console.log('bakeryDetails: ', this.bakeryDetails);
    });
    if (product.sold_out_products.length > 0) {
      const soldOutDate = product.sold_out_products[0].sold_out_date;
      if (moment__WEBPACK_IMPORTED_MODULE_0__(this.date) > moment__WEBPACK_IMPORTED_MODULE_0__(soldOutDate)) {
        return true;
      } else {
        return false;
      }
    }
    this.specificTime = product.specific_time;
    this.preOrderTime = product.pre_order_time;
    if (product.quantity === 'unavailable') {
      return false;
    }
    // check availability by date
    if (this.date) {
      const currentTime = moment__WEBPACK_IMPORTED_MODULE_0__();
      const startOfDay = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day');
      this.userTime = currentTime.diff(startOfDay, 'minutes') * 60;
      this.selectedDate = new Date(this.date);
      this.timeHourOffset = -this.selectedDate.getTimezoneOffset() * 60;
      // check pre order period and pre_order_time
      const minPreOrderDate = new Date();
      this.orderTime = (this.selectedDate.getTime() - Math.floor(Date.now() / 1000 / 60 / 60 / 24) * 24 * 60 * 60 * 1000) / 1000 + this.timeHourOffset;
      minPreOrderDate.setSeconds(product.pre_order_period);
      if (!this.isDelveryAvailable) {
        if (!product.pre_order_time || product.pre_order_time && product.pre_order_time === 86400) {
          if (minPreOrderDate > this.selectedDate) {
            return false;
          }
        } else {
          const zeroStartTime = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0);
          zeroStartTime.setSeconds(product.pre_order_time);
          if (this.datesAreOnSameDay(new Date(), this.selectedDate) && this.selectedDate > zeroStartTime) {
            return false;
          }
        }
        if (this.specificTime === 0) {
          if (this.orderTime < this.fullDay) {
            if (this.userTime > product.pre_order_time) {
              return false;
            }
            if (product.pre_order_time > this.fullDay) {
              return false;
            }
          }
          if (product.pre_order_time === this.fullDay) {
            if (minPreOrderDate > this.selectedDate) {
              return false;
            }
          }
          if (this.orderTime > this.fullDay && this.orderTime < this.fullDay * 2 && product.pre_order_time > this.fullDay) {
            if (this.userTime > product.pre_order_time - this.fullDay) {
              return false;
            }
          }
        }
        if (this.specificTime > 0) {
          if (this.orderTime < this.fullDay) {
            return this.checkSpecificTime(this.orderTime);
          }
          if (this.orderTime > this.fullDay) {
            const notTodayOrderTime = this.orderTime - this.fullDay * Math.trunc(this.orderTime / this.fullDay);
            return this.checkSpecificTime(notTodayOrderTime);
          }
        }
      }
      return this.getDaysAvailability(product);
    } else {
      return true;
    }
  }
  getDateFromPicker() {
    return this.date;
  }
  getOrderDateInSeconds() {
    const hourOffset = -new Date(this.date).getTimezoneOffset() * 60;
    return (new Date(this.date).getTime() - Math.floor(Date.now() / 1000 / 60 / 60 / 24) * 24 * 60 * 60 * 1000) / 1000 + hourOffset;
  }
  mapProductPrice(product) {
    // check if there is special_price and if true change price for the product
    if (this.date && product.special_price) {
      if (product.special_price_from && product.special_price_to) {
        if (this.selectedDate > new Date(product.special_price_from) && this.selectedDate < new Date(product.special_price_to)) {
          product.isSpecialPrice = true;
        }
      } else {
        product.isSpecialPrice = true;
      }
    }
    return product;
  }
  mapProductInCartAvailability(product) {
    this.selectedDate = new Date(this.date);
    if (this.getDaysAvailability(product)) {
      product.isAvailable = true;
    } else {
      product.isAvailable = false;
    }
    return product;
  }
  getOpeningHoursByDate(date) {
    const selectedDay = this.weekDaysFull[date.getDay()];
    let openHoursDayArr = this.bakery.branchDetails.opening_hours_new.default[selectedDay];
    if (openHoursDayArr.length === 3) {
      return [];
    }
    openHoursDayArr = openHoursDayArr.filter(item => item.start && item.end);
    return openHoursDayArr;
  }
  getDateByTime(date, startOrEnd, openingHours) {
    const newDate = new Date(date);
    newDate.setHours(parseInt(openingHours[startOrEnd].split(':')[0], 10), parseInt(openingHours.start.split(':')[1], 10));
    return newDate;
  }
  checkAllWeek() {
    if (this.bakery.branchDetails.opening_hours_new.allWeek) {
      return true;
    }
  }
  getSpecialDateByDate(date) {
    const myDate = moment__WEBPACK_IMPORTED_MODULE_0__(date).format('DD-MM-YYYY');
    const findDay = this.bakery.branchDetails.opening_hours_new.specialDate.find(item => item.date === myDate);
    // if (findDay !== undefined && !findDay.closed){
    //   return true;
    // }
    return findDay;
  }
  checkSelectedDate(date) {
    const specDate = this.getSpecialDateByDate(date);
    // // tslint:disable-next-line:max-line-length
    if (specDate !== undefined) {
      if (!specDate.closed) {
        const openingH = [{
          start: specDate.start_am,
          end: specDate.end_am
        }, {
          start: specDate.start_pm,
          end: specDate.end_pm
        }];
        return openingH.some(item => date >= this.getDateByTime(date, 'start', item) && date <= this.getDateByTime(date, 'end', item) && date > new Date());
      }
      return false;
    }
    if (this.checkAllWeek()) {
      return true;
    }
    const openingHoursArr = this.getOpeningHoursByDate(date);
    return openingHoursArr.some(item => date >= this.getDateByTime(date, 'start', item) && date <= this.getDateByTime(date, 'end', item) && date > new Date());
  }
  getIsoDateFromServerDate(stringDate, timeZoneMinutesOffset) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(stringDate).add(-timeZoneMinutesOffset, 'minutes').format();
  }
  getLocalFromServerDate(serverDate) {
    return moment__WEBPACK_IMPORTED_MODULE_0__.utc(serverDate).local().toDate();
  }
  getDefaultMinOrderDate() {
    const minColDateMom = moment__WEBPACK_IMPORTED_MODULE_0__().add(45 + 15 - moment__WEBPACK_IMPORTED_MODULE_0__().minutes() % 15, 'minutes').startOf('minute');
    let minColDate;
    if (this.checkAllWeek()) {
      return minColDateMom.toDate();
    }
    let openingHoursArr = this.getOpeningHoursByDate(minColDateMom.toDate());
    let selDate;
    let specDate;
    for (let i = 0; i < 7; i++) {
      // tslint:disable-next-line:max-line-length
      specDate = this.getSpecialDateByDate(minColDateMom.toDate());
      if (specDate !== undefined && !specDate.closed) {
        selDate = minColDateMom.toDate();
        break;
      }
      // tslint:disable-next-line:max-line-length
      if ((specDate !== undefined && !specDate.closed || specDate === undefined) && openingHoursArr.length !== 0 && minColDateMom.toDate() <= this.getDateByTime(minColDateMom.toDate(), 'end', openingHoursArr[openingHoursArr.length - 1])) {
        break;
      } else {
        openingHoursArr = this.getOpeningHoursByDate(minColDateMom.add(1, 'day').startOf('day').toDate());
      }
    }
    if (specDate !== undefined && !specDate.closed) {
      selDate.setHours(parseInt(specDate.start_am.split(':')[0], 10), parseInt(specDate.start_am.split(':')[1], 10));
      minColDate = selDate;
    } else if (this.checkSelectedDate(minColDateMom.toDate())) {
      minColDate = minColDateMom.toDate();
    } else {
      // tslint:disable-next-line:max-line-length
      const rightOpeningTimeIndex = openingHoursArr.findIndex(item => {
        return minColDateMom.toDate() < this.getDateByTime(minColDateMom.toDate(), 'start', item);
      });
      if (rightOpeningTimeIndex !== -1) {
        minColDate = this.getDateByTime(minColDateMom.toDate(), 'start', openingHoursArr[rightOpeningTimeIndex]);
      }
    }
    this.logger.log('minColDate: ', minColDate);
    return minColDate;
  }
  static #_ = this.ctorParameters = () => [{
    type: _logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService
  }, {
    type: _bakery_service__WEBPACK_IMPORTED_MODULE_2__.BakeryService
  }];
};
DateService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], DateService);


/***/ }),

/***/ 84889:
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);




let ErrorService = class ErrorService {
  constructor(injector) {
    this.injector = injector;
  }
  handleError(error) {
    const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router);
    if (Error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
      console.error('HttpErrorResponse status', error.status);
    } else {
      console.error('an error occurred here: ', error);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
  }];
};
ErrorService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ErrorService);


/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ 51273);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ 25970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.service */ 90910);
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.service */ 82963);
/* harmony import */ var _bakery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bakery.service */ 24934);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading.service */ 4471);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















let HttpService = class HttpService {
  constructor(alertServ, bakeryServ, cartServ, dateServ, iab, http, loadingServ, logger, modalController, ngZone, platform, router, translate) {
    this.alertServ = alertServ;
    this.bakeryServ = bakeryServ;
    this.cartServ = cartServ;
    this.dateServ = dateServ;
    this.iab = iab;
    this.http = http;
    this.loadingServ = loadingServ;
    this.logger = logger;
    this.modalController = modalController;
    this.ngZone = ngZone;
    this.platform = platform;
    this.router = router;
    this.translate = translate;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl;
    console.log('production environment: ', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production);
    this.dateServ.dateShared.subscribe(res => this.date = res);
  }
  checkApiRes(res) {
    this.logger.log('API response: ', res);
    if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
      return true;
    } else {
      this.alertServ.presentAlert();
      return false;
    }
  }
  postData(endPoint, data) {
    return this.http.post(this.baseUrl + '/v1' + endPoint, data);
  }
  checkEmail(email) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(`${this.baseUrl}/v1/check/email?email=${email}`).subscribe(res => {
      if (this.checkApiRes(res)) {
        subject.next(res.data);
      }
    });
    return subject.asObservable();
  }
  getBranchesNear(lat, lng) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(this.baseUrl + '/v1/branches-near-me?lat=' + lat + '&lng=' + lng).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('BranchesNearResponse data', res.data);
      }
    });
    return subject.asObservable();
  }
  getHomeBranches(lat, lng) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(`${this.baseUrl}/v1/branches/home?lat=${lat}&lng=${lng}`).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  removeAddToFavorites(branchId) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.put(`${this.baseUrl}/v1/branches/favourites/${branchId}`, null).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  getFavorites() {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(`${this.baseUrl}/v1/branches/favourites`).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  getBranchDetail(branchId) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(`${this.baseUrl}/v2/branch/${branchId}`).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  getAddressById() {
    return this.http.get(`${this.baseUrl}/v2/delivery/address/1/100`);
  }
  updateAdress(body, Id) {
    return this.http.put(`${this.baseUrl}/v2/delivery/address/${Id}`, body);
  }
  CreateAddress(body) {
    return this.http.post(this.baseUrl + '/v2/delivery/create-address', body);
  }
  deleteAddress(addressId) {
    return this.http.delete(`${this.baseUrl}/v2/delivery/address/${addressId}`);
  }
  getUserDetails() {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(`${this.baseUrl}/v1/user/details`).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http user/details res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  updateUserDetails(data) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.put(`${this.baseUrl}/v1/user/details`, data).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        if (Array.isArray(res.data) && res.data.length === 0) {
          subject.next(true);
        }
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  getInboxMessages() {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(this.baseUrl + '/v1/inbox/messages').subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }
  deleteUserAccount() {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.delete(this.baseUrl + '/v1/user/delete').subscribe(res => {
      this.logger.log('deleteUserAccount res', res);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(true);
      }
    });
    return subject.asObservable();
  }
  getBodyForPayment(data) {
    let Selectedaddress;
    this.bakeryServ.addresses$.subscribe(address => {
      Selectedaddress = address.id;
      // Do something with the addresses
    });

    return {
      branch_id: data.branch_id,
      basket_sum: data.basket_sum,
      products: data.products,
      pickup_date: data.pickup_date,
      delivery: data.delivery,
      delivery_address_id: data.delivery ? Selectedaddress : null,
      time_slot: data.pickup_date
    };
  }
  createSmartTransaction(data) {
    this.loadingServ.presentLoading();
    const body = this.getBodyForPayment(data);
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.post(this.baseUrl + '/v1/payment/transaction/create', body).subscribe(res => {
      this.loadingServ.dismiss();
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }
  openCreditCardPayment(stxId, userId) {
    return this.iab.create(`${this.baseUrl}/v1/payment/creditcard?stx_id=${stxId}&user_id=${userId}`, '_blank', this.getIabOptions());
  }
  getIab(url) {
    return this.iab.create(url, '_blank', this.getIabOptions());
  }
  getIabOptions() {
    if (this.platform.is('ios')) {
      return `closebuttoncaption=${this.translate.instant('general.back')}`;
    }
  }
  debitPayment(debitArgs) {
    let Selectedaddress;
    this.bakeryServ.addresses$.subscribe(address => {
      Selectedaddress = address.id;
      // Do something with the addresses
    });

    let isDelveryAvailable;
    this.bakeryServ.bakeryDetails$.subscribe(details => {
      let bakeryDetails = details;
      if (bakeryDetails && bakeryDetails.delivery && bakeryDetails.delivery == 1) isDelveryAvailable = true;
    });
    const body = {
      first_name: debitArgs.first_name,
      last_name: debitArgs.last_name,
      street: debitArgs.street,
      st_number: debitArgs.st_number,
      city: debitArgs.city,
      postal_code: debitArgs.postal_code,
      account_owner: debitArgs.account_owner,
      iban: debitArgs.iban,
      branch_id: debitArgs.branch_id,
      basket_sum: debitArgs.basket_sum,
      products: debitArgs.products,
      pickup_date: debitArgs.pickup_date,
      delivery: isDelveryAvailable,
      delivery_address_id: isDelveryAvailable ? Selectedaddress : null,
      time_slot: isDelveryAvailable ? debitArgs.pickup_date : null
    };
    return this.http.post(this.baseUrl + '/v1/payment/debit', body);
  }
  iabPayment(endPoint) {
    this.loadingServ.presentLoading();
    const body = this.getBodyForPayment(this.bakeryServ.getDataForPayment(this.date));
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.post(this.baseUrl + '/v1' + endPoint, body).subscribe(res => {
      this.loadingServ.dismiss();
      this.logger.log('http res.data: ', res.data);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.iframeUrl) {
        this.handleIabResult(this.getIab(res.data.iframeUrl));
        subject.next(true);
      } else {
        this.alertServ.presentAlert();
        subject.next(false);
      }
    });
    return subject.asObservable();
  }
  useLastPayment(data) {
    const body = this.getBodyForPayment(data);
    return this.http.post(this.baseUrl + '/v1/payment/last-used', body);
  }
  handleIabResult(browser) {
    browser.on('loadstart').subscribe(res => {
      if (res.url.includes('/payment/success')) {
        this.modalController.dismiss();
        browser.close();
        const navigationExtras = {
          state: {
            isConfirm: true,
            orderId: res.url.substr(res.url.lastIndexOf('=') + 1)
          }
        };
        this.ngZone.run(() => this.router.navigate(['orders'], navigationExtras));
        this.cartServ.clearCart();
        this.dateServ.changeDate('');
      } else if (res.url.includes('/payment/failed')) {
        this.alertServ.presentAlert(this.translate.instant('alert.paymentWasFailed'), 'Bezahlung fehlgeschlagen');
        browser.close();
      }
    });
  }
  getOrderDetails(orderId) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(`${this.baseUrl}/v1/order/details/${orderId}`).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      } else {
        this.alertServ.presentAlert('Something went wrong! Please contact support!');
      }
    });
    return subject.asObservable();
  }
  getOrders() {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.http.get(this.baseUrl + '/v1/orders').subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      } else {
        this.alertServ.presentAlert();
      }
    });
    return subject.asObservable();
  }
  getVersionFromDB() {
    let result;
    result = this.http.get(this.baseUrl + '/v1/check/version').toPromise();
    return result;
  }
  registerPushToken(token, device, platform, osVersion) {
    const body = {
      token,
      device,
      platform,
      os_version: osVersion
    };
    this.http.post(this.baseUrl + '/v1/pushNotification/register', body).subscribe(res => {
      this.logger.log('http res.data: ', res.data);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && !res.data?.error) {} else {
        this.logger.log('registerPushToken error: ', res.data.error);
      }
    });
  }
  getReorderData(orderId) {
    return this.http.post(`${this.baseUrl}/v1/order/repeat/${orderId}`, null);
  }
  sendPassword(email, password, status) {
    return this.http.get(this.baseUrl + `/v1/forgott-password/${email}/${password}/${status}`);
  }
  sendConfirmationCode(code) {
    return this.http.get(this.baseUrl + `/v1/check-code/${code}`);
  }
  static #_ = this.ctorParameters = () => [{
    type: _alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
  }, {
    type: _bakery_service__WEBPACK_IMPORTED_MODULE_6__.BakeryService
  }, {
    type: _cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService
  }, {
    type: _date_service__WEBPACK_IMPORTED_MODULE_5__.DateService
  }, {
    type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
  }, {
    type: _loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService
  }, {
    type: _logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }];
};
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], HttpService);


/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);




let LoadingService = class LoadingService {
  constructor(loadingController) {
    this.loadingController = loadingController;
  }
  presentLoading() {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        cssClass: 'loading-bag',
        message: '<ion-img src="/assets/gifs/loader_bag.gif" alt="loading..."></ion-img>',
        mode: 'ios',
        spinner: null,
        translucent: true,
        backdropDismiss: false
      });
      yield loading.present();
    })();
  }
  dismiss() {
    this.loadingController.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
  }];
};
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LoadingService);


/***/ }),

/***/ 18345:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let LocalStorageService = class LocalStorageService {
  constructor() {}
  setArr(dataArr) {
    for (const item of dataArr) {
      localStorage.setItem(item.key, JSON.stringify(item.value));
    }
  }
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  getDateLocale() {
    const lang = localStorage.getItem('language');
    if (lang === 'en') {
      return lang;
    } else {
      return '';
    }
  }
  static #_ = this.ctorParameters = () => [];
};
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], LocalStorageService);


/***/ }),

/***/ 51273:
/*!********************************************!*\
  !*** ./src/app/services/logger.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerService": () => (/* binding */ LoggerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);



let LoggerService = class LoggerService {
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
  }
  log(value, ...rest) {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      console.log(value, ...rest);
    }
  }
  error(p0, error) {
    this.errorHandler.handleError(error);
  }
  warn(value, ...rest) {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      console.warn(value, ...rest);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler
  }];
};
LoggerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], LoggerService);


/***/ }),

/***/ 54120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ 19958);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ 51273);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.service */ 18345);
/* harmony import */ var _push_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push.service */ 52314);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analytics.service */ 44832);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account.service */ 89876);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 15414);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
















let LoginService = class LoginService {
  constructor(accountServ, alertController, analyticsServ, httpService, logger, ngZone, pushServ, router, localStorageServ, translate, http) {
    this.accountServ = accountServ;
    this.alertController = alertController;
    this.analyticsServ = analyticsServ;
    this.httpService = httpService;
    this.logger = logger;
    this.ngZone = ngZone;
    this.pushServ = pushServ;
    this.router = router;
    this.localStorageServ = localStorageServ;
    this.translate = translate;
    this.http = http;
    this.user = {};
  }
  googleLogin() {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_9__.GoogleAuth.initialize();
      const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins.GoogleAuth.signIn(null);
      // this.logger.log('googleUser: ', googleUser);
      if (googleUser) {
        // prepare user info for posting on server
        _this.user.email = googleUser.email;
        _this.user.first_name = googleUser.givenName;
        _this.user.last_name = googleUser.familyName;
        _this.user.reg_auth_type = 'google';
        _this.user.reg_auth_token = googleUser.idToken;
        _this.user.reg_auth_user_id = googleUser.id;
        // posting on server
        _this.registerOnApi();
      }
    })();
  }
  openAppleSignIn() {
    this.analyticsServ.logEvent('start_apple_login');
    const {
      SignInWithApple
    } = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
    SignInWithApple.Authorize().then(res => {
      this.analyticsServ.logEvent('apple_login_return_res', res);
      if (res.response && res.response.identityToken) {
        // prepare user info for posting on server
        this.user.email = res.response.email;
        this.user.first_name = res.response.givenName;
        this.user.last_name = res.response.familyName;
        this.user.reg_auth_type = 'apple';
        this.user.reg_auth_token = res.response.identityToken;
        this.user.reg_auth_user_id = res.response.user;
        this.logger.log('this.user', this.user);
        // posting on server
        this.registerOnApi();
      } else {
        this.logger.warn('res.response && res.response.identityToken do not true!');
      }
    }).catch(error => {
      this.analyticsServ.logEvent('apple_login_return_error', error);
      this.presentAlert();
    });
  }
  facebookSignIn() {
    var _this2 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.logger.log('facebookSignIn');
      const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
      const result = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins.FacebookLogin.login({
        permissions: FACEBOOK_PERMISSIONS
      });
      _this2.logger.log('login result: ', result);
      if (result && result.accessToken) {
        // prepare user info for posting on server
        _this2.user.reg_auth_type = 'facebook';
        const token = result.accessToken.token;
        const userIdHashed = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__.Md5().appendStr(result.accessToken.userId).end();
        _this2.user.reg_auth_token = userIdHashed;
        _this2.user.reg_auth_user_id = result.accessToken.userId;
        let userInfo = yield fetch(`https://graph.facebook.com/${_this2.user.reg_auth_user_id}?fields=email,first_name,last_name&access_token=${token}`);
        userInfo = yield userInfo.json();
        _this2.logger.log('userInfo: ', userInfo);
        if (userInfo.email) {
          _this2.user.email = userInfo.email;
          _this2.user.first_name = userInfo.first_name;
          _this2.user.last_name = userInfo.last_name;
          _this2.logger.log('this.user: ', _this2.user);
          // posting on server
          _this2.registerOnApi();
        } else {
          _this2.presentAlert();
        }
      } else {
        _this2.presentAlert();
      }
    })();
  }
  registerOnApi() {
    this.httpService.postData('/register', this.user).subscribe(res => {
      this.analyticsServ.logEvent('register_on_our_api_res', res);
      this.handleRegisterRes(res);
      this.router.navigate(['google-login']);
      this.analyticsServ.logEvent('login');
    }, error => {
      this.analyticsServ.logEvent('register_on_our_api_error', error);
      this.logger.warn('server response error: ', error);
    });
  }
  handleRegisterRes(res) {
    this.logger.log('server res: ', res);
    localStorage.setItem('token', res.access_token);
    this.analyticsServ.setUser(res.access_token);
    const language = res.user.language;
    localStorage.setItem('language', language);
    this.translate.use(language);
    this.pushServ.initPush();
  }
  logout() {
    var _this3 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins.FacebookLogin.logout();
      yield _this3.router.navigate(['start'], {
        replaceUrl: true
      });
      localStorage.removeItem('token');
      _this3.analyticsServ.logEvent('logout');
      _this3.accountServ.changeGuest(false);
    })();
  }
  presentAlert() {
    var _this4 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Login Failed',
        message: 'Please try again later',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _account_service__WEBPACK_IMPORTED_MODULE_8__.AccountService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
  }, {
    type: _analytics_service__WEBPACK_IMPORTED_MODULE_7__.AnalyticsService
  }, {
    type: _http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
  }, {
    type: _logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
  }, {
    type: _push_service__WEBPACK_IMPORTED_MODULE_6__.PushService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
  }];
};
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], LoginService);


/***/ }),

/***/ 52314:
/*!******************************************!*\
  !*** ./src/app/services/push.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushService": () => (/* binding */ PushService)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ 51273);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ 93253);











let PushService = class PushService {
  constructor(logger, httpServ, router, platform) {
    this.logger = logger;
    this.httpServ = httpServ;
    this.router = router;
    this.platform = platform;
    this.isNative = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() !== 'web';
  }
  initPush() {
    // ✅ Only proceed if running on Capacitor and native platform (Android/iOS)
    if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.isNativePlatform && (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() === 'web' || !this.platform.is('capacitor'))) {
      this.logger.log('Push notifications skipped: Not running in native platform or not a Capacitor app.');
      return;
    }
    this.registerPush();
  }
  registerPush() {
    var _this = this;
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.requestPermissions().then(permission => {
      if (permission.receive === 'granted') {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register();
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', /*#__PURE__*/function () {
          var _ref = (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (token) {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_5__.Device.getInfo();
            _this.logger.log('Push Token:', token.value);
            _this.logger.log('Device Info:', info);
            _this.httpServ.registerPushToken(token.value, info.model, info.platform, info.osVersion);
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', error => {
          this.logger.log('Push registration error:', error);
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', notification => {
          this.logger.log('Notification received:', notification);
        });
        this.actionForPushTouch();
        this.setResetPushBadgeCount();
      } else {
        this.logger.log('Push permission not granted.');
      }
    }).catch(err => {
      this.logger.log('Push permission request failed:', err);
    });
  }
  setResetPushBadgeCount() {
    if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.isNativePlatform()) {
      this.logger.log('Skipping badge count reset — not a native platform.');
      return;
    }
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.removeAllDeliveredNotifications();
    _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.addListener('appStateChange', state => {
      if (state.isActive) {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.removeAllDeliveredNotifications();
      }
    });
  }
  actionForPushTouch() {
    var _this2 = this;
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (notification) {
        let orderId;
        const deviceInfo = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_5__.Device.getInfo();
        if (deviceInfo.platform === 'ios') {
          orderId = notification.notification.data.data.order_id;
        } else {
          orderId = notification.notification.data.order_id;
        }
        const navigationExtras = {
          state: {
            orderId
          }
        };
        _this2.router.navigate(['orders'], navigationExtras);
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  static #_ = this.ctorParameters = () => [{
    type: _logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService
  }, {
    type: _http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
  }];
};
PushService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
  providedIn: 'root'
})], PushService);


/***/ }),

/***/ 73030:
/*!*******************************************!*\
  !*** ./src/app/services/sale.services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleServices": () => (/* binding */ SaleServices)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);



let SaleServices = class SaleServices {
  constructor() {}
  checkSale(currentDate, product) {
    const date = moment__WEBPACK_IMPORTED_MODULE_0__(currentDate);
    const from = moment__WEBPACK_IMPORTED_MODULE_0__(product.special_price_from);
    const to = moment__WEBPACK_IMPORTED_MODULE_0__(product.special_price_to);
    if (product.special_price) {
      return date > from && date < to;
    }
  }
  static #_ = this.ctorParameters = () => [];
};
SaleServices = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], SaleServices);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  enablePushNotifications: false,
  pushEnabled: false,
  production: false,
  serverUrl: 'https://dev.server6.w3control.de/api',
  firebaseConfig: {
    apiKey: 'AIzaSyDJO2_bi4MbTVRaSzcwj_jg-AvMYRA_9lQ',
    authDomain: 'brotchenuserapp-4f1b7.firebaseapp.com',
    databaseURL: 'https://brotchenuserapp-4f1b7.firebaseio.com',
    projectId: 'brotchenuserapp-4f1b7',
    storageBucket: 'brotchenuserapp-4f1b7.appspot.com',
    messagingSenderId: '997978298378',
    appId: '1:997978298378:web:5528b0c2850886fe7f27f3',
    measurementId: 'G-VDGTY7D2RS'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 25px;\n  color: #161d1f;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.menu-header {\n  --background: #FEDE00;\n  --padding-bottom: 1.5vh;\n  --padding-top: 1.5vh;\n  --padding-start: 8vw!important;\n}\n.menu-header__label {\n  font: normal normal 500 20px/24px Montserrat;\n  color: #493735;\n}\n\n.menu-item {\n  margin: 0.5vh 0;\n  font: normal normal 400 15px/19px Montserrat;\n  color: #493735;\n}\nion-menu ion-list {\n  height: 90%;\n}\nion-menu .menu-item-last-child {\n  position: absolute;\n  bottom: 0;\n  left: 1vw;\n  color: #707070;\n  -webkit-text-stroke: 1px #707070;\n}\nion-menu .menu-item-last-child.md {\n  bottom: 2vh;\n}\nion-menu .menu-item-last-child.ios {\n  bottom: var(--ion-safe-area-bottom);\n}\nion-menu .menu-item-last-child__icon {\n  font-size: 30px;\n  color: #2b2e32;\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAEA;EACE,2EAAA;AADF;;AAWA;EACE,eAAA;AARF;;AAWA;EACE,mBAAA;AARF;;AAWA;;EAEE,kBAAA;AARF;;AAeA;EACE,eAAA;EACA,gBAAA;EAEA,gBAAA;AAbF;;AAgBA;EACE,eAAA;EAEA,mBAAA;EAEA,cAAA;EAEA,gBAAA;AAhBF;;AAmBA;EACE,qBAAA;EACA,mBAAA;AAhBF;;AAwBA;EACE,+BAAA;AArBF;;AAwBA;EACE,cAAA;AArBF;;AAwBA;EACE,gBAAA;AArBF;;AAwBA;EACE,sBAAA;AArBF;;AAwBA;EACE,mBAAA;AArBF;;AAwBA;EACE,iBAAA;EACA,mBAAA;AArBF;;AAwBA;EACE,qBAAA;EACA,mBAAA;EACA,kBAAA;AArBF;;AAwBA;EACE,+BAAA;AArBF;;AAwBA;EACE,eAAA;EACA,cAAA;AArBF;;AAwBA;EACE,kBAAA;AArBF;;AAwBA;;EAEE,kBAAA;EACA,mBAAA;AArBF;;AAwBA;EACE,kBAAA;AArBF;;AAwBA;EACE,qBAAA;EACA,eAAA;EAEA,oCAAA;AAtBF;;AAyBA;EACE,iCAAA;AAtBF;;AAyBA;EACE,qBAAA;EACA,uBAAA;EACA,oBAAA;EACA,8BAAA;AAtBF;AA0BE;EACE,4CAAA;EACA,cAAA;AAxBJ;;AA4BA;EACE,eAAA;EACA,4CAAA;EACA,cAAA;AAzBF;AAgCE;EACE,WAAA;AA9BJ;AAiCI;EACE,kBAAA;EACA,SAAA;EACA,SAAA;EACA,cAAA;EACA,gCAAA;AA/BN;AAgCM;EACE,WAAA;AA9BR;AAgCM;EACE,mCAAA;AA9BR;AAgCM;EACE,eAAA;EACA,cAAA;AA9BR","sourcesContent":["// selected class uncomment to unique style for selected\r\n\r\nion-menu ion-content {\r\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\r\n}\r\n\r\nion-menu.md ion-content {\r\n  //--padding-start: 8px;\r\n  //--padding-end: 8px;\r\n  //--padding-top: 20px;\r\n  //--padding-bottom: 20px;\r\n}\r\n\r\nion-menu.md ion-list {\r\n  padding: 20px 0;\r\n}\r\n\r\nion-menu.md ion-note {\r\n  margin-bottom: 30px;\r\n}\r\n\r\nion-menu.md ion-list-header,\r\nion-menu.md ion-note {\r\n  padding-left: 10px;\r\n}\r\n\r\nion-menu.md ion-list#inbox-list {\r\n  //border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\r\n}\r\n\r\nion-menu.md ion-list#inbox-list ion-list-header {\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n\r\n  min-height: 20px;\r\n}\r\n\r\nion-menu.md ion-list#labels-list ion-list-header {\r\n  font-size: 16px;\r\n\r\n  margin-bottom: 18px;\r\n\r\n  color: #757575;\r\n\r\n  min-height: 26px;\r\n}\r\n\r\nion-menu.md ion-item {\r\n  --padding-start: 10px;\r\n  --padding-end: 10px;\r\n  //border-radius: 4px;\r\n}\r\n\r\nion-menu.md ion-item.selected {\r\n  //--background: rgba(var(--ion-color-primary-rgb), 0.14);\r\n}\r\n\r\nion-menu.md ion-item.selected ion-icon {\r\n  color: var(--ion-color-primary);\r\n}\r\n\r\nion-menu.md ion-item ion-icon {\r\n  color: #616e7e;\r\n}\r\n\r\nion-menu.md ion-item ion-label {\r\n  font-weight: 500;\r\n}\r\n\r\nion-menu.ios ion-content {\r\n  --padding-bottom: 20px;\r\n}\r\n\r\nion-menu.ios ion-list {\r\n  padding: 20px 0 0 0;\r\n}\r\n\r\nion-menu.ios ion-note {\r\n  line-height: 24px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nion-menu.ios ion-item {\r\n  --padding-start: 16px;\r\n  --padding-end: 16px;\r\n  --min-height: 50px;\r\n}\r\n\r\nion-menu.ios ion-item.selected ion-icon {\r\n  color: var(--ion-color-primary);\r\n}\r\n\r\nion-menu.ios ion-item ion-icon {\r\n  font-size: 25px;\r\n  color: #161d1f;\r\n}\r\n\r\nion-menu.ios ion-list#labels-list ion-list-header {\r\n  margin-bottom: 8px;\r\n}\r\n\r\nion-menu.ios ion-list-header,\r\nion-menu.ios ion-note {\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n}\r\n\r\nion-menu.ios ion-note {\r\n  margin-bottom: 8px;\r\n}\r\n\r\nion-note {\r\n  display: inline-block;\r\n  font-size: 16px;\r\n\r\n  color: var(--ion-color-medium-shade);\r\n}\r\n\r\nion-item.selected {\r\n  --color: var(--ion-color-primary);\r\n}\r\n\r\n.menu-header {\r\n  --background: #FEDE00;\r\n  --padding-bottom: 1.5vh;\r\n  --padding-top: 1.5vh;\r\n  --padding-start: 8vw!important;\r\n  &__icon {\r\n    //font-size: 24px;\r\n  }\r\n  &__label {\r\n    font: normal normal 500 20px/24px Montserrat;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\n.menu-item {\r\n  margin: 0.5vh 0;\r\n  font: normal normal 400 15px/19px Montserrat;\r\n  color: #493735;\r\n  &.selected {\r\n    //color: #F36133;\r\n  }\r\n}\r\n\r\nion-menu{\r\n  ion-list {\r\n    height: 90%;\r\n  }\r\n\r\n    .menu-item-last-child {\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 1vw;\r\n      color: #707070;\r\n      -webkit-text-stroke: 1px #707070;\r\n      &.md {\r\n        bottom: 2vh;\r\n      }\r\n      &.ios {\r\n        bottom: var(--ion-safe-area-bottom);\r\n      }\r\n      &__icon {\r\n        font-size: 30px;\r\n        color: #2b2e32;\r\n      }\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-header></ion-header>\r\n      <ion-content class=\"content\">\r\n        <ion-item class=\"menu-header\" lines=\"none\" detail=\"false\" button (click)=\"toAccount()\">\r\n          <ion-icon class=\"menu-header__icon\" slot=\"start\" src=\"./assets/icons/menu/user-png.svg\"></ion-icon>\r\n          <ion-label class=\"menu-header__label\" *ngIf=\"!guest\">{{ 'menu.myAcc' | translate }}</ion-label>\r\n          <ion-label class=\"menu-header__label\" *ngIf=\"guest\">Gast</ion-label>\r\n        </ion-item>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item class=\"menu-item\" (click)=\"selectedIndex = i\"\r\n                      *ngIf=\"!guest || p.forGuest\"\r\n                      [routerLink]=\"[p.url]\" lines=\"none\"\r\n                      detail=\"false\" [class.selected]=\"selectedIndex == i\">\r\n              <ion-icon class=\"menu-item__icon\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\" [src]=\"p.src\"></ion-icon>\r\n              <ion-label>{{ p.title | translate }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-item class=\"menu-item-last-child\"\r\n                    (click)=\"openSupportPage('https://broetchen.app/faq/')\"\r\n                    *ngIf=\"!guest\"\r\n                    lines=\"none\"\r\n                    detail=\"false\" >\r\n            <ion-icon class=\"menu-item-last-child__icon\" slot=\"start\"  src=\"./assets/icons/menu/help-circle-png.svg\"></ion-icon>\r\n            <ion-label>{{ 'menu.support' | translate }}</ion-label>\r\n\r\n          </ion-item>\r\n          <ng-container *ngIf=\"guest\">\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item class=\"menu-item\" (click)=\"accountServ.open('privacy')\" lines=\"none\" detail=\"false\">\r\n                <ion-icon></ion-icon>\r\n                <ion-label>Datenprivatsphäre</ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item class=\"menu-item\" (click)=\"accountServ.open('imprint')\" lines=\"none\" detail=\"false\">\r\n                <ion-icon></ion-icon>\r\n                <ion-label>Impressum</ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item class=\"menu-item\" (click)=\"loginServ.logout()\" lines=\"none\" detail=\"false\">\r\n                <ion-icon></ion-icon>\r\n                <ion-label>Logout</ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n          </ng-container>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map