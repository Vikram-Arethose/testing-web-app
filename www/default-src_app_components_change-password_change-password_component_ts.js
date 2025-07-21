(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_change-password_change-password_component_ts"],{

/***/ 91274:
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 63503);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 15801);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ 25970);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ 6858);









let ChangePasswordComponent = class ChangePasswordComponent {
  constructor(toast, translate, router, http) {
    this.toast = toast;
    this.translate = translate;
    this.router = router;
    this.http = http;
    this.compareError = false;
    this.showSpinner = false;
    this.updatePassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      emailVal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
      passwordVal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]),
      confirmPasswordVal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)])
    });
  }
  ngOnInit() {}
  comparePassword() {
    if (this.updatePassword.controls.passwordVal.value === this.updatePassword.controls.confirmPasswordVal.value) {
      return true;
    } else {
      return false;
    }
  }
  sendNewPassword() {
    this.showSpinner = true;
    const compareRes = this.comparePassword();
    if (compareRes) {
      this.email = this.updatePassword.controls.emailVal.value;
      this.password = this.updatePassword.controls.passwordVal.value;
      this.http.checkEmail(this.email).subscribe(res => {
        if (res) {
          const status = 0;
          localStorage.setItem('changeDataEmail', this.email);
          this.http.sendPassword(this.email, this.password, status).subscribe(response => {
            if (response.apiCode === 'SUCCESS') {
              this.showSpinner = false;
              this.router.navigate(['confirm-code']);
              localStorage.setItem('ConfirmStatusCode', 'true');
            }
          });
        } else {
          this.showSpinner = false;
          const message = this.translate.instant('emailRegister.notConfirmedEmail');
          this.toast.presentAlert(message);
          this.updatePassword.reset();
        }
      });
    } else {
      const message = this.translate.instant('emailRegister.comparePasswordError');
      this.toast.comparePasswordToast(message);
    }
  }
  returnToStartPage() {
    this.router.navigate(['']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
  }];
};
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-change-password',
  template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChangePasswordComponent);


/***/ }),

/***/ 15801:
/*!**************************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top {\n  width: 100%;\n  height: 18px;\n  background: #FEDE00;\n}\n\n.arrow {\n  position: absolute;\n  top: 4vh;\n  left: 5.6vw;\n  font-size: 9vw;\n  color: #FEDE00;\n}\n\n.form-item {\n  padding: 0 2vw;\n  margin: 0 auto;\n}\n.form-item__header {\n  padding: 8vh 11vw 7.14vh;\n}\n.form-item .header {\n  text-align: center;\n}\n.form-item .header__item {\n  font: normal normal 600 25px/30px Montserrat;\n  color: #493735;\n}\n.form-item .header__item_color {\n  color: #0E8DF1;\n}\n.form-item__body {\n  display: flex;\n  justify-content: space-between;\n}\n.form-item__body .items-wrapper {\n  width: 75%;\n}\n.form-item__body .items-wrapper .item {\n  width: 100%;\n}\n.form-item__body .items-wrapper .item:first-of-type {\n  margin: 0 0 10px;\n}\n.form-item__body .item {\n  --border-color: #493735;\n  width: 70%;\n}\n.form-item__body .item__label {\n  --color: #707070;\n}\n.form-item__btn {\n  --background: #FEDE00;\n  margin: 2vh 4vw 0;\n}\n\n.text {\n  padding: 3vh 9vw 0;\n  text-align: center;\n  font: normal normal 600 25px/30px Montserrat;\n  color: #493735;\n}\n\n.button-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.button-wrapper__btn {\n  width: 74vw;\n  height: 7.39vh;\n  margin-top: 12vh;\n  --background: #FEDE00;\n  --border-radius: 5px;\n  color: #493735;\n  font: normal normal 700 22px/27px Montserrat;\n  text-transform: capitalize;\n}\n\n.forgot-password-btn {\n  --background: transparent;\n  width: 74vw;\n  height: 7.39vh;\n  margin: 2vh auto;\n  --color: black;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.login .form {\n  padding: 12vh 20px 0 0;\n}\n.login .form__item:first-of-type {\n  margin-bottom: 20px;\n}\n\nion-item.ion-invalid.ion-touched {\n  --border-color: var(--ion-color-danger);\n}\n\n.spinner {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 10002;\n}", "",{"version":3,"sources":["webpack://./src/app/components/change-password/change-password.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;AACF;AACE;EACE,wBAAA;AACJ;AACE;EACE,kBAAA;AACJ;AAAI;EACE,4CAAA;EAGA,cAAA;AAAN;AACM;EACE,cAAA;AACR;AAIE;EACE,aAAA;EACA,8BAAA;AAFJ;AAII;EACE,UAAA;AAFN;AAGM;EACE,WAAA;AADR;AAEQ;EACE,gBAAA;AAAV;AAII;EAAQ,uBAAA;EACN,UAAA;AADN;AAGM;EACE,gBAAA;AADR;AAKE;EACE,qBAAA;EACA,iBAAA;AAHJ;;AAOA;EACE,kBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AAJF;;AAOA;EACE,aAAA;EACA,uBAAA;AAJF;AAKE;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,oBAAA;EACA,cAAA;EACA,4CAAA;EACA,0BAAA;AAHJ;;AAMA;EACE,yBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,0BAAA;AAHF;;AAOE;EACE,sBAAA;AAJJ;AAKI;EACE,mBAAA;AAHN;;AAQA;EACE,uCAAA;AALF;;AAOA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,cAAA;AAJF","sourcesContent":[".top {\r\n  width: 100%;\r\n  height: 18px;\r\n  background: #FEDE00;\r\n}\r\n\r\n.arrow {\r\n  position: absolute;\r\n  top: 4vh;\r\n  left: 5.6vw;\r\n  font-size: 9vw;\r\n  color: #FEDE00;\r\n}\r\n\r\n.form-item {\r\n  padding: 0 2vw;\r\n  margin: 0 auto;\r\n\r\n  &__header {\r\n    padding: 8vh 11vw 7.14vh;\r\n  }\r\n  .header {\r\n    text-align: center;\r\n    &__item {\r\n      font: normal normal 600 25px/30px Montserrat;\r\n      //-webkit-text-stroke-width: 1px;\r\n      //-webkit-text-stroke-color: #707070;\r\n      color: #493735;\r\n      &_color {\r\n        color: #0E8DF1;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__body {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .items-wrapper {\r\n      width: 75%;\r\n      .item {\r\n        width: 100%;\r\n        &:first-of-type {\r\n          margin: 0 0 10px;\r\n        }\r\n      }\r\n    }\r\n    .item { --border-color: #493735;\r\n      width: 70%;\r\n\r\n      &__label {\r\n        --color: #707070;\r\n      }\r\n    }\r\n  }\r\n  &__btn {\r\n    --background: #FEDE00;\r\n    margin: 2vh 4vw 0;\r\n  }\r\n}\r\n\r\n.text {\r\n  padding: 3vh 9vw 0;\r\n  text-align: center;\r\n  font: normal normal 600 25px/30px Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.button-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  &__btn {\r\n    width: 74vw;\r\n    height: 7.39vh;\r\n    margin-top: 12vh;\r\n    --background: #FEDE00;\r\n    --border-radius: 5px;\r\n    color: #493735;\r\n    font: normal normal 700 22px/27px Montserrat;\r\n    text-transform: capitalize;\r\n  }\r\n}\r\n.forgot-password-btn {\r\n  --background: transparent;\r\n  width: 74vw;\r\n  height: 7.39vh;\r\n  margin: 2vh auto;\r\n  --color: black;\r\n  text-align: center;\r\n  text-decoration: underline;\r\n\r\n}\r\n.login {\r\n  .form {\r\n    padding: 12vh 20px 0 0;\r\n    &__item:first-of-type {\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n}\r\n\r\nion-item.ion-invalid.ion-touched {\r\n  --border-color: var(--ion-color-danger);\r\n}\r\n.spinner {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.2);\r\n  z-index: 10002;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 63503:
/*!**************************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<ion-content>\r\n  <div class=\"spinner\" *ngIf=\"showSpinner\">\r\n    <app-spinner [isLoading]=\"showSpinner\" ></app-spinner>\r\n  </div>\r\n  <div class=\"top\"></div>\r\n  <ion-icon  class=\"arrow\" name=\"arrow-back-sharp\" (click)=\"returnToStartPage()\"></ion-icon>\r\n  <div class=\"login\">\r\n    <form class=\"form\" [formGroup]=\"updatePassword\" >\r\n      <ion-item class=\"form__item\" mode=\"ios\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.email' | translate }}</ion-label>\r\n        <ion-input name=\"email\" appAutofill  inputmode=\"email\" autocomplete=\"email\" formControlName=\"emailVal\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form__item\" mode=\"ios\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.password' | translate }}</ion-label>\r\n        <ion-input type=\"password\" appAutofill name=\"password\" autocomplete=\"current-password\" formControlName=\"passwordVal\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form__item\" mode=\"ios\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.confirmPassword' | translate }}</ion-label>\r\n        <ion-input type=\"password\" name=\"confirmPassword\" formControlName=\"confirmPasswordVal\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"button-wrapper\">\r\n        <ion-button class=\"button-wrapper__btn\" (click)=\"sendNewPassword()\" [disabled]=\"updatePassword.invalid\">\r\n          {{ 'emailRegister.changePassword' | translate }}</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_change-password_change-password_component_ts.js.map