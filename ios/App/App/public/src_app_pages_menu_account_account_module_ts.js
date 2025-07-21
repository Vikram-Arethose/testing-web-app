(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_account_account_module_ts"],{

/***/ 28782:
/*!**************************************************************!*\
  !*** ./src/app/pages/menu/account/account-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 48262);




const routes = [{
  path: '',
  component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
}, {
  path: 'account-detail',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_menu_account_account-detail_account-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account-detail/account-detail.module */ 37209)).then(m => m.AccountDetailPageModule)
}];
let AccountPageRoutingModule = class AccountPageRoutingModule {};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AccountPageRoutingModule);


/***/ }),

/***/ 70657:
/*!******************************************************!*\
  !*** ./src/app/pages/menu/account/account.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 28782);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 48262);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);









let AccountPageModule = class AccountPageModule {};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
})], AccountPageModule);


/***/ }),

/***/ 48262:
/*!****************************************************!*\
  !*** ./src/app/pages/menu/account/account.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 39661);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 24202);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account.service */ 89876);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ 6858);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ 54120);









let AccountPage = class AccountPage {
  constructor(accountService, router, logger, loginServ, http) {
    this.accountService = accountService;
    this.router = router;
    this.logger = logger;
    this.loginServ = loginServ;
    this.http = http;
  }
  ngOnInit() {
    this.accountService.sharedAccount.subscribe(res => {
      if (res) {
        this.account = res;
        this.selectedLangLabel = res.languages.find(item => item.isActive === true).label;
      }
      this.version = localStorage.getItem('appVersion');
    });
    this.http.getUserDetails().subscribe(res => {
      this.accountService.changeAccount(res);
    });
  }
  open(page) {
    const navigationExtras = {
      state: {
        page
      }
    };
    this.router.navigate(['account/account-detail'], navigationExtras);
  }
  logout() {
    this.loginServ.logout();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
  }];
};
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-account',
  template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AccountPage);


/***/ }),

/***/ 24202:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu/account/account.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ion-content {\n  --background: #F5F5F5;\n}\n\n.title {\n  padding: 6vw 3vh;\n  font: normal normal 400 20px/24px Montserrat;\n  color: #493735;\n}\n\n.version {\n  padding-right: 1vh;\n}\n\n.list__item {\n  --padding-start: 0;\n}\n.list .item::part(detail-icon) {\n  opacity: 1;\n}\n.list .item__label {\n  padding: 0 0 0 6vw;\n}\n.list .item__label_left {\n  font: normal normal 400 15px/19px Montserrat;\n  text-transform: capitalize;\n  color: #493735;\n}\n.list .item__label_purple {\n  font: normal normal 300 12px/15px Montserrat;\n  color: #493735;\n}\n\n.logout {\n  height: 6vh;\n  margin: 8.5vh 0;\n  background: #fff;\n}\n.logout__text {\n  padding: 0.9vh 0 0 8vw;\n  font: normal normal 500 16px/19px Montserrat;\n  color: #F3250E;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/account/account.page.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;AACF;;AACA;EACE,gBAAA;EACA,4CAAA;EACA,cAAA;AAEF;;AAAA;EACE,kBAAA;AAGF;;AAAE;EACE,kBAAA;AAGJ;AAAI;EACE,UAAA;AAEN;AAAI;EACE,kBAAA;AAEN;AADM;EACE,4CAAA;EACA,0BAAA;EACA,cAAA;AAGR;AADM;EACE,4CAAA;EACA,cAAA;AAGR;;AAGA;EACE,WAAA;EACA,eAAA;EACA,gBAAA;AAAF;AACE;EACE,sBAAA;EACA,4CAAA;EACA,cAAA;AACJ","sourcesContent":[".ion-content {\r\n  --background: #F5F5F5;\r\n}\r\n.title {\r\n  padding: 6vw 3vh;\r\n  font: normal normal 400 20px/24px Montserrat;\r\n  color: #493735;\r\n}\r\n.version {\r\n  padding-right: 1vh;\r\n}\r\n.list {\r\n  &__item {\r\n    --padding-start: 0;\r\n  }\r\n  .item {\r\n    &::part(detail-icon) {\r\n      opacity: 1;\r\n    }\r\n    &__label {\r\n      padding: 0 0 0 6vw;\r\n      &_left {\r\n        font: normal normal 400 15px/19px Montserrat;\r\n        text-transform: capitalize;\r\n        color: #493735;\r\n      }\r\n      &_purple {\r\n        font: normal normal 300 12px/15px Montserrat;\r\n        color: #493735;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.logout {\r\n  height: 6vh;\r\n  margin: 8.5vh 0;\r\n  background: #fff;\r\n  &__text{\r\n    padding: 0.9vh 0 0 8vw;\r\n    font: normal normal 500 16px/19px Montserrat;\r\n    color: #F3250E;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39661:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu/account/account.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"'Account'\"></app-menu-header>\r\n\r\n<ion-content class=\"ion-content\">\r\n  <h2 class=\"title\">{{ 'account.accountDetails' | translate }}</h2>\r\n  <ion-list class=\"list\">\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('first_name')\">\r\n      <ion-label class=\"item__label item__label_left\">Name</ion-label>\r\n      <ion-label class=\"item__label item__label_purple ion-text-right\">{{account?.first_name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('last_name')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'emailRegister.lastName' | translate }}</ion-label>\r\n      <ion-label class=\"item__label item__label_purple ion-text-right\">{{account?.last_name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('email')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.email' | translate }}</ion-label>\r\n      <ion-label class=\"item__label item__label_purple ion-text-right\">{{account?.email}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('phone')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.phoneNum' | translate }}</ion-label>\r\n      <ion-label class=\"item__label item__label_purple ion-text-right\">{{account?.phone}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('country')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.country' | translate }}</ion-label>\r\n      <ion-label class=\"item__label item__label_purple ion-text-right\">{{account?.country}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('language')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.language' | translate }}</ion-label>\r\n      <ion-label class=\"item__label item__label_purple ion-text-right\">{{selectedLangLabel}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <h2 class=\"title\">{{ 'account.settings' | translate }}</h2>\r\n  <ion-list class=\"list\">\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('notifications')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.notifications' | translate }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('password')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.changePass' | translate }}</ion-label>\r\n    </ion-item>\r\n<!--    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('payments')\">-->\r\n<!--      <ion-label class=\"item__label item__label_left\">{{ 'account.managePayment' | translate }}</ion-label>-->\r\n<!--    </ion-item>-->\r\n    <ion-item class=\"list__item item\" mode=\"ios\" button (click)=\"open('privacy')\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.privacy&' | translate }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"list__item item\" mode=\"ios\">\r\n      <ion-label class=\"item__label item__label_left\">{{ 'account.appVersion' | translate }}: </ion-label>\r\n      <span class=\"version\"> {{version}}</span>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"logout\" tappable (click)=\"logout()\">\r\n    <p class=\"logout__text\">{{ 'account.logout' | translate }}</p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_account_account_module_ts.js.map