(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_start_start_module_ts"],{

/***/ 77229:
/*!***********************************************************!*\
  !*** ./src/app/pages/login/start/start-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageRoutingModule": () => (/* binding */ StartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 29408);




const routes = [{
  path: '',
  component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage
}];
let StartPageRoutingModule = class StartPageRoutingModule {};
StartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], StartPageRoutingModule);


/***/ }),

/***/ 91021:
/*!***************************************************!*\
  !*** ./src/app/pages/login/start/start.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-routing.module */ 77229);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page */ 29408);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let StartPageModule = class StartPageModule {};
StartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _start_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_start_page__WEBPACK_IMPORTED_MODULE_1__.StartPage]
})], StartPageModule);


/***/ }),

/***/ 29408:
/*!*************************************************!*\
  !*** ./src/app/pages/login/start/start.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _start_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page.html?ngResource */ 43421);
/* harmony import */ var _start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss?ngResource */ 31712);
/* harmony import */ var _start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/platform.service */ 88634);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/login.service */ 54120);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/account.service */ 89876);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);









let StartPage = class StartPage {
  constructor(accountServ, platformService, router, loginService, alertController) {
    this.accountServ = accountServ;
    this.platformService = platformService;
    this.router = router;
    this.loginService = loginService;
    this.alertController = alertController;
    this.android = this.platformService.android;
    this.otherOptOn = false;
  }
  ngOnInit() {
    this.version = localStorage.getItem('appVersion');
  }
  onOtherOpt($event) {
    $event.stopPropagation();
    this.otherOptOn = true;
  }
  loginWith(loginWith, isLogin) {
    this.platformService.loginWith = loginWith;
    switch (loginWith) {
      case 'ios':
        this.loginService.openAppleSignIn();
        break;
      case 'google':
        this.loginService.googleLogin();
        break;
      case 'facebook':
        this.loginService.facebookSignIn();
        break;
    }
    if (isLogin) {
      const navigationExtras = {
        state: {
          isLogin
        }
      };
      this.router.navigate(['email-registration'], navigationExtras);
    }
  }
  onContentTap() {
    if (this.otherOptOn) {
      this.otherOptOn = false;
    }
  }
  guestLogin() {
    this.router.navigate(['/location-setting']);
    this.accountServ.changeGuest(true);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
  }, {
    type: _services_platform_service__WEBPACK_IMPORTED_MODULE_2__.PlatformService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
  }];
};
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-start',
  template: _start_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StartPage);


/***/ }),

/***/ 31712:
/*!**************************************************************!*\
  !*** ./src/app/pages/login/start/start.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  padding: 10px 29px;\n  text-align: center;\n  font: normal normal 500 28px/34px Montserrat;\n  color: #493735;\n}\n@media (max-device-height: 736px) {\n  .title {\n    padding: 15px;\n    font: normal normal 500 22px/28px Montserrat;\n  }\n}\n\n.img-container {\n  background: #FEDE00;\n}\n.img-container__img {\n  height: 52vh;\n  object-fit: contain;\n  object-position: left;\n}\n@media (max-device-height: 736px) {\n  .img-container__img {\n    height: 44vh;\n  }\n}\n\n.version {\n  position: relative;\n  bottom: 2.6vh;\n  left: 72%;\n  font-size: 1.8vh;\n}\n\n.controls {\n  padding: 6vh 8.53vw 0;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-device-width: 320px) {\n  .controls {\n    padding: 23px 16px 0;\n  }\n}\n.controls__btn {\n  margin: 0 0 25px 0;\n}\n@media (max-device-width: 320px) {\n  .controls__btn {\n    margin: 0 0 15px 0;\n  }\n}\n.controls__btn_g {\n  --border-color: #CBCBCB;\n  --background: rgba(183, 183, 183, 0.2);\n  --color: #939393;\n}\n.controls__btn_a {\n  --border-color: #151515;\n  --background: #151515;\n  --color: #ffffff;\n}\n.controls__btn_fb {\n  --background: #0E8DF1;\n  --color: #fff;\n}\n.controls__btn_mail {\n  --background: #22F6E8;\n  --color: #493735;\n}\n.controls .btn {\n  height: 60px;\n  --border-radius: 36px;\n  text-transform: uppercase;\n  font: normal normal 500 16px/19px Montserrat;\n}\n.controls .btn__icon {\n  --color: white;\n}\n.controls__link {\n  font: normal normal 300 14px/18px Montserrat;\n  text-transform: uppercase;\n  color: #493735;\n}\n\n.opacity {\n  opacity: 0.5;\n}\n\n.hide-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/start/start.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AACF;AAAE;EALF;IAMI,aAAA;IACA,4CAAA;EAGF;AACF;;AAAA;EACE,mBAAA;AAGF;AAFE;EACE,YAAA;EACA,mBAAA;EACA,qBAAA;AAIJ;AAHI;EAJF;IAKI,YAAA;EAMJ;AACF;;AAHA;EACE,kBAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;AAMF;;AAJA;EACE,qBAAA;EACA,aAAA;EACA,sBAAA;AAOF;AANE;EAJF;IAKI,oBAAA;EASF;AACF;AARE;EACE,kBAAA;AAUJ;AATI;EAFF;IAGI,kBAAA;EAYJ;AACF;AAVI;EACE,uBAAA;EACA,sCAAA;EACA,gBAAA;AAYN;AAVI;EACE,uBAAA;EACA,qBAAA;EACA,gBAAA;AAYN;AATI;EACE,qBAAA;EACA,aAAA;AAWN;AATI;EACE,qBAAA;EACA,gBAAA;AAWN;AAPE;EACE,YAAA;EACA,qBAAA;EACA,yBAAA;EACA,4CAAA;AASJ;AAPI;EACE,cAAA;AASN;AALE;EACE,4CAAA;EACA,yBAAA;EACA,cAAA;AAOJ;;AAHA;EACE,YAAA;AAMF;;AAHA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAMF","sourcesContent":[".title {\r\n  padding: 10px 29px;\r\n  text-align: center;\r\n  font: normal normal 500 28px/34px Montserrat;\r\n  color: #493735;\r\n  @media (max-device-height: 736px) {\r\n    padding: 15px;\r\n    font: normal normal 500 22px/28px Montserrat;\r\n  }\r\n}\r\n\r\n.img-container {\r\n  background: #FEDE00;\r\n  &__img {\r\n    height: 52vh;\r\n    object-fit: contain;\r\n    object-position: left;\r\n    @media (max-device-height: 736px) {\r\n      height: 44vh;\r\n    }\r\n  }\r\n}\r\n.version {\r\n  position: relative;\r\n  bottom: 2.6vh;\r\n  left: 72%;\r\n  font-size: 1.8vh;\r\n}\r\n.controls {\r\n  padding: 6vh 8.53vw 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  @media (max-device-width: 320px) {\r\n    padding: 23px 16px 0;\r\n  }\r\n  &__btn {\r\n    margin: 0 0 25px 0;\r\n    @media (max-device-width: 320px) {\r\n      margin: 0 0 15px 0;\r\n    }\r\n\r\n    &_g {\r\n      --border-color: #CBCBCB;\r\n      --background: rgba(183, 183, 183, 0.2);\r\n      --color: #939393;\r\n    }\r\n    &_a {\r\n      --border-color: #151515;\r\n      --background: #151515;\r\n      --color: #ffffff;\r\n    }\r\n\r\n    &_fb {\r\n      --background: #0E8DF1;\r\n      --color: #fff;\r\n    }\r\n    &_mail {\r\n      --background: #22F6E8;\r\n      --color: #493735;\r\n    }\r\n  }\r\n\r\n  .btn {\r\n    height: 60px;\r\n    --border-radius: 36px;\r\n    text-transform: uppercase;\r\n    font: normal normal 500 16px/19px Montserrat;\r\n\r\n    &__icon {\r\n      --color: white;\r\n    }\r\n  }\r\n\r\n  &__link {\r\n    font: normal normal 300 14px/18px Montserrat;\r\n    text-transform: uppercase;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\n.opacity {\r\n  opacity: 0.5;\r\n}\r\n\r\n.hide-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43421:
/*!**************************************************************!*\
  !*** ./src/app/pages/login/start/start.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<ion-content (click)=\"onContentTap()\">\r\n  <div [class.opacity]=\"otherOptOn\">\r\n    <h1 class=\"title\">{{ 'start.header' | translate }}</h1>\r\n    <div class=\"img-container\">\r\n      <ion-img class=\"img-container__img\" src=\"../../../assets/img/girl.png\"></ion-img>\r\n    </div>\r\n<!--    <div class=\"version\">App version: {{version}}</div>-->\r\n  </div>\r\n  <div class=\"controls\">\r\n    <ion-button class=\"controls__btn controls__btn_g btn\"\r\n                *ngIf=\"android\" (click)=\"loginWith('google')\"\r\n                expand=\"block\" size=\"large\" fill=\"outline\" [disabled]=\"otherOptOn\">\r\n      <ion-icon class=\"btn__icon\" slot=\"start\" src=\"../../../assets/icons/google.svg\"></ion-icon>\r\n      {{ 'start.googleBtn' | translate }}\r\n    </ion-button>\r\n    <ion-button class=\"controls__btn controls__btn_a btn\"\r\n                *ngIf=\"!android\" (click)=\"loginWith('ios')\"\r\n                expand=\"block\" size=\"large\" fill=\"outline\" [disabled]=\"otherOptOn\">\r\n      <ion-icon class=\"btn__icon\" slot=\"start\" src=\"../../../assets/icons/apple_white.svg\"></ion-icon>\r\n      {{ 'start.appleBtn' | translate }}\r\n    </ion-button>\r\n    <ion-button class=\"controls__btn controls__btn_fb btn\" *ngIf=\"!otherOptOn\"\r\n                (click)=\"loginWith('facebook')\" expand=\"block\" size=\"large\">\r\n      <ion-icon class=\"btn__icon\" slot=\"start\" src=\"../../../assets/icons/facebook.svg\"></ion-icon>\r\n      {{ 'start.fbBtn' | translate }}\r\n    </ion-button>\r\n    <div *ngIf=\"otherOptOn\">\r\n      <ion-button class=\"controls__btn controls__btn_mail btn\"\r\n                   (click)=\"loginWith('email', true)\"  expand=\"block\"\r\n                  size=\"large\">\r\n        <ion-icon class=\"btn__icon\" slot=\"start\" src=\"../../../assets/icons/mail.svg\"></ion-icon>\r\n        {{ 'start.emailBtnLogin' | translate }}\r\n      </ion-button>\r\n      <ion-button class=\"controls__btn controls__btn_mail btn\"\r\n                  (click)=\"loginWith('email')\" [routerLink]=\"'/email-registration'\" expand=\"block\"\r\n                  size=\"large\">\r\n        <ion-icon class=\"btn__icon\" slot=\"start\" src=\"../../../assets/icons/mail.svg\"></ion-icon>\r\n        {{ 'start.emailBtn' | translate }}\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"hide-block\" *ngIf=\"!otherOptOn\">\r\n      <ion-button class=\"controls__link\" fill=\"clear\" size=\"small\"\r\n                  (click)=\"onOtherOpt($event)\">{{ 'start.otherOpt' | translate }}</ion-button>\r\n      <ion-button class=\"controls__link\" fill=\"clear\" size=\"small\" (click)=\"guestLogin()\">{{ 'start.guest' | translate }}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_start_start_module_ts.js.map