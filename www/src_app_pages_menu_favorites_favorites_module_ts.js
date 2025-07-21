(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_favorites_favorites_module_ts"],{

/***/ 57175:
/*!******************************************************************!*\
  !*** ./src/app/pages/menu/favorites/favorites-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 73117);




const routes = [{
  path: '',
  component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
}];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FavoritesPageRoutingModule);


/***/ }),

/***/ 38095:
/*!**********************************************************!*\
  !*** ./src/app/pages/menu/favorites/favorites.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 57175);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page */ 73117);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









let FavoritesPageModule = class FavoritesPageModule {};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage]
})], FavoritesPageModule);


/***/ }),

/***/ 73117:
/*!********************************************************!*\
  !*** ./src/app/pages/menu/favorites/favorites.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page.html?ngResource */ 52081);
/* harmony import */ var _favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss?ngResource */ 97614);
/* harmony import */ var _favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ 6858);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/bakery.service */ 24934);






let FavoritesPage = class FavoritesPage {
  constructor(bakeryServ, httpServ) {
    this.bakeryServ = bakeryServ;
    this.httpServ = httpServ;
  }
  ngOnInit() {
    this.getFavoritesBakeries();
  }
  getFavoritesBakeries() {
    this.httpServ.getFavorites().subscribe(res => {
      this.bakeries = res.map(item => ({
        ...item,
        isFavourite: true
      }));
    });
  }
  onFavorite() {
    this.getFavoritesBakeries();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_3__.BakeryService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
  }];
};
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-favorites',
  template: _favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FavoritesPage);


/***/ }),

/***/ 97614:
/*!*********************************************************************!*\
  !*** ./src/app/pages/menu/favorites/favorites.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  width: 306px;\n  margin: 0 auto;\n  padding: 6.16vh 0;\n}\n\n.bakery-item {\n  display: block;\n  margin: 0 0 20px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/favorites/favorites.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;AACF","sourcesContent":[".container {\r\n  width: 306px;\r\n  margin: 0 auto;\r\n  padding: 6.16vh 0;\r\n}\r\n\r\n.bakery-item {\r\n  display: block;\r\n  margin: 0 0 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52081:
/*!*********************************************************************!*\
  !*** ./src/app/pages/menu/favorites/favorites.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"'favorites.header' | translate\"></app-menu-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <app-bakery-item class=\"bakery-item\"\r\n                     *ngFor=\"let bakery of bakeries\"\r\n                     [bakery]=\"bakery\"\r\n                     (favouriteClicked)=\"onFavorite()\"></app-bakery-item>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_favorites_favorites_module_ts.js.map