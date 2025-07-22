(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_address-list_address-list_module_ts"],{

/***/ 51628:
/*!*******************************************************************!*\
  !*** ./src/app/components/address-form/address-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressFormComponent": () => (/* binding */ AddressFormComponent)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _address_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-form.component.html?ngResource */ 76386);
/* harmony import */ var _address_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-form.component.scss?ngResource */ 79988);
/* harmony import */ var _address_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_address_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/logger.service */ 51273);










let AddressFormComponent = class AddressFormComponent {
  constructor(formBuilder, modalController, httpServ, logger, navCtrl) {
    this.formBuilder = formBuilder;
    this.modalController = modalController;
    this.httpServ = httpServ;
    this.logger = logger;
    this.navCtrl = navCtrl;
    this.addressForm = this.formBuilder.group({
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[\\+]?[0-9\\s\\-\\(\\)]{10,}$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      addressLine1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      addressLine2: [''],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]{5}$')]],
      country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      isDefault: [false]
    });
  }
  ngOnInit() {
    if (this.address) {
      this.addressForm.patchValue({
        fullName: this.address.full_name,
        phoneNumber: this.address.phone_number,
        email: this.address.email || '',
        addressLine1: this.address.address_line_1,
        addressLine2: this.address.address_line_2 || '',
        city: this.address.city,
        state: this.address.state,
        postalCode: this.address.postal,
        country: this.address.country,
        isDefault: this.address.is_default || false
      });
    }
  }
  onSubmit() {
    if (this.addressForm.valid) {
      const formData = this.addressForm.value;
      if (this.address?.id) {
        formData.id = this.address.id;
      }
      this.modalController.dismiss(formData, 'save');
    } else {
      this.addressForm.markAllAsTouched();
      // Show error message for invalid form
      this.presentErrorToast();
    }
  }
  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }
  // Form field getters for template access
  get fullName() {
    return this.addressForm.get('fullName');
  }
  get phoneNumber() {
    return this.addressForm.get('phoneNumber');
  }
  get email() {
    return this.addressForm.get('email');
  }
  get addressLine1() {
    return this.addressForm.get('addressLine1');
  }
  get addressLine2() {
    return this.addressForm.get('addressLine2');
  }
  get city() {
    return this.addressForm.get('city');
  }
  get state() {
    return this.addressForm.get('state');
  }
  get postalCode() {
    return this.addressForm.get('postalCode');
  }
  get country() {
    return this.addressForm.get('country');
  }
  presentErrorToast() {
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = document.createElement('ion-toast');
      toast.message = 'Please fill in all required fields correctly';
      toast.duration = 2000;
      toast.position = 'bottom';
      toast.color = 'danger';
      document.body.appendChild(toast);
      return toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
  }];
  static #_2 = this.propDecorators = {
    address: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
AddressFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-address-form',
  template: _address_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_address_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AddressFormComponent);


/***/ }),

/***/ 97345:
/*!***********************************************************!*\
  !*** ./src/app/pages/address-list/address-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressListPageModule": () => (/* binding */ AddressListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _address_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-list.page */ 41899);
/* harmony import */ var _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/address-form/address-form.component */ 51628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);









const routes = [{
  path: '',
  component: _address_list_page__WEBPACK_IMPORTED_MODULE_0__.AddressListPage
}];
let AddressListPageModule = class AddressListPageModule {};
AddressListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
  declarations: [_address_list_page__WEBPACK_IMPORTED_MODULE_0__.AddressListPage, _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_1__.AddressFormComponent]
})], AddressListPageModule);


/***/ }),

/***/ 41899:
/*!*********************************************************!*\
  !*** ./src/app/pages/address-list/address-list.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressListPage": () => (/* binding */ AddressListPage)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _address_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-list.page.html?ngResource */ 45769);
/* harmony import */ var _address_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-list.page.scss?ngResource */ 12282);
/* harmony import */ var _address_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_address_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/address-form/address-form.component */ 51628);
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/address.service */ 39688);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/logger.service */ 51273);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/bakery.service */ 24934);












let AddressListPage = class AddressListPage {
  constructor(modalController, addressService, platform, navController, httpServ, logger, loadingController, bakeryServ) {
    // this.addresses$ = this.addressService.getAddresses();
    this.modalController = modalController;
    this.addressService = addressService;
    this.platform = platform;
    this.navController = navController;
    this.httpServ = httpServ;
    this.logger = logger;
    this.loadingController = loadingController;
    this.bakeryServ = bakeryServ;
    this.addresses = [];
  }
  ngOnInit() {
    this.getAddress();
    // Subscribe to platform resume events
    // this.platform.resume.subscribe(() => {
    //   // Refresh data when app resumes
    //   this.addresses$ = this.addressService.getAddresses();
    // });
  }
  // ionViewWillEnter() {
  //   // Refresh data when view enters
  //   this.addresses$ = this.addressService.getAddresses();
  // }
  ionViewDidEnter() {
    // Ensure the page is visible
    const element = document.querySelector('app-address-list');
    if (element) {
      element.classList.remove('ion-page-hidden');
    }
  }
  goBack() {
    this.navController.back();
  }
  getAddress() {
    var _this = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'fetching addresses...',
        spinner: 'circular'
      });
      yield loading.present();
      _this.httpServ.getAddressById().subscribe({
        next: function () {
          var _ref = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            if (res.apiStatus == true && res.apiCode == 200 && res.data) {
              _this.addresses = res.data.deliveryAddresses;
              console.log('this.addresses:', _this.addresses);
              let SelectedAddress = _this.addresses.find(addr => addr.is_default === true);
              // if (SelectedAddress) {
              _this.bakeryServ.updateAddresses(SelectedAddress);
              // }
              // this.logger.log('Address data:', addressData);
              // const defaultAddress = addressData.deliveryAddresses.find(addr => addr.is_default == true);
              // if (defaultAddress) {
              //   this.defaultAddress = {
              //     id: defaultAddress.id,
              //     fullName: defaultAddress.full_name,
              //     phoneNumber: defaultAddress.phone_number,
              //     email: defaultAddress.email,
              //     addressLine1: defaultAddress.address_line1,
              //     addressLine2: defaultAddress.address_line2,
              //     city: defaultAddress.city,
              //     state: defaultAddress.state,
              //     postalCode: defaultAddress.postal_code,
              //     country: defaultAddress.country,
              //     isDefault: true
              //   };
              // }
            } else {
              _this.logger.log('Error fetching address:', res);
              _this.addresses = [];
              _this.bakeryServ.updateAddresses(null);
            }
            yield loading.dismiss();
          });
          return function next(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    })();
  }
  openAddressForm(address) {
    var _this2 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_3__.AddressFormComponent,
        componentProps: {
          address: address ? {
            ...address
          } : undefined
        }
      });
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'save' && data) {
        if (data.id) {
          // this.addressService.updateAddress(data);
          _this2.UpdateAddress(data);
        } else {
          // this.addressService.addAddress(data);
          _this2.createNewAddress(data);
        }
      }
    })();
  }
  createNewAddress(formData) {
    var _this3 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'creating address...',
        spinner: 'circular'
      });
      yield loading.present();
      let Payload = {
        "full_name": formData.fullName,
        "phone_number": formData.phoneNumber,
        "email": formData.email,
        "address_line_1": formData.addressLine1,
        "address_line_2": formData.addressLine2,
        "city": formData.city,
        "state": formData.state,
        "postal": formData.postalCode,
        "country": formData.country,
        "is_default": formData.isDefault
      };
      _this3.httpServ.CreateAddress(Payload).subscribe({
        next: function () {
          var _ref2 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            if (res.apiStatus && res.apiCode === 200) {
              _this3.logger.log('Address updated successfully:', res.message);
              yield _this3.getAddress();
              // this.addressService.setDefaultAddress(address.id!);
              // address.is_default = true;
            } else {
              _this3.logger.error('Error updating address:', res.message);
            }
            // Dismiss loader after operation completes
            yield loading.dismiss();
          });
          return function next(_x2) {
            return _ref2.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref3 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            _this3.logger.error('Error updating address:', err);
            // Dismiss loader if there's an error
            yield loading.dismiss();
          });
          return function error(_x3) {
            return _ref3.apply(this, arguments);
          };
        }()
      });
    })();
  }
  UpdateAddress(address) {
    var _this4 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingController.create({
        message: 'updating address...',
        spinner: 'circular'
      });
      yield loading.present();
      let ID = address.id;
      let payload = {
        "full_name": address.fullName,
        "phone_number": address.phoneNumber,
        "email": address.email,
        "address_line_1": address.addressLine1,
        "address_line_2": address.addressLine2,
        "city": address.city,
        "state": address.state,
        "postal": address.postalCode,
        "country": address.country,
        "is_default": address.isDefault
      };
      _this4.httpServ.updateAdress(payload, ID).subscribe({
        next: function () {
          var _ref4 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            if (res.apiStatus && res.apiCode === 200) {
              _this4.logger.log('Address updated successfully:', res.message);
              yield _this4.getAddress();
              // this.addressService.setDefaultAddress(address.id!);
              // address.is_default = true;
            } else {
              _this4.logger.error('Error updating address:', res.message);
            }
            // Dismiss loader after operation completes
            yield loading.dismiss();
          });
          return function next(_x4) {
            return _ref4.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref5 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            _this4.logger.error('Error updating address:', err);
            // Dismiss loader if there's an error
            yield loading.dismiss();
          });
          return function error(_x5) {
            return _ref5.apply(this, arguments);
          };
        }()
      });
    })();
  }
  setDefault(address) {
    var _this5 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create and present the loader
      const loading = yield _this5.loadingController.create({
        message: 'Setting as default...',
        spinner: 'circular'
      });
      yield loading.present();
      let ID = address.id;
      let payload = {
        "full_name": address.full_name,
        "phone_number": address.phone_number,
        "email": address.email,
        "address_line_1": address.address_line_1,
        "address_line_2": address.address_line_2,
        "city": address.city,
        "state": address.state,
        "postal": address.postal,
        "country": address.country,
        "is_default": true
      };
      _this5.httpServ.updateAdress(payload, ID).subscribe({
        next: function () {
          var _ref6 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            if (res.apiStatus && res.apiCode === 200) {
              _this5.logger.log('Address updated successfully:', res.message);
              yield _this5.getAddress();
              // this.addressService.setDefaultAddress(address.id!);
              // address.is_default = true;
            } else {
              _this5.logger.error('Error updating address:', res.message);
            }
            // Dismiss loader after operation completes
            yield loading.dismiss();
          });
          return function next(_x6) {
            return _ref6.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref7 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            _this5.logger.error('Error updating address:', err);
            // Dismiss loader if there's an error
            yield loading.dismiss();
          });
          return function error(_x7) {
            return _ref7.apply(this, arguments);
          };
        }()
      });
    })();
  }
  deleteAddress(address, event) {
    var _this6 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this6.loadingController.create({
        message: 'deleting address...',
        spinner: 'circular'
      });
      yield loading.present();
      if (address?.id) {
        _this6.httpServ.deleteAddress(address.id).subscribe({
          next: function () {
            var _ref8 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              if (res.apiStatus && res.apiCode === 200) {
                _this6.logger.log('Address deleted successfully:', res.message);
                yield _this6.getAddress();
                // this.addressService.setDefaultAddress(address.id!);
                // address.is_default = true;
              } else {
                _this6.logger.error('Error deleted address:', res.message);
              }
              // Dismiss loader after operation completes
              yield loading.dismiss();
            });
            return function next(_x8) {
              return _ref8.apply(this, arguments);
            };
          }(),
          error: function () {
            var _ref9 = (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
              _this6.logger.error('Error deleting address:', err);
              // Dismiss loader if there's an error
              yield loading.dismiss();
            });
            return function error(_x9) {
              return _ref9.apply(this, arguments);
            };
          }()
        });
      }
      // event.stopPropagation();
      // this.addressService.deleteAddress(address.id!);
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
  }, {
    type: _services_address_service__WEBPACK_IMPORTED_MODULE_4__.AddressService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_7__.BakeryService
  }];
};
AddressListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-address-list',
  template: _address_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_address_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AddressListPage);


/***/ }),

/***/ 79988:
/*!********************************************************************************!*\
  !*** ./src/app/components/address-form/address-form.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\nion-item ion-label {\n  margin-bottom: 8px;\n}\n\nion-textarea {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.ion-padding {\n  padding-top: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/components/address-form/address-form.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,sBAAA;AACF;AACE;EACE,kBAAA;AACJ;;AAGA;EACE,kBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,iBAAA;AAAF","sourcesContent":["ion-item {\r\n  --padding-start: 0;\r\n  --inner-padding-end: 0;\r\n\r\n  ion-label {\r\n    margin-bottom: 8px;\r\n  }\r\n}\r\n\r\nion-textarea {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n}\r\n\r\n.ion-padding {\r\n  padding-top: 16px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12282:
/*!**********************************************************************!*\
  !*** ./src/app/pages/address-list/address-list.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-item {\n  --padding-start: 16px;\n  --padding-end: 8px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\nion-item.selected {\n  --background: var(--ion-color-light);\n}\nion-item.selected h2 {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\nion-item ion-label {\n  margin: 12px 0;\n}\nion-item ion-label h2 {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\nion-item ion-label p {\n  margin: 4px 0;\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\nion-item ion-label p.address-details {\n  color: var(--ion-color-dark);\n}\nion-item ion-label p.location-details {\n  font-weight: 500;\n}\nion-item ion-label p.contact-details {\n  font-size: 13px;\n}\nion-item ion-label p.country {\n  color: var(--ion-color-medium);\n  font-size: 13px;\n}\nion-item ion-badge {\n  font-size: 12px;\n  font-weight: normal;\n  padding: 4px 8px;\n  margin-left: 8px;\n}\nion-item .default-btn {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 8px 0;\n  min-width: 90px;\n}\nion-item .default-btn.button-outline {\n  --border-width: 1px;\n  --border-radius: 4px;\n}\n\nion-item-option {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-item-option ion-icon {\n  font-size: 20px;\n}\n\nion-fab {\n  margin: 16px;\n}\n\n.address-card {\n  margin-bottom: 16px;\n  background: #ffffff;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.address-card ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --background: transparent;\n}\n.address-card .action-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 8px;\n  padding: 8px 16px 12px;\n  border-top: 1px solid var(--ion-color-light);\n}\n.address-card .action-buttons ion-button {\n  margin: 0;\n  height: 36px;\n  font-size: 14px;\n}\n.address-card .action-buttons ion-button ion-icon {\n  margin-right: 4px;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 60px 24px;\n  margin-top: 40px;\n}\n.empty-state .empty-state-icon {\n  font-size: 64px;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 8px;\n}\n.empty-state p {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  line-height: 1.4;\n  margin-bottom: 24px;\n}\n.empty-state .add-address-btn {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/address-list/address-list.page.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;AACF;AACE;EACE,oCAAA;AACJ;AACI;EACE,+BAAA;EACA,gBAAA;AACN;AAGE;EACE,cAAA;AADJ;AAEI;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AAAN;AAGI;EACE,aAAA;EACA,eAAA;EACA,8BAAA;AADN;AAGM;EACE,4BAAA;AADR;AAIM;EACE,gBAAA;AAFR;AAKM;EACE,eAAA;AAHR;AAMM;EACE,8BAAA;EACA,eAAA;AAJR;AASE;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AAPJ;AAUE;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AARF;AAUE;EACE,mBAAA;EACA,oBAAA;AARJ;;AAaA;EACE,qBAAA;EACA,mBAAA;AAVF;AAYE;EACE,eAAA;AAVJ;;AAcA;EACE,YAAA;AAXF;;AAcA;EACE,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AAXF;AAaE;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;AAXJ;AAcE;EACE,aAAA;EACA,2BAAA;EACA,QAAA;EACA,sBAAA;EACA,4CAAA;AAZJ;AAcI;EACE,SAAA;EACA,YAAA;EACA,eAAA;AAZN;AAcM;EACE,iBAAA;AAZR;;AAkBA;EACE,kBAAA;EACA,kBAAA;EACA,gBAAA;AAfF;AAiBE;EACE,eAAA;EACA,8BAAA;EACA,mBAAA;AAfJ;AAkBE;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,kBAAA;AAhBJ;AAmBE;EACE,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;AAjBJ;AAoBE;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;AAlBJ","sourcesContent":["ion-item {\r\n  --padding-start: 16px;\r\n  --padding-end: 8px;\r\n  --padding-top: 12px;\r\n  --padding-bottom: 12px;\r\n\r\n  &.selected {\r\n    --background: var(--ion-color-light);\r\n    \r\n    h2 {\r\n      color: var(--ion-color-primary);\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  ion-label {\r\n    margin: 12px 0;\r\n    h2 {\r\n      font-size: 16px;\r\n      font-weight: 500;\r\n      margin-bottom: 8px;\r\n    }\r\n\r\n    p {\r\n      margin: 4px 0;\r\n      font-size: 14px;\r\n      color: var(--ion-color-medium);\r\n\r\n      &.address-details {\r\n        color: var(--ion-color-dark);\r\n      }\r\n\r\n      &.location-details {\r\n        font-weight: 500;\r\n      }\r\n\r\n      &.contact-details {\r\n        font-size: 13px;\r\n      }\r\n\r\n      &.country {\r\n        color: var(--ion-color-medium);\r\n        font-size: 13px;\r\n      }\r\n    }\r\n  }\r\n\r\n  ion-badge {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    padding: 4px 8px;\r\n    margin-left: 8px;\r\n  }\r\n\r\n  .default-btn {\r\n  --padding-start: 12px;\r\n  --padding-end: 12px;\r\n  margin: 8px 0;\r\n  min-width: 90px;\r\n  \r\n  &.button-outline {\r\n    --border-width: 1px;\r\n    --border-radius: 4px;\r\n  }\r\n}\r\n}\r\n\r\nion-item-option {\r\n  --padding-start: 16px;\r\n  --padding-end: 16px;\r\n  \r\n  ion-icon {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\nion-fab {\r\n  margin: 16px;\r\n}\r\n\r\n.address-card {\r\n  margin-bottom: 16px;\r\n  background: #ffffff;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n\r\n  ion-item {\r\n    --padding-start: 16px;\r\n    --padding-end: 16px;\r\n    --padding-top: 12px;\r\n    --padding-bottom: 12px;\r\n    --background: transparent;\r\n  }\r\n\r\n  .action-buttons {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 8px;\r\n    padding: 8px 16px 12px;\r\n    border-top: 1px solid var(--ion-color-light);\r\n\r\n    ion-button {\r\n      margin: 0;\r\n      height: 36px;\r\n      font-size: 14px;\r\n\r\n      ion-icon {\r\n        margin-right: 4px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.empty-state {\r\n  text-align: center;\r\n  padding: 60px 24px;\r\n  margin-top: 40px;\r\n\r\n  .empty-state-icon {\r\n    font-size: 64px;\r\n    color: var(--ion-color-medium);\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: var(--ion-color-dark);\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  p {\r\n    font-size: 14px;\r\n    color: var(--ion-color-medium);\r\n    line-height: 1.4;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  .add-address-btn {\r\n    --padding-start: 20px;\r\n    --padding-end: 20px;\r\n    --padding-top: 12px;\r\n    --padding-bottom: 12px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 76386:
/*!********************************************************************************!*\
  !*** ./src/app/components/address-form/address-form.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ address ? ('ADDRESS.EDIT_ADDRESS' | translate) : ('ADDRESS.ADD_ADDRESS' | translate) }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onCancel()\">\r\n        {{ 'ADDRESS.Cancel' | translate }}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"addressForm\" (ngSubmit)=\"onSubmit()\">\r\n    <!-- Personal Information -->\r\n    <ion-item-group>\r\n      <ion-item-divider>\r\n        <ion-label>{{ 'ADDRESS.PERSONAL_INFO' | translate }}</ion-label>\r\n      </ion-item-divider>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.FULL_NAME' | translate }} *</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"fullName\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"fullName?.invalid && fullName?.touched\">\r\n          {{ 'ADDRESS.FULL_NAME_REQUIRED' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.PHONE_NUMBER' | translate }} *</ion-label>\r\n        <ion-input type=\"tel\" formControlName=\"phoneNumber\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"phoneNumber?.invalid && phoneNumber?.touched\">\r\n          {{ 'ADDRESS.PHONE_NUMBER_INVALID' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.EMAIL' | translate }}</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"email?.invalid && email?.touched\">\r\n          {{ 'ADDRESS.EMAIL_INVALID' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n    </ion-item-group>\r\n\r\n    <!-- Address Details -->\r\n    <ion-item-group>\r\n      <ion-item-divider>\r\n        <ion-label>{{ 'ADDRESS.ADDRESS_DETAILS' | translate }}</ion-label>\r\n      </ion-item-divider>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.ADDRESS_LINE_1' | translate }} *</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"addressLine1\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"addressLine1?.invalid && addressLine1?.touched\">\r\n          {{ 'ADDRESS.ADDRESS_LINE_1_REQUIRED' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.ADDRESS_LINE_2' | translate }}</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"addressLine2\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.CITY' | translate }} *</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"city\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"city?.invalid && city?.touched\">\r\n          {{ 'ADDRESS.CITY_REQUIRED' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.STATE' | translate }} *</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"state\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"state?.invalid && state?.touched\">\r\n          {{ 'ADDRESS.STATE_REQUIRED' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.POSTAL_CODE' | translate }} *</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"postalCode\" maxlength=\"5\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"postalCode?.invalid && postalCode?.touched\">\r\n          {{ 'ADDRESS.POSTAL_CODE_INVALID' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">{{ 'ADDRESS.COUNTRY' | translate }} *</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"country\"></ion-input>\r\n        <ion-note slot=\"error\" *ngIf=\"country?.invalid && country?.touched\">\r\n          {{ 'ADDRESS.COUNTRY_REQUIRED' | translate }}\r\n        </ion-note>\r\n      </ion-item>\r\n    </ion-item-group>\r\n\r\n    <ion-item>\r\n      <ion-label>{{ 'ADDRESS.SET_AS_DEFAULT' | translate }}</ion-label>\r\n      <ion-toggle formControlName=\"isDefault\"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!addressForm.valid\">\r\n        {{ 'ADDRESS.SAVE' | translate }}\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 45769:
/*!**********************************************************************!*\
  !*** ./src/app/pages/address-list/address-list.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header mode=\"ios\" class=\"ion-no-border\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"goBack()\" [icon]=\"'arrow-back-outline'\" mode=\"md\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'ADDRESS.title' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <div class=\"address-card\" *ngFor=\"let address of addresses\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <h2>{{ address.full_name }}</h2>\r\n          <p class=\"address-details\">\r\n            {{ address.address_line_1 }}\r\n            <span *ngIf=\"address.addressLine2\">, {{ address.address_line_2 }}</span>\r\n          </p>\r\n          <p class=\"location-details\">\r\n            {{ address.city }}, {{ address.state }}, {{ address.postal }}\r\n          </p>\r\n          <p class=\"contact-details\">\r\n            {{ address.phone_number }}\r\n            <span *ngIf=\"address.email\">, {{ address.email }}</span>\r\n          </p>\r\n          <p class=\"country\">{{ address.country }}</p>\r\n        </ion-label>\r\n        <ion-button \r\n          fill=\"outline\" \r\n          size=\"small\"\r\n          slot=\"end\"\r\n          [color]=\"address.is_default ? 'primary' : 'medium'\"\r\n          (click)=\"setDefault(address)\"\r\n          class=\"default-btn\"\r\n        >\r\n          {{ 'ADDRESS.Default' | translate }}\r\n        </ion-button>\r\n      </ion-item>\r\n\r\n      <div class=\"action-buttons\">\r\n        <ion-button \r\n          fill=\"clear\" \r\n          color=\"primary\" \r\n          (click)=\"openAddressForm(address)\"\r\n        >\r\n          <ion-icon name=\"create\" slot=\"start\"></ion-icon>\r\n          {{ 'ADDRESS.edit' | translate }}\r\n        </ion-button>\r\n\r\n        <ion-button \r\n          fill=\"clear\" \r\n          color=\"danger\" \r\n          (click)=\"deleteAddress(address, $event)\"\r\n        >\r\n          <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\r\n          {{ 'ADDRESS.delete' | translate }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"empty-state\" *ngIf=\"addresses.length == 0\">\r\n      <ion-icon name=\"location-outline\" class=\"empty-state-icon\"></ion-icon>\r\n      <h3>{{ 'ADDRESS.noAddresses' | translate }}</h3>\r\n      <!-- <p>{{ 'ADDRESS.noAddressesDescription' | translate }}</p> -->\r\n      <ion-button \r\n        fill=\"solid\" \r\n        color=\"primary\"\r\n        (click)=\"openAddressForm()\"\r\n        class=\"add-address-btn\"\r\n      >\r\n        <ion-icon name=\"add\" slot=\"start\"></ion-icon>\r\n        {{ 'ADDRESS.addNewAddress' | translate }}\r\n      </ion-button>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"addresses.length > 0\">\r\n    <ion-fab-button (click)=\"openAddressForm()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_address-list_address-list_module_ts.js.map