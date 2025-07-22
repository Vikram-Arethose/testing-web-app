(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bakery-search_bakery-search_module_ts"],{

/***/ 22505:
/*!*********************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery-search-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakerySearchPageRoutingModule": () => (/* binding */ BakerySearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bakery_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bakery-search.page */ 79267);




const routes = [{
  path: '',
  component: _bakery_search_page__WEBPACK_IMPORTED_MODULE_0__.BakerySearchPage
}, {
  path: 'location-options',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bakery-search_location-options_location-options_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./location-options/location-options.module */ 56907)).then(m => m.LocationOptionsPageModule)
}, {
  path: 'bakery',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_bakery-search_bakery_bakery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bakery/bakery.module */ 51304)).then(m => m.BakeryPageModule)
}];
let BakerySearchPageRoutingModule = class BakerySearchPageRoutingModule {};
BakerySearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BakerySearchPageRoutingModule);


/***/ }),

/***/ 83841:
/*!*************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery-search.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakerySearchPageModule": () => (/* binding */ BakerySearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bakery_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bakery-search-routing.module */ 22505);
/* harmony import */ var _bakery_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bakery-search.page */ 79267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/google-maps */ 3889);










let BakerySearchPageModule = class BakerySearchPageModule {};
BakerySearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__.GoogleMapsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _bakery_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.BakerySearchPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_bakery_search_page__WEBPACK_IMPORTED_MODULE_1__.BakerySearchPage]
})], BakerySearchPageModule);


/***/ }),

/***/ 79267:
/*!***********************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery-search.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakerySearchPage": () => (/* binding */ BakerySearchPage)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _bakery_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bakery-search.page.html?ngResource */ 40673);
/* harmony import */ var _bakery_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bakery-search.page.scss?ngResource */ 42647);
/* harmony import */ var _bakery_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bakery_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/logger.service */ 51273);
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/geolocation.service */ 74375);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/bakery.service */ 24934);
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/push.service */ 52314);











let BakerySearchPage = class BakerySearchPage {
  constructor(bakeryServ, logger, geolocationServ, httpServ, router, pushServ) {
    this.bakeryServ = bakeryServ;
    this.logger = logger;
    this.geolocationServ = geolocationServ;
    this.httpServ = httpServ;
    this.router = router;
    this.pushServ = pushServ;
    this.iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
    this.iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';
  }
  ngOnInit() {
    var _this = this;
    this.geolocationServ.currLocation.subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res.lat && res.lng) {
          _this.myAddress = res.address;
          _this.lat = res.lat;
          _this.lng = res.lng;
        } else {
          if (!(yield _this.geolocationServ.getCurrentPosition())) {
            yield _this.router.navigate(['bakery-search/location-options']);
            return;
          }
        }
        _this.getBakeries();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  ionViewWillEnter() {
    this.getBakeries();
  }
  getBakeries() {
    if (this.lat && this.lng) {
      this.bakeries$ = this.httpServ.getHomeBranches(this.lat.toString(), this.lng.toString());
    }
  }
  onFavorite(bakeryId, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(() => this.getBakeries());
    $event.stopPropagation();
  }
  doRefresh(event) {
    this.getBakeries();
    event.target.complete();
  }
  openSuggestBakeryUrl() {
    this.httpServ.getIab('https://broetchen.app/einen-baecker-empfehlen/');
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_6__.BakeryService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__.GeolocationService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _services_push_service__WEBPACK_IMPORTED_MODULE_7__.PushService
  }];
};
BakerySearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-bakery-search',
  template: _bakery_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_bakery_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BakerySearchPage);


/***/ }),

/***/ 42647:
/*!************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery-search.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toolbar {\n  padding: 1vh 0;\n  --background: #FEDE00;\n}\n.toolbar__button {\n  padding: 0 0 0 4vw;\n  --color: #493735;\n}\n.toolbar__button::part(icon) {\n  font-size: 40px;\n}\n.toolbar__link {\n  padding: 0 8vw 0 0;\n  font: normal normal 400 15px/19px Montserrat;\n  --color: #493735;\n  text-decoration: underline;\n}\n\n.container {\n  width: 306px;\n  margin: 0 auto;\n  padding: 4.43vh 0;\n}\n\n.suggest-bakery {\n  text-align: center;\n}\n.suggest-bakery__btn {\n  margin: 5vh 0;\n  --background: #FEDE00;\n  --border-radius: 5px;\n  font: normal normal 400 20px/24px Montserrat;\n  color: #493735;\n}\n\n.bakery-item {\n  display: block;\n  margin: 0 0 1.23vh;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/bakery-search/bakery-search.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,qBAAA;AACF;AAAE;EACE,kBAAA;EACA,gBAAA;AAEJ;AADI;EACE,eAAA;AAGN;AAAE;EACE,kBAAA;EACA,4CAAA;EACA,gBAAA;EACA,0BAAA;AAEJ;;AAEA;EACE,YAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,kBAAA;AACF;AACE;EACE,aAAA;EACA,qBAAA;EACA,oBAAA;EACA,4CAAA;EACA,cAAA;AACJ;;AAGA;EACE,cAAA;EACA,kBAAA;AAAF","sourcesContent":[".toolbar {\r\n  padding: 1vh 0;\r\n  --background: #FEDE00;\r\n  &__button {\r\n    padding: 0 0 0 4vw;\r\n    --color: #493735;\r\n    &::part(icon) {\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  &__link {\r\n    padding: 0 8vw 0 0;\r\n    font: normal normal 400 15px/19px Montserrat;\r\n    --color: #493735;\r\n    text-decoration: underline;\r\n  }\r\n}\r\n\r\n.container {\r\n  width: 306px;\r\n  margin: 0 auto;\r\n  padding: 4.43vh 0;\r\n}\r\n\r\n.suggest-bakery {\r\n  text-align: center;\r\n  &__text { }\r\n  &__btn {\r\n    margin: 5vh 0;\r\n    --background: #FEDE00;\r\n    --border-radius: 5px;\r\n    font: normal normal 400 20px/24px Montserrat;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\n.bakery-item {\r\n  display: block;\r\n  margin: 0 0 1.23vh;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40673:
/*!************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery-search.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button mode=\"ios\" class=\"toolbar__button\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-router-link slot=\"end\" class=\"toolbar__link\" routerDirection=\"forward\" [routerLink]=\"'/bakery-search/location-options'\">\r\n      {{myAddress || 'Look for a bakery'}}</ion-router-link>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  <ion-img src=\"../../../assets/img/bread.png\"></ion-img>\r\n  <div class=\"container\">\r\n    <ng-container *ngIf=\"(bakeries$ | async) as bakeries\">\r\n      <app-bakery-item class=\"bakery-item\"\r\n                       *ngFor=\"let bakery of bakeries\"\r\n                       [bakery]=\"bakery\"\r\n                       (favouriteClicked)=\"getBakeries()\"></app-bakery-item>\r\n      <div class=\"suggest-bakery\" *ngIf=\"bakeries?.length === 0\">\r\n        <p class=\"suggest-bakery__text\">{{ 'bakerySearch.thereIsNoBakery' | translate }}</p>\r\n        <ion-button class=\"suggest-bakery__btn\" mode=\"ios\" [routerLink]=\"'location-options'\"\r\n                    expand=\"block\" size=\"large\">{{ 'bakerySearch.changeLocation' | translate }}</ion-button>\r\n        <p class=\"suggest-bakery__text\">{{ 'bakerySearch.lookAgainOrSuggest' | translate }}</p>\r\n        <ion-button class=\"suggest-bakery__btn\" mode=\"ios\" (click)=\"openSuggestBakeryUrl()\"\r\n                    expand=\"block\" size=\"large\">{{ 'bakerySearch.suggestBakery' | translate }}</ion-button>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bakery-search_bakery-search_module_ts.js.map