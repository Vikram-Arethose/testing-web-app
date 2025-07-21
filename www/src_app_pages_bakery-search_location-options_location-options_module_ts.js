(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bakery-search_location-options_location-options_module_ts"],{

/***/ 53376:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/bakery-search/location-options/location-options-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationOptionsPageRoutingModule": () => (/* binding */ LocationOptionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _location_options_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-options.page */ 11085);




const routes = [{
  path: '',
  component: _location_options_page__WEBPACK_IMPORTED_MODULE_0__.LocationOptionsPage
}];
let LocationOptionsPageRoutingModule = class LocationOptionsPageRoutingModule {};
LocationOptionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LocationOptionsPageRoutingModule);


/***/ }),

/***/ 56907:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/bakery-search/location-options/location-options.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationOptionsPageModule": () => (/* binding */ LocationOptionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _location_options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-options-routing.module */ 53376);
/* harmony import */ var _location_options_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-options.page */ 11085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let LocationOptionsPageModule = class LocationOptionsPageModule {};
LocationOptionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _location_options_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationOptionsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_location_options_page__WEBPACK_IMPORTED_MODULE_1__.LocationOptionsPage]
})], LocationOptionsPageModule);


/***/ }),

/***/ 11085:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/bakery-search/location-options/location-options.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationOptionsPage": () => (/* binding */ LocationOptionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _location_options_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-options.page.html?ngResource */ 67248);
/* harmony import */ var _location_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-options.page.scss?ngResource */ 49626);
/* harmony import */ var _location_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_location_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/geolocation.service */ 74375);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/local-storage.service */ 18345);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








let LocationOptionsPage = class LocationOptionsPage {
  constructor(geolocationServ, localStorageServ, logger, router) {
    this.geolocationServ = geolocationServ;
    this.localStorageServ = localStorageServ;
    this.logger = logger;
    this.router = router;
  }
  ngOnInit() {
    this.geolocationServ.currLocation.subscribe(res => {
      this.myAddress = res.address;
      setTimeout(() => {
        this.locationArr = this.localStorageServ.get('locationArr');
      }, 0);
    });
  }
  ionViewDidEnter() {
    this.geolocationServ.findAddress(this.searchElementRef);
  }
  setMyLocation(location) {
    this.geolocationServ.changeLocation(location);
  }
  go() {
    this.router.navigate(['bakery-search']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.GeolocationService
  }, {
    type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static #_2 = this.propDecorators = {
    searchElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['search']
    }]
  };
};
LocationOptionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-location-options',
  template: _location_options_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_location_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LocationOptionsPage);


/***/ }),

/***/ 49626:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/bakery-search/location-options/location-options.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top {\n  height: 18px;\n  background: #FEDE00;\n}\n\n.toolbar__search {\n  padding-bottom: 0;\n  --background: none;\n  font: italic normal 200 20px/24px Montserrat;\n  color: #493735;\n}\n.toolbar .input {\n  background: #fff;\n  padding-left: 10vw;\n  border: none;\n  outline: none;\n  font: italic normal 200 20px/24px Montserrat;\n  color: #493735;\n}\n\n.block {\n  border-bottom: 1px solid #CBCBCB;\n}\n\n.my-location {\n  background: #FEDE00;\n  display: flex;\n  align-items: center;\n  padding: 5% 0 5% 25%;\n}\n.my-location__text {\n  max-width: 200px;\n  font: normal normal 700 15px/19px Montserrat;\n  color: #493735;\n}\n\n.recently {\n  padding: 4% 10vw 20% 14.5vw;\n  font: normal normal 400 15px/19px Montserrat;\n  color: #493735;\n}\n.recently__label {\n  padding-bottom: 20px;\n}\n.recently__icon {\n  font-size: 24px;\n  padding-right: 17px;\n}\n\n.btn {\n  height: 50px;\n  padding: 0 5vw;\n  margin-top: 10vh;\n  font: normal normal 700 25px/25px Montserrat;\n  text-transform: capitalize;\n  color: #493735;\n  --border-radius: 30px;\n  --background: #FEDE00;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/bakery-search/location-options/location-options.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,mBAAA;AACF;;AAGE;EACE,iBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AAAJ;AAGE;EACE,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,4CAAA;EACA,cAAA;AADJ;;AAKA;EACE,gCAAA;AAFF;;AAKA;EACE,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAFF;AAGE;EACE,gBAAA;EACA,4CAAA;EACA,cAAA;AADJ;;AAKA;EACE,2BAAA;EACA,4CAAA;EACA,cAAA;AAFF;AAGE;EACE,oBAAA;AADJ;AAGE;EACE,eAAA;EACA,mBAAA;AADJ;;AAKA;EACE,YAAA;EACA,cAAA;EACA,gBAAA;EACA,4CAAA;EACA,0BAAA;EACA,cAAA;EACA,qBAAA;EACA,qBAAA;AAFF","sourcesContent":[".top {\r\n  height: 18px;\r\n  background: #FEDE00;\r\n}\r\n\r\n.toolbar {\r\n  &__search {\r\n    padding-bottom: 0;\r\n    --background: none;\r\n    font: italic normal 200 20px/24px Montserrat;\r\n    color: #493735;\r\n  }\r\n\r\n  .input {\r\n    background: #fff;\r\n    padding-left: 10vw;\r\n    border: none;\r\n    outline: none;\r\n    font: italic normal 200 20px/24px Montserrat;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\n.block {\r\n  border-bottom: 1px solid #CBCBCB;\r\n}\r\n\r\n.my-location {\r\n  background: #FEDE00;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5% 0 5% 25%;\r\n  &__text {\r\n    max-width: 200px;\r\n    font: normal normal 700 15px/19px Montserrat;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\n.recently {\r\n  padding: 4% 10vw 20% 14.5vw;\r\n  font: normal normal 400 15px/19px Montserrat;\r\n  color: #493735;\r\n  &__label {\r\n    padding-bottom: 20px;\r\n  }\r\n  &__icon {\r\n    font-size: 24px;\r\n    padding-right: 17px;\r\n  }\r\n}\r\n\r\n.btn {\r\n  height: 50px;\r\n  padding: 0 5vw;\r\n  margin-top: 10vh;\r\n  font: normal normal 700 25px/25px Montserrat;\r\n  text-transform: capitalize;\r\n  color: #493735;\r\n  --border-radius: 30px;\r\n  --background: #FEDE00;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67248:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/bakery-search/location-options/location-options.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <div class=\"top\"></div>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <input #search class=\"input\" [placeholder]=\"'locationSet.searchLocation' | translate \"\r\n           autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" type=\"text\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"my-location block\">\r\n    <div>\r\n      <p class=\"my-location__text\">{{ 'locationOpt.myLocation' | translate }}</p>\r\n      <p class=\"my-location__text\">{{myAddress}}</p>\r\n    </div>\r\n  <!--  <ion-button class=\"my-location__btn btn\" size=\"small\" fill=\"none\">\r\n      <ion-icon slot=\"icon-only\" class=\"btn__icon\" src=\"../../../../assets/icons/check.svg\"></ion-icon>\r\n    </ion-button>-->\r\n  </div>\r\n  <div class=\"recently block\">\r\n    <p class=\"recently__label\">{{ 'locationOpt.recently' | translate }}</p>\r\n    <ion-item class=\"row\" mode=\"md\" *ngFor=\"let location of locationArr\" (click)=\"setMyLocation(location)\" button lines=\"none\">\r\n      <ion-icon class=\"recently__icon\" src=\"../../../../assets/icons/clock.svg\"></ion-icon>\r\n      <ion-label>{{location.address}}</ion-label>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ion-button class=\"btn\" expand=\"block\" (click)=\"go()\">Go!</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bakery-search_location-options_location-options_module_ts.js.map