(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_google-login_google-login_module_ts"],{

/***/ 20380:
/*!*************************************************************************!*\
  !*** ./src/app/pages/login/google-login/google-login-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleLoginPageRoutingModule": () => (/* binding */ GoogleLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-login.page */ 9733);




const routes = [{
  path: '',
  component: _google_login_page__WEBPACK_IMPORTED_MODULE_0__.GoogleLoginPage
}];
let GoogleLoginPageRoutingModule = class GoogleLoginPageRoutingModule {};
GoogleLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], GoogleLoginPageRoutingModule);


/***/ }),

/***/ 71306:
/*!*****************************************************************!*\
  !*** ./src/app/pages/login/google-login/google-login.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleLoginPageModule": () => (/* binding */ GoogleLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _google_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-login-routing.module */ 20380);
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-login.page */ 9733);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let GoogleLoginPageModule = class GoogleLoginPageModule {};
GoogleLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _google_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoogleLoginPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_google_login_page__WEBPACK_IMPORTED_MODULE_1__.GoogleLoginPage]
})], GoogleLoginPageModule);


/***/ }),

/***/ 9733:
/*!***************************************************************!*\
  !*** ./src/app/pages/login/google-login/google-login.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleLoginPage": () => (/* binding */ GoogleLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _google_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-login.page.html?ngResource */ 17617);
/* harmony import */ var _google_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-login.page.scss?ngResource */ 97144);
/* harmony import */ var _google_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/platform.service */ 88634);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);









let GoogleLoginPage = class GoogleLoginPage {
  constructor(translate, platformService, formBuilder, logger, router) {
    this.translate = translate;
    this.platformService = platformService;
    this.formBuilder = formBuilder;
    this.logger = logger;
    this.router = router;
    this.android = this.platformService.android;
  }
  ngOnInit() {
    this.loginWith = this.platformService.loginWith;
    this.getBtnLabel();
    this.myForm = this.formBuilder.group({
      country: ['Germany'],
      checkbox1: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]],
      checkbox2: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]]
    });
    if (this.android) {
      this.myForm.patchValue({
        checkbox1: false
      });
    }
  }
  getBtnLabel() {
    switch (this.loginWith) {
      case 'google':
        this.continueBtnLabel = 'start.googleBtn';
        break;
      case 'ios':
        this.continueBtnLabel = 'googleLogin.createAccBtn';
        break;
      case 'email':
      case 'facebook':
        this.continueBtnLabel = 'general.continue';
        break;
    }
  }
  continue() {
    this.router.navigate(['location-setting']);
  }
  open(data, event) {
    const navigationExtras = {
      state: {
        data
      }
    };
    this.router.navigate([`${data}`], navigationExtras);
    event.stopPropagation();
  }
  toggleCheckbox() {
    this.checkbox = !this.checkbox;
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }, {
    type: _services_platform_service__WEBPACK_IMPORTED_MODULE_2__.PlatformService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};
GoogleLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-google-login',
  template: _google_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_google_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GoogleLoginPage);


/***/ }),

/***/ 97144:
/*!****************************************************************************!*\
  !*** ./src/app/pages/login/google-login/google-login.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".img {\n  height: 139px;\n  object-fit: cover;\n  opacity: 40%;\n}\n@media (max-device-height: 667px) {\n  .img {\n    height: 100px;\n  }\n}\n\n.form {\n  padding: 3vh 5vw;\n}\n@media (max-device-height: 568px) {\n  .form {\n    padding: 21px 12px;\n  }\n}\n.form .form-top {\n  margin: 0 auto;\n}\n.form__title {\n  text-align: center;\n  font: normal normal 500 25px/30px Montserrat;\n  color: #493735;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #707070;\n}\n@media (max-device-height: 568px) {\n  .form__title {\n    font: normal normal 500 20px/25px Montserrat;\n  }\n}\n.form__title:last-of-type {\n  padding: 0 0 33px;\n}\n.form__item_select {\n  width: 80%;\n  margin: 0 auto 6vh;\n  --padding-start: 0;\n  --inner-padding-start: 18px;\n}\n@media (max-device-height: 568px) {\n  .form__item_select {\n    margin: 0 auto 5vh;\n  }\n}\n.form__item_check {\n  margin: 0 0 4vh;\n}\n@media (max-device-height: 568px) {\n  .form__item_check {\n    margin: 0 0 3vh;\n  }\n}\n.form .item {\n  --padding-start: 0;\n}\n.form .item__select {\n  width: 100%;\n  font: normal normal 400 20px/24px Montserrat;\n  --placeholder-color: #493735;\n  --placeholder-opacity: 1;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #707070;\n}\n.form .item__select::part(icon) {\n  color: #493735;\n  opacity: 1;\n}\n.form .item__checkbox {\n  margin-right: 6.93vw;\n  --background-checked: #707070;\n  --border-color-checked: #707070;\n}\n.form .item__label {\n  font: normal normal 300 16px/19px Montserrat;\n  color: #493735;\n}\n.form__button {\n  height: 7.39vh;\n  padding: 0 0 0 0.63vw;\n  margin: 10.34vh 0 0;\n  --border-radius: 36px;\n  text-transform: uppercase;\n  font: normal normal 500 16px/19px Montserrat;\n  --background: #FFD700;\n  color: #493735;\n}\n.form__button.button-disabled {\n  --background: #d9d9d9;\n  color: #fff;\n}\n@media (max-device-height: 667px) {\n  .form__button {\n    margin: 5vh 0 0 0;\n  }\n}\n\n.opacity {\n  opacity: 0;\n}\n\n:host ::ng-deep a {\n  text-decoration: underline;\n}\n\n.ion-activatable ion-label a {\n  position: relative;\n  z-index: 10;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/google-login/google-login.page.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,iBAAA;EACA,YAAA;AACF;AAAE;EAJF;IAKI,aAAA;EAGF;AACF;;AAAA;EACE,gBAAA;AAGF;AAFE;EAFF;IAGI,kBAAA;EAKF;AACF;AAJE;EACE,cAAA;AAMJ;AAHE;EACE,kBAAA;EACA,4CAAA;EACA,cAAA;EACA,8BAAA;EACA,kCAAA;AAKJ;AAJI;EANF;IAOI,4CAAA;EAOJ;AACF;AALI;EACE,iBAAA;AAON;AAFI;EACE,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,2BAAA;AAIN;AAHM;EALF;IAMI,kBAAA;EAMN;AACF;AAHI;EACE,eAAA;AAKN;AAJM;EAFF;IAGI,eAAA;EAON;AACF;AAJE;EACE,kBAAA;AAMJ;AAJI;EACE,WAAA;EACA,4CAAA;EACA,4BAAA;EACA,wBAAA;EACA,8BAAA;EACA,kCAAA;AAMN;AALM;EACE,cAAA;EACA,UAAA;AAOR;AAJI;EACE,oBAAA;EACA,6BAAA;EACA,+BAAA;AAMN;AAJI;EACE,4CAAA;EACA,cAAA;AAMN;AAFE;EACE,cAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4CAAA;EACA,qBAAA;EACA,cAAA;AAIJ;AAHI;EACE,qBAAA;EACA,WAAA;AAKN;AAHI;EAbF;IAcI,iBAAA;EAMJ;AACF;;AAFA;EACE,UAAA;AAKF;;AAFA;EACE,0BAAA;AAKF;;AAAI;EACE,kBAAA;EACA,WAAA;AAGN","sourcesContent":[".img {\r\n  height: 139px;\r\n  object-fit: cover;\r\n  opacity: 40%;\r\n  @media (max-device-height: 667px) {\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n.form {\r\n  padding: 3vh 5vw;\r\n  @media (max-device-height: 568px) {\r\n    padding: 21px 12px;\r\n  }\r\n  .form-top {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n    font: normal normal 500 25px/30px Montserrat;\r\n    color: #493735;\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: #707070;\r\n    @media (max-device-height: 568px) {\r\n      font: normal normal 500 20px/25px Montserrat;\r\n    }\r\n\r\n    &:last-of-type {\r\n      padding: 0 0 33px;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    &_select {\r\n      width: 80%;\r\n      margin: 0 auto 6vh;\r\n      --padding-start: 0;\r\n      --inner-padding-start: 18px;\r\n      @media (max-device-height: 568px) {\r\n        margin: 0 auto 5vh;\r\n      }\r\n    }\r\n\r\n    &_check {\r\n      margin: 0 0 4vh;\r\n      @media (max-device-height: 568px) {\r\n        margin: 0 0 3vh;\r\n      }\r\n    }\r\n  }\r\n  .item {\r\n    --padding-start: 0;\r\n\r\n    &__select {\r\n      width: 100%;\r\n      font: normal normal 400 20px/24px Montserrat;\r\n      --placeholder-color: #493735;\r\n      --placeholder-opacity: 1;\r\n      -webkit-text-stroke-width: 1px;\r\n      -webkit-text-stroke-color: #707070;\r\n      &::part(icon) {\r\n        color: #493735;\r\n        opacity: 1;\r\n      }\r\n    }\r\n    &__checkbox {\r\n      margin-right: 6.93vw;\r\n      --background-checked: #707070;\r\n      --border-color-checked: #707070;\r\n    }\r\n    &__label {\r\n      font: normal normal 300 16px/19px Montserrat;\r\n      color: #493735;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    height: 7.39vh;\r\n    padding: 0 0 0 0.63vw;\r\n    margin: 10.34vh 0 0;\r\n    --border-radius: 36px;\r\n    text-transform: uppercase;\r\n    font: normal normal 500 16px/19px Montserrat;\r\n    --background: #FFD700;\r\n    color: #493735;\r\n    &.button-disabled {\r\n      --background: #d9d9d9;\r\n      color: #fff;\r\n    }\r\n    @media (max-device-height: 667px) {\r\n      margin: 5vh 0 0 0;\r\n    }\r\n  }\r\n}\r\n\r\n.opacity {\r\n  opacity: 0;\r\n}\r\n\r\n:host ::ng-deep a {\r\n  text-decoration: underline;\r\n}\r\n\r\n.ion-activatable {\r\n  ion-label {\r\n    a {\r\n      position: relative;\r\n      z-index: 10;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 17617:
/*!****************************************************************************!*\
  !*** ./src/app/pages/login/google-login/google-login.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<ion-content>\r\n  <ion-img src=\"../../../../assets/img/bread.png\" class=\"img\"></ion-img>\r\n  <form class=\"form\" [formGroup]=\"myForm\" (ngSubmit)=\"continue()\">\r\n    <div class=\"form-top\">\r\n      <h1 class=\"form__title\">{{ 'googleLogin.welcome' | translate }}</h1>\r\n      <h1 class=\"form__title\">{{ 'googleLogin.youAreIn' | translate }}</h1>\r\n      <ion-item class=\"form__item form__item_select item\">\r\n        <ion-select class=\"item__select\" value=\"Germany\">\r\n          <ion-select-option value=\"Germany\">{{ 'googleLogin.germany' | translate }}</ion-select-option>\r\n<!--          <ion-select-option value=\"Austria\">{{'g'}}</ion-select-option>-->\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n      <ion-item class=\"form__item form__item_check item ion-align-items-start\" [class.opacity]=\"!android\" lines=\"none\">\r\n        <ion-checkbox class=\"item__checkbox\" formControlName=\"checkbox1\" mode=\"md\"></ion-checkbox>\r\n        <ion-label class=\"item__label ion-text-wrap\">{{ 'googleLogin.googleDsgvo' | translate }}</ion-label>\r\n      </ion-item>\r\n    <ion-item class=\"form__item item ion-align-items-start\" lines=\"none\" (click)=\"toggleCheckbox()\">\r\n      <ion-checkbox class=\"item__checkbox\" formControlName=\"checkbox2\" [checked]=\"checkbox\"></ion-checkbox>\r\n      <ion-label class=\"item__label ion-text-wrap\">\r\n        {{ 'googleLogin.iConfirmThe' | translate }}\r\n        <a (click)=\"open('legal', $event)\">{{ 'googleLogin.termsOfUse' | translate }}</a>\r\n        {{ 'googleLogin.andThe' | translate }}\r\n        <a (click)=\"open('privacy', $event)\">{{ 'googleLogin.privacyPolicy' | translate }}</a>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-button class=\"form__button\" type=\"submit\" expand=\"block\" size=\"large\"\r\n                [disabled]=\"myForm.invalid\">\r\n      {{ continueBtnLabel | translate }}</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_google-login_google-login_module_ts.js.map