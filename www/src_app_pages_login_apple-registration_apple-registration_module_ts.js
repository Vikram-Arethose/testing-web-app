(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_apple-registration_apple-registration_module_ts"],{

/***/ 89000:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/login/apple-registration/apple-registration-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppleRegistrationPageRoutingModule": () => (/* binding */ AppleRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _apple_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple-registration.page */ 14436);




const routes = [{
  path: '',
  component: _apple_registration_page__WEBPACK_IMPORTED_MODULE_0__.AppleRegistrationPage
}];
let AppleRegistrationPageRoutingModule = class AppleRegistrationPageRoutingModule {};
AppleRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppleRegistrationPageRoutingModule);


/***/ }),

/***/ 91845:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login/apple-registration/apple-registration.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppleRegistrationPageModule": () => (/* binding */ AppleRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _apple_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple-registration-routing.module */ 89000);
/* harmony import */ var _apple_registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple-registration.page */ 14436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let AppleRegistrationPageModule = class AppleRegistrationPageModule {};
AppleRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _apple_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppleRegistrationPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_apple_registration_page__WEBPACK_IMPORTED_MODULE_1__.AppleRegistrationPage]
})], AppleRegistrationPageModule);


/***/ }),

/***/ 14436:
/*!***************************************************************************!*\
  !*** ./src/app/pages/login/apple-registration/apple-registration.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppleRegistrationPage": () => (/* binding */ AppleRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _apple_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple-registration.page.html?ngResource */ 84191);
/* harmony import */ var _apple_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple-registration.page.scss?ngResource */ 40524);
/* harmony import */ var _apple_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apple_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AppleRegistrationPage = class AppleRegistrationPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
AppleRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-apple-registration',
  template: _apple_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_apple_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppleRegistrationPage);


/***/ }),

/***/ 40524:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/login/apple-registration/apple-registration.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  padding: 24px 29px;\n  text-align: center;\n  font: normal normal 500 28px/34px Montserrat;\n  color: #493735;\n}\n@media (max-device-height: 736px) {\n  .title {\n    padding: 15px;\n    font: normal normal 500 22px/28px Montserrat;\n  }\n}\n\n.img-container__img {\n  object-fit: cover;\n  object-position: top;\n  opacity: 0.44;\n  height: 42vh;\n}\n\n.content {\n  padding: 6.53vh 3vw;\n  margin: 0 auto;\n}\n@media (max-device-height: 568px) {\n  .content {\n    padding: 3.25vh 1.5vw;\n  }\n}\n\n.grid {\n  margin: 0 0 4.93vh;\n}\n@media (max-device-height: 568px) {\n  .grid {\n    margin: 0 0 2.5vh;\n  }\n}\n.grid__row {\n  margin: 0 0 2.59vh;\n}\n.grid__col .text {\n  font: normal normal 500 16px/19px Montserrat;\n  color: #493735;\n}\n.grid__title {\n  text-align: center;\n}\n\n.btn {\n  height: 7.39vh;\n  padding: 0 2.5vw;\n  --border-radius: 9.6vw;\n  --background: #FEDE00;\n  text-transform: uppercase;\n  font: normal normal 500 16px/19px Montserrat;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/apple-registration/apple-registration.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AACF;AAAE;EALF;IAMI,aAAA;IACA,4CAAA;EAGF;AACF;;AACE;EAEE,iBAAA;EACA,oBAAA;EACA,aAAA;EACA,YAAA;AACJ;;AAGA;EACE,mBAAA;EACA,cAAA;AAAF;AACE;EAHF;IAII,qBAAA;EAEF;AACF;;AACA;EACE,kBAAA;AAEF;AADE;EAFF;IAGI,iBAAA;EAIF;AACF;AAHE;EACE,kBAAA;AAKJ;AADI;EACE,4CAAA;EACA,cAAA;AAGN;AACE;EACE,kBAAA;AACJ;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,sBAAA;EACA,qBAAA;EACA,yBAAA;EACA,4CAAA;AAAF","sourcesContent":[".title {\r\n  padding: 24px 29px;\r\n  text-align: center;\r\n  font: normal normal 500 28px/34px Montserrat;\r\n  color: #493735;\r\n  @media (max-device-height: 736px) {\r\n    padding: 15px;\r\n    font: normal normal 500 22px/28px Montserrat;\r\n  }\r\n}\r\n\r\n.img-container {\r\n  &__img {\r\n    //padding: 0 0 7vh;\r\n    object-fit: cover;\r\n    object-position: top;\r\n    opacity: 0.44;\r\n    height: 42vh;\r\n  }\r\n}\r\n\r\n.content {\r\n  padding: 6.53vh 3vw;\r\n  margin: 0 auto;\r\n  @media (max-device-height: 568px) {\r\n    padding: 3.25vh 1.5vw;\r\n  }\r\n}\r\n\r\n.grid {\r\n  margin: 0 0 4.93vh;\r\n  @media (max-device-height: 568px) {\r\n    margin: 0 0 2.5vh;\r\n  }\r\n  &__row {\r\n    margin: 0 0 2.59vh;\r\n  }\r\n\r\n  &__col {\r\n    .text {\r\n      font: normal normal 500 16px/19px Montserrat;\r\n      color: #493735;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.btn {\r\n  height: 7.39vh;\r\n  padding: 0 2.5vw;\r\n  --border-radius: 9.6vw;\r\n  --background: #FEDE00;\r\n  text-transform: uppercase;\r\n  font: normal normal 500 16px/19px Montserrat;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 84191:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/login/apple-registration/apple-registration.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "`<ion-header></ion-header>\r\n<ion-content>\r\n  <h1 class=\"title\">{{ 'start.header' | translate }}</h1>\r\n  <div class=\"img-container\">\r\n    <ion-img class=\"img-container__img\" src=\"../../../assets/img/girl.png\"></ion-img>\r\n  </div>\r\n  <div class=\"content\">\r\n    <ion-grid class=\"grid\">\r\n      <ion-row class=\"grid__row\">\r\n        <ion-col class=\"grid__col\">\r\n          <p class=\"text grid__title\">{{ 'appleRegister.title' | translate }}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"grid__row\">\r\n        <ion-col class=\"grid__col\" size=\"3\">\r\n          <p class=\"text\">Name</p>\r\n        </ion-col>\r\n        <ion-col class=\"grid__col\">\r\n          <p class=\"text\">{{ 'appleRegister.nameSurname' | translate }}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"grid__row\">\r\n        <ion-col class=\"grid__col\" size=\"3\">\r\n          <p class=\"text\">E-Mail</p>\r\n        </ion-col>\r\n        <ion-col class=\"grid__col\">\r\n          <p class=\"text\">Name@icloud.com</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-button class=\"btn\" expand=\"block\" [routerLink]=\"'/google-login'\">{{ 'general.continue' | translate }}</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_apple-registration_apple-registration_module_ts.js.map