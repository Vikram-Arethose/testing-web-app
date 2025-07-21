(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_confirm-code_confirm-code_module_ts"],{

/***/ 30841:
/*!*************************************************************************!*\
  !*** ./src/app/pages/login/confirm-code/confirm-code-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmCodeRoutingModule": () => (/* binding */ ConfirmCodeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-code.component */ 25993);




const routes = [{
  path: '',
  component: _confirm_code_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmCodeComponent
}];
let ConfirmCodeRoutingModule = class ConfirmCodeRoutingModule {};
ConfirmCodeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ConfirmCodeRoutingModule);


/***/ }),

/***/ 25993:
/*!********************************************************************!*\
  !*** ./src/app/pages/login/confirm-code/confirm-code.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmCodeComponent": () => (/* binding */ ConfirmCodeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _confirm_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-code.component.html?ngResource */ 12150);
/* harmony import */ var _confirm_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-code.component.scss?ngResource */ 32869);
/* harmony import */ var _confirm_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_confirm_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/alert.service */ 25970);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ 6858);








let ConfirmCodeComponent = class ConfirmCodeComponent {
  constructor(toast, translate, router, http) {
    this.toast = toast;
    this.translate = translate;
    this.router = router;
    this.http = http;
    this.confirmCode = '';
    this.activeButton = true;
    this.newPasswordSend = false;
    this.disabled = false;
    this.timer = 60;
  }
  ngOnInit() {
    this.checkTimer();
  }
  getConfirmCode(value) {
    this.confirmCode = value;
    if (this.confirmCode.length < 6) {
      this.activeButton = true;
    } else {
      this.activeButton = false;
    }
  }
  sendCode() {
    const message = this.translate.instant('emailRegister.successCode');
    this.http.sendConfirmationCode(this.confirmCode).subscribe(res => {
      this.newPasswordSend = false;
      this.toast.presentToast(message);
      localStorage.setItem('ConfirmStatusCode', this.newPasswordSend.toString());
      setTimeout(() => {
        this.router.navigate(['']);
        localStorage.removeItem('changeDataEmail');
      }, 2000);
    }, err => {
      this.confirmCode = '';
    });
  }
  resendCode() {
    const email = localStorage.getItem('changeDataEmail');
    this.http.sendPassword(email, null, 1).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        this.toast.presentToast('code resend');
      }
    }, err => {});
    this.disabledBtnFromSpam();
  }
  returnToStartPage() {
    this.router.navigate(['']);
    localStorage.setItem('ConfirmStatusCode', 'false');
    localStorage.removeItem('changeDataEmail');
  }
  disabledBtnFromSpam() {
    const timeStamp = new Date().getTime() + 60000;
    localStorage.setItem('resendCode_timestamp', timeStamp.toString());
    this.disabled = true;
    this.checkTimer();
  }
  checkTimer() {
    const timeStamp = localStorage.getItem('resendCode_timestamp');
    if (timeStamp) {
      const currentTime = new Date().getTime();
      const diff = (+timeStamp - currentTime) / 1000;
      if (diff > 0) {
        this.timer = Math.round(diff);
        this.startTimer();
      } else {
        this.disabled = false;
        localStorage.removeItem('resendCode_timestamp');
      }
    } else {
      this.disabled = false;
    }
  }
  startTimer() {
    const timerToShow = setInterval(() => {
      this.timer--;
      if (this.timer < 1) {
        this.disabled = false;
        clearInterval(timerToShow);
        localStorage.removeItem('resendCode_timestamp');
        this.timer = 60;
      }
    }, 1000);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
  }];
};
ConfirmCodeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-confirm-code',
  template: _confirm_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_confirm_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConfirmCodeComponent);


/***/ }),

/***/ 72222:
/*!*****************************************************************!*\
  !*** ./src/app/pages/login/confirm-code/confirm-code.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmCodeModule": () => (/* binding */ ConfirmCodeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _confirm_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-code.component */ 25993);
/* harmony import */ var _confirm_code_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-code-routing.module */ 30841);








let ConfirmCodeModule = class ConfirmCodeModule {};
ConfirmCodeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _confirm_code_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConfirmCodeRoutingModule],
  declarations: [_confirm_code_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmCodeComponent]
})], ConfirmCodeModule);


/***/ }),

/***/ 32869:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/login/confirm-code/confirm-code.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".code-container {\n  width: 90%;\n  margin: 16vh auto;\n}\n.code-container h2 {\n  text-align: center;\n  margin-bottom: 3vh;\n}\n\n.top {\n  width: 100%;\n  height: 18px;\n  background: #FEDE00;\n}\n\n.arrow {\n  position: absolute;\n  top: 4vh;\n  left: 5.6vw;\n  font-size: 9vw;\n  color: #FEDE00;\n}\n\n.text {\n  padding: 3vh 9vw 0;\n  text-align: center;\n  font: normal normal 600 25px/30px Montserrat;\n  color: #493735;\n}\n\n.button-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.button-wrapper__btn {\n  width: 74vw;\n  height: 7.39vh;\n  margin-top: 12vh;\n  --background: #FEDE00;\n  --border-radius: 5px;\n  color: #493735;\n  font: normal normal 700 22px/27px Montserrat;\n  text-transform: capitalize;\n}\n.button-wrapper .hide {\n  display: none;\n}\n\n.forgot-password-btn, .timer-block {\n  --background: transparent;\n  width: 74vw;\n  height: 7.39vh;\n  margin: 2vh auto;\n  --color: black;\n  text-align: center;\n}\n\n.forgot-password-btn {\n  text-decoration: underline;\n}\n\n.timer-block p {\n  font-size: 2.4vh;\n}\n\nion-item.ion-invalid.ion-touched {\n  --border-color: var(--ion-color-danger);\n}\n\n.forgot-password-btn {\n  --background: transparent;\n  width: 74vw;\n  height: 7.39vh;\n  margin: 2vh auto;\n  --color: black;\n  text-align: center;\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/confirm-code/confirm-code.component.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,iBAAA;AACF;AAAE;EACE,kBAAA;EACA,kBAAA;AAEJ;;AACA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAEF;;AAAA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,cAAA;AAGF;;AAGA;EACE,kBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;AAAF;AACE;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,oBAAA;EACA,cAAA;EACA,4CAAA;EACA,0BAAA;AACJ;AACE;EACE,aAAA;AACJ;;AAEA;EACE,yBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;AACF;;AACA;EACE,0BAAA;AAEF;;AACE;EACE,gBAAA;AAEJ;;AAEA;EACE,uCAAA;AACF;;AACA;EACE,yBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,0BAAA;AAEF","sourcesContent":[".code-container {\r\n  width: 90%;\r\n  margin: 16vh auto;\r\n  h2 {\r\n    text-align: center;\r\n    margin-bottom: 3vh;\r\n  }\r\n}\r\n.top {\r\n  width: 100%;\r\n  height: 18px;\r\n  background: #FEDE00;\r\n}\r\n.arrow {\r\n  position: absolute;\r\n  top: 4vh;\r\n  left: 5.6vw;\r\n  font-size: 9vw;\r\n  color: #FEDE00;\r\n}\r\n\r\n\r\n\r\n\r\n.text {\r\n  padding: 3vh 9vw 0;\r\n  text-align: center;\r\n  font: normal normal 600 25px/30px Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.button-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  &__btn {\r\n    width: 74vw;\r\n    height: 7.39vh;\r\n    margin-top: 12vh;\r\n    --background: #FEDE00;\r\n    --border-radius: 5px;\r\n    color: #493735;\r\n    font: normal normal 700 22px/27px Montserrat;\r\n    text-transform: capitalize;\r\n  }\r\n  .hide {\r\n    display: none;\r\n  }\r\n}\r\n.forgot-password-btn, .timer-block {\r\n  --background: transparent;\r\n  width: 74vw;\r\n  height: 7.39vh;\r\n  margin: 2vh auto;\r\n  --color: black;\r\n  text-align: center;\r\n}\r\n.forgot-password-btn {\r\n  text-decoration: underline;\r\n}\r\n.timer-block {\r\n  p {\r\n    font-size: 2.4vh;\r\n  }\r\n}\r\n\r\nion-item.ion-invalid.ion-touched {\r\n  --border-color: var(--ion-color-danger);\r\n}\r\n.forgot-password-btn {\r\n  --background: transparent;\r\n  width: 74vw;\r\n  height: 7.39vh;\r\n  margin: 2vh auto;\r\n  --color: black;\r\n  text-align: center;\r\n  text-decoration: underline;\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12150:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/login/confirm-code/confirm-code.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<ion-content>\r\n  <div class=\"top\"></div>\r\n  <ion-icon (click)=\"returnToStartPage()\" class=\"arrow\" name=\"arrow-back-sharp\" ></ion-icon>\r\n  <div class=\"code-container\" >\r\n    <h2>{{ 'emailRegister.verificationCode' | translate }}</h2>\r\n    <ion-item class=\"\" mode=\"ios\">\r\n      <ion-input type=\"text\" name=\"confirmCode\" [value]=\"confirmCode\" (ionChange)=\"getConfirmCode($event.target.value)\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"button-wrapper\">\r\n      <ion-button class=\"button-wrapper__btn\" (click)=\"sendCode()\" [disabled]=\"activeButton\">\r\n        {{ 'emailRegister.sendCode' | translate }}</ion-button>\r\n    </div>\r\n    <div class=\"forgot-password-btn\" *ngIf=\"!disabled;else timerBlock\" (click)=\"resendCode()\">\r\n      <span>{{ 'emailRegister.resendCode' | translate }}</span>\r\n    </div>\r\n    <ng-template #timerBlock>\r\n      <div class=\"timer-block\">\r\n        <p>{{'emailRegister.reResendCode' | translate}}</p>\r\n        <span class=\"timer text\">{{timer}} sec</span>\r\n      </div>\r\n\r\n    </ng-template>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_confirm-code_confirm-code_module_ts.js.map