(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_location-setting_location-setting_module_ts"],{

/***/ 28506:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/login/location-setting/location-setting-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationSettingPageRoutingModule": () => (/* binding */ LocationSettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _location_setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-setting.page */ 13701);




const routes = [{
  path: '',
  component: _location_setting_page__WEBPACK_IMPORTED_MODULE_0__.LocationSettingPage
}];
let LocationSettingPageRoutingModule = class LocationSettingPageRoutingModule {};
LocationSettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LocationSettingPageRoutingModule);


/***/ }),

/***/ 46400:
/*!*************************************************************************!*\
  !*** ./src/app/pages/login/location-setting/location-setting.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationSettingPageModule": () => (/* binding */ LocationSettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _location_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-setting-routing.module */ 28506);
/* harmony import */ var _location_setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-setting.page */ 13701);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/google-maps */ 3889);










let LocationSettingPageModule = class LocationSettingPageModule {};
LocationSettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _location_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationSettingPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMapsModule],
  declarations: [_location_setting_page__WEBPACK_IMPORTED_MODULE_1__.LocationSettingPage]
})], LocationSettingPageModule);


/***/ }),

/***/ 13701:
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/location-setting/location-setting.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationSettingPage": () => (/* binding */ LocationSettingPage)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _location_setting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-setting.page.html?ngResource */ 47997);
/* harmony import */ var _location_setting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-setting.page.scss?ngResource */ 41515);
/* harmony import */ var _location_setting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_location_setting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/geolocation.service */ 74375);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http.service */ 6858);









let LocationSettingPage = class LocationSettingPage {
  constructor(ngZone, logger, geolocationServ, httpServ) {
    this.ngZone = ngZone;
    this.logger = logger;
    this.geolocationServ = geolocationServ;
    this.httpServ = httpServ;
    this.googleMapType = 'satellite';
    this.options = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8
    };
    this.defaultPosition = {
      lat: 51.165691,
      lng: 10.451526
    };
  }
  ngOnInit() {
    this.makeInit();
  }
  ionViewDidEnter() {
    this.geolocationServ.findAddress(this.searchElementRef).then(() => {
      this.getBranchesNear();
      this.useCurrLocation = false;
      this.locationSearched = true;
    });
  }
  makeInit() {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.defaultPosition = _this.geolocationServ.defaultLocation;
      _this.subscription = _this.geolocationServ.currLocation.subscribe(res => {
        _this.lat = res.lat;
        _this.lng = res.lng;
        _this.logger.log('lat, lng', _this.lat, _this.lng);
      });
      if (yield _this.geolocationServ.getCurrentPosition()) {
        _this.useCurrLocation = true;
      } else {
        _this.geolocationServ.changeLocation();
      }
      _this.showMap = true;
      _this.getBranchesNear();
    })();
  }
  onUseCurrLocation() {
    var _this2 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.geolocationServ.getCurrentPosition();
      if (_this2.lat && _this2.lng) {
        _this2.useCurrLocation = true;
        _this2.getBranchesNear();
        _this2.resetSearchField();
      }
    })();
  }
  getBranchesNear() {
    if (this.lng && this.lat) {
      this.branchesNear$ = this.httpServ.getBranchesNear(this.lat.toString(), this.lng.toString());
    }
  }
  resetSearchField() {
    this.searchElementRef.nativeElement.value = '';
    this.locationSearched = false;
  }
  ionViewDidLeave() {
    this.resetSearchField();
    this.subscription.unsubscribe();
    this.showMap = false;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__.GeolocationService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService
  }];
  static #_2 = this.propDecorators = {
    map: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMap]
    }],
    searchElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['search']
    }]
  };
};
LocationSettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-location-setting',
  template: _location_setting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_location_setting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LocationSettingPage);


/***/ }),

/***/ 41515:
/*!************************************************************************************!*\
  !*** ./src/app/pages/login/location-setting/location-setting.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  display: flex;\n  flex-direction: column;\n}\n\n.header__title {\n  width: 290px;\n  margin: 0 auto;\n  padding: 3vh 0;\n  text-align: center;\n  font: normal normal 600 20px/24px Montserrat;\n  color: #493735;\n}\n@media (max-height: 670px) {\n  .header__title {\n    padding: 1.5vh 0;\n  }\n}\n\n.btn-wrapper {\n  width: 90vw;\n  margin: 3vh auto;\n}\n@media (max-height: 670px) {\n  .btn-wrapper {\n    margin: 1vh auto;\n  }\n}\n.btn-wrapper__btn {\n  height: 50px;\n  --border-radius: 20px;\n  --background: #FEDE00;\n  font: 5.33vw/24px Montserrat;\n  --color: #493735;\n}\n\n.item {\n  --min-height: 50px;\n  --border-radius: 20px;\n  margin: 0 0 1.85vh;\n  font: 4.27vw/19px Montserrat;\n}\n@media (max-height: 650px) {\n  .item {\n    margin: 0 0 0.5vh;\n  }\n}\n.item__input {\n  width: 100%;\n  background: #F0F1F3;\n  border: none;\n  outline: none;\n}\n.item:nth-of-type(2) {\n  --background: #F0F1F3;\n  font-weight: 300;\n}\n.item__icon {\n  font-size: 25px;\n  color: #5C5B5B;\n}\n\n.selected {\n  --background: #dfdcdc;\n}\n\n.map {\n  width: 100%;\n  height: 50vh;\n  align-self: flex-end;\n}\n@media (max-device-height: 600px) {\n  .map {\n    height: 40vh;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/location-setting/location-setting.page.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;AACF;;AAIE;EACE,YAAA;EACA,cAAA;EACA,cAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AADJ;AAEI;EAPF;IAQI,gBAAA;EACJ;AACF;;AAGA;EACE,WAAA;EACA,gBAAA;AAAF;AACE;EAHF;IAII,gBAAA;EAEF;AACF;AAAE;EACE,YAAA;EACA,qBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;AAEJ;;AAGA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,4BAAA;AAAF;AACE;EALF;IAMI,iBAAA;EAEF;AACF;AADE;EACE,WAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AAGJ;AADE;EACE,qBAAA;EACA,gBAAA;AAGJ;AAAE;EACE,eAAA;EACA,cAAA;AAEJ;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;AACF;AAAE;EAJF;IAKI,YAAA;EAGF;AACF","sourcesContent":[".content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n\r\n  &__title {\r\n    width: 290px;\r\n    margin: 0 auto;\r\n    padding: 3vh 0;\r\n    text-align: center;\r\n    font: normal normal 600 20px/24px Montserrat;\r\n    color: #493735;\r\n    @media (max-height: 670px) {\r\n      padding: 1.5vh 0;\r\n    }\r\n  }\r\n}\r\n\r\n.btn-wrapper {\r\n  width: 90vw;\r\n  margin: 3vh auto;\r\n  @media (max-height: 670px) {\r\n    margin: 1vh auto;\r\n  }\r\n\r\n  &__btn {\r\n    height: 50px;\r\n    --border-radius: 20px;\r\n    --background: #FEDE00;\r\n    font: 5.33vw/24px Montserrat;\r\n    --color: #493735;\r\n  }\r\n\r\n}\r\n\r\n.item {\r\n  --min-height: 50px;\r\n  --border-radius: 20px;\r\n  margin: 0 0 1.85vh;\r\n  font: 4.27vw/19px Montserrat;\r\n  @media (max-height: 650px) {\r\n    margin: 0 0 0.5vh;\r\n  }\r\n  &__input {\r\n    width: 100%;\r\n    background: #F0F1F3;\r\n    border: none;\r\n    outline: none;\r\n  }\r\n  &:nth-of-type(2) {\r\n    --background: #F0F1F3;\r\n    font-weight: 300;\r\n  }\r\n\r\n  &__icon {\r\n    font-size: 25px;\r\n    color: #5C5B5B;\r\n  }\r\n}\r\n\r\n.selected {\r\n  --background: #dfdcdc;\r\n}\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 50vh;\r\n  align-self: flex-end;\r\n  @media (max-device-height: 600px) {\r\n    height: 40vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47997:
/*!************************************************************************************!*\
  !*** ./src/app/pages/login/location-setting/location-setting.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"'Maps'\"></app-menu-header>\r\n<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"header\">\r\n      <h1 class=\"header__title\">{{ 'locationSet.title' | translate }}</h1>\r\n    </div>\r\n    <div class=\"btn-wrapper\">\r\n      <ion-item class=\"item\" lines=\"none\" (click)=\"onUseCurrLocation()\" detail=\"false\" button>\r\n        <ion-icon slot=\"start\" class=\"item__icon\" src=\"../../../assets/icons/map-location-arrow.svg\"></ion-icon>\r\n        <ion-label>{{ 'locationSet.useCurrLocation' | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"item\" lines=\"none\">\r\n        <input #search class=\"item__input\" [placeholder]=\"'locationSet.searchLocation' | translate \"\r\n                   autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" type=\"text\">\r\n        <ion-icon slot=\"start\" class=\"item__icon\" src=\"../../../assets/icons/search.svg\"></ion-icon>\r\n      </ion-item>\r\n      <ion-button class=\"btn-wrapper__btn btn\" size=\"block\" mode=\"ios\"\r\n                  [routerLink]=\"'/bakery-search'\"\r\n                  [disabled]=\"!useCurrLocation  && !locationSearched\">\r\n        {{ locationSearched ? ('locationSet.useThisLocation' | translate) : 'GO!' }}</ion-button>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"showMap\">\r\n      <google-map #myGoogleMap [options]=\"options\" [center]=\"defaultPosition\">\r\n        <!-- <map-marker [position]=\"defaultPosition\"></map-marker> -->\r\n        <!-- <map-marker *ngFor=\"let bakery of branchesNear$ | async\"\r\n                    [latitude]=\"+bakery.lat\" [longitude]=\"+bakery.lng\"\r\n                    [iconUrl]=\"'../../../../assets/icons/bakery/circle-green.png'\"></map-marker> -->\r\n      </google-map>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_location-setting_location-setting_module_ts.js.map