(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'static',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__["DrinkerComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__["DrinkerDetailsComponent"]
    },
    {
        path: 'modifications',
        pathMatch: 'full',
        component: _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_9__["ModificationsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Bar Beer Drinker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\n      </li> \n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>    \n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n      </li> \n      <li class =\"nav-item active\">\n        <a class = \"nav-link\" routerLink=\"/modifications\">Modifications</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-beer-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_11__["BarDetailsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__["BeersComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__["BeerDetailsComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_14__["DrinkerComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_15__["DrinkerDetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_17__["ModificationsComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{ barName }}</h1>\n      <p class=\"bar-details\" *ngIf=\"barDetails\">\n        {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">| </span>{{ barDetails?.state}}\n        <br>\n        {{ barDetails?.phone }}\n      </p>\n    </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"p-3 mb-2 bg-warning text-dark\">\n    <h3 class=\"text-center font-weight-light\">Menu</h3></div>\n    <br>\n    <p-table [value]=\"menu\">\n    <ng-template pTemplate=\"header\">\n    <tr>\n    <th class=\"text-center\">Item</th>\n    <th class=\"text-center\">Menufacturer</th>\n    <th class=\"text-center\">Price</th>\n    </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-item>\n    <tr>\n    <td class=\"text-center\">{{ item.item }}</td>\n    <td class=\"text-center\">{{ item.manf }}</td>\n    <td class=\"text-center\">{{ item.price }}</td>\n    </tr>\n    </ng-template>\n    </p-table>\n   </div>\n   <br>\n\n   <div class=\"container\">\n      <div class=\"p-3 mb-2 bg-warning text-dark\">\n        <h3 class=\"text-center font-weight-light\">Busiest Periods of the Day</h3></div>\n      <br>\n      <p-table [value]=\"busyday\">\n      <ng-template pTemplate=\"header\">\n      <tr>\n      <th class=\"text-center\">Day</th>\n      <th class=\"text-center\">Period</th>\n      </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-busyday>\n      <tr>\n      <td class=\"text-center\">{{ busyday.day | uppercase }}</td>\n      <td class=\"text-center\">{{ busyday.hr }}</td>\n      </tr>\n      </ng-template>\n      </p-table>\n     </div>\n\n     <br>\n\n     <div class=\"container\">\n        <div class=\"p-3 mb-2 bg-warning text-dark\">\n          <h3 class=\"text-center font-weight-light\">TOP 3 Busiest Days of the Week</h3></div>\n        <br>\n        <p-table [value]=\"busyweek\">\n        <ng-template pTemplate=\"header\">\n        <tr>\n        <th class=\"text-center\">Day</th>\n        </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-busyweek>\n        <tr>\n        <td class=\"text-center\">{{ busyweek.day | uppercase }}</td>\n        </tr>\n        </ng-template>\n        </p-table>\n       </div>\n\n     <br>\n\n   <div class=\"container\">\n     <br>\n     <div id=\"bargraph\"></div> \n   </div>\n\n   <br>\n\n   <div class=\"container\">\n    <br>\n    <div id=\"bargraph2\"></div> \n  </div>\n  <br>\n\n  <div class=\"container\">\n    <br>\n    <div id=\"bargraph3\"></div> \n  </div>\n<br>\n<br>\n<div class = \"container\">\n    <form [formGroup] = \"TransactionForm\" (ngSubmit) = \"onSubmit2()\">\n        <div class = \"formGroup\">\n            <div class=\"p-3 mb-2 bg-warning text-dark\">\n          <h3 class=\"text-center font-weight-light\">Generate Transaction in {{barName}}</h3></div>\n        <br>\n          <label>\n              <h6>Payer Name:</h6>\n              <select id = \"transInsertName\" formControlName = \"t_payer\">\n                <option *ngFor= \"let drinkers of drinker_list\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n              </select>\n            </label> \n        <br>\n            <label>\n              <b>Time: </b>\n                <input type = \"text\" formControlName = \"t_time\">\n                (24 hr system. format: hh:mm:ss)\n              </label> \n        <br>\n            <label>\n              <b>Date: </b>\n                <input type = \"text\" formControlName = \"t_date\">\n                (format: yyyy-mm-dd)\n              </label> \n              \n        <br>\n            <label>\n              <b>Day: </b>\n                <input type = \"radio\" formControlName = \"t_days\" value = \"mon\">Monday \n                <input type = \"radio\" formControlName = \"t_days\" value = \"tue\">Tuesday \n                <input type = \"radio\" formControlName = \"t_days\" value = \"wed\">Wednesday \n                <input type = \"radio\" formControlName = \"t_days\" value = \"thur\">Thursday \n                <input type = \"radio\" formControlName = \"t_days\" value = \"fri\">Friday \n                <input type = \"radio\" formControlName = \"t_days\" value = \"sat\">Saturday \n                <input type = \"radio\" formControlName = \"t_days\" value = \"sun\">Sunday \n              </label> \n        <br>\n            <label>\n              <b>Tip: </b>\n                <input type = \"text\" formControlName = \"t_tip\">\n              </label> \n        <br>\n        <label><b>Items: </b>\n        <select multiple class = \"formControl\" formControlName=\"t_itemname\">\n            <option  *ngFor=\"let menu of t_menu\" [ngValue] = \"menu.item\">\n                   {{menu.item}}</option>\n         </select>\n         <p>(*multiple select by ctrl or drag*)</p>\n        </label>\n         <br>\n        <button type = \"submit\" [disabled] = \"!TransactionForm.valid\">Submit</button>\n        <p><b>STATUS: </b>: inserting - {{t_insert}}\n          <br>Pattern 1 validation check: {{t_insert}}\n      </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route, fb, drinkerService) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        this.fb = fb;
        this.drinkerService = drinkerService;
        this.item = '';
        this.t_vaild = false;
        this.TransactionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            t_itemname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            t_payer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            t_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            t_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            t_days: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            t_tip: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server.Please check the browser console.');
                }
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
                _this.t_menu = data;
            });
            barService.getBarLargestSpender(_this.barName).subscribe(function (data) {
                _this.spender = data;
                console.log(data);
                var drinkers = [];
                var totalSpending = [];
                data.forEach(function (spender) {
                    drinkers.push(spender.name);
                    totalSpending.push(spender.totalSpending);
                });
                _this.renderChart(drinkers, totalSpending);
            });
            barService.getBeerMostPop(_this.barName).subscribe(function (data) {
                _this.popBeer = data;
                console.log(data);
                var beers = [];
                var counts = [];
                data.forEach(function (popBeer) {
                    beers.push(popBeer.item);
                    counts.push(popBeer.count);
                });
                _this.renderChart2(beers, counts);
            });
            barService.getManfMostBeer(_this.barName).subscribe(function (data) {
                _this.popManf = data;
                console.log(data);
                var manfs = [];
                var counts = [];
                data.forEach(function (popManf) {
                    manfs.push(popManf.manf);
                    counts.push(popManf.count);
                });
                _this.renderChart3(manfs, counts);
            });
            barService.getBusiestPeriodDay(_this.barName).subscribe(function (data) {
                _this.busyday = data;
            });
            barService.getBusiestPeriodWeek(_this.barName).subscribe(function (data) {
                _this.busyweek = data;
                console.log(data);
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
        this.getDrinkers();
    };
    BarDetailsComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinker_list = data;
        }, function (error) {
            alert('Could not get list of drinkers');
        });
    };
    BarDetailsComponent.prototype.onSubmit2 = function () {
        var _this = this;
        console.log(this.TransactionForm.value);
        console.log(this.TransactionForm.value.t_itemname);
        this.barService.checkVaildTransactionInsert(this.barName, this.TransactionForm.value.t_days, this.TransactionForm.value.t_time).subscribe(function (data) {
            _this.t_vaild = true;
            if (_this.t_vaild == true) {
                _this.barService.insertTransaction1(_this.TransactionForm.value.t_time, _this.TransactionForm.value.t_date, _this.TransactionForm.value.t_days, _this.TransactionForm.value.t_tip).subscribe(function (data) {
                    for (var i in _this.TransactionForm.value.t_itemname) {
                        _this.barService.insertTransaction2(_this.TransactionForm.value.t_itemname[i]).subscribe(function (data) {
                            _this.barService.insertTransaction3(_this.TransactionForm.value.t_payer).subscribe(function (data) {
                                _this.barService.insertTransaction4(_this.barName).subscribe(function (data) {
                                    _this.tid = data[0].id;
                                    console.log(data[0].id);
                                    _this.barService.insertTransaction5(_this.tid).subscribe(function (data) {
                                        _this.getDrinkers();
                                        _this.TransactionForm.reset();
                                        _this.t_insert = true;
                                    });
                                    _this.t_insert = false;
                                });
                            });
                        });
                    }
                });
            }
        }, function (error) {
            _this.t_insert = false;
            alert("Unsatisfy pattern 1! Invalid transaction with given time. Please checking the operation time of the day.");
            _this.TransactionForm.reset();
        });
    };
    BarDetailsComponent.prototype.renderChart = function (drinkers, totalSpending) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'TOP 3 Largest Spenders at ' + this.barName
            },
            xAxis: {
                categories: drinkers,
                title: {
                    text: 'Drinker'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Spending'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                drinkers: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: totalSpending
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart2 = function (beers, counts) {
        Highcharts.chart('bargraph2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Most Popular Beers at ' + this.barName
            },
            subtitle: {
                text: 'Dealing with tied frequent'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Frequents'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                beers: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderChart3 = function (manfs, counts) {
        Highcharts.chart('bargraph3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'TOP Manufacturers (Sell Most Beers in ' + this.barName + ')'
            },
            subtitle: {
                text: 'Dealing with tied frequent'
            },
            xAxis: {
                categories: manfs,
                title: {
                    text: 'Manufacturer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Frequents'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                manfs: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _drinkers_service__WEBPACK_IMPORTED_MODULE_4__["DrinkersService"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getBarLargestSpender = function (bar) {
        return this.http.get('/api/bar_largestSpender/' + bar);
    };
    BarsService.prototype.getBeerMostPop = function (bar) {
        return this.http.get('/api/bar_popBeer/' + bar);
    };
    BarsService.prototype.getManfMostBeer = function (bar) {
        return this.http.get('/api/bar_popManf/' + bar);
    };
    BarsService.prototype.getBusiestPeriodDay = function (bar) {
        return this.http.get('/api/busy_period_day/' + bar);
    };
    BarsService.prototype.getBusiestPeriodWeek = function (bar) {
        return this.http.get('/api/busy_period_week/' + bar);
    };
    BarsService.prototype.getFindBeer = function (beer) {
        return this.http.get('/api/beerfind/' + beer);
    };
    BarsService.prototype.insertItem = function (item, manf, type) {
        return this.http.get('/api/bar/insert_item/' + item + '/' + manf + '/' + type);
    };
    BarsService.prototype.insertTransaction1 = function (time, date, day, tip) {
        return this.http.get('/api/bar/insert_trans1/' + time + '/' + date + '/' + day + '/' + tip);
    };
    BarsService.prototype.insertTransaction2 = function (item) {
        return this.http.get('/api/bar/insert_trans2/' + item);
    };
    BarsService.prototype.insertTransaction3 = function (drinker) {
        return this.http.get('/api/bar/insert_trans3/' + drinker);
    };
    BarsService.prototype.insertTransaction4 = function (bar) {
        return this.http.get('/api/bar/insert_trans4/' + bar);
    };
    BarsService.prototype.checkVaildTransactionInsert = function (bar, day, time) {
        return this.http.get('/api/bar/check_vaild_transaction_insert/' + bar + '/' + day + '/' + time);
    };
    BarsService.prototype.insertTransaction5 = function (tid) {
        return this.http.get('/api/bar/insert_trans5/' + tid);
    };
    BarsService.prototype.insertDrinker = function (name, address, state, phone) {
        return this.http.get('/api/insert_drinker/' + name + '/' + address + '/' + state + '/' + phone);
    };
    BarsService.prototype.insertBar = function (name, license, state, phone, address) {
        return this.http.get('/api/insert_bar/' + name + '/' + license + '/' + state + '/' + phone + '/' + address);
    };
    BarsService.prototype.insertDays = function (name, open, close, day) {
        return this.http.get('/api/insert_day/' + name + '/' + open + '/' + close + '/' + day);
    };
    BarsService.prototype.insertFrequent = function (name, bar) {
        return this.http.get('/api/insert_frequent/' + name + '/' + bar);
    };
    BarsService.prototype.insertOccurs = function (tid, bar) {
        return this.http.get('/api/insert_occurs/' + tid + '/' + bar);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{ beerName }}</h1>\n      <p class=\"beer-details\" *ngIf=\"beerDetails\">\n        <p>Manufacturer: {{ beerDetails?.manf }} </p>\n    </div>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"p-3 mb-2 bg-warning text-dark\">\n      <h3 class=\"text-center font-weight-light\">TOP 3 BARS</h3></div>\n  <p class=\"text-sm-center font-weight-light\">Bars where this beer sells the most.</p>\n  <p-table [value]=\"bar\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th class=\"text-center\">Name</th>\n  <th class=\"text-center\">Count</th>\n  </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-bar>\n  <tr>\n  <td class=\"text-center\">\n    <a routerLink = \"/bars/{{ bar.bar }}\">\n        {{ bar.bar }}\n    </a>\n  </td>\n  <td class=\"text-center\">{{ bar.count }}</td>\n  </tr>\n  </ng-template>\n  </p-table>\n </div>\n <br>\n<br>\n<div class=\"container\">\n  <div class=\"p-3 mb-2 bg-warning text-dark\">\n      <h3 class=\"text-center font-weight-light\">TOP 3 CONSUMERS</h3></div>\n  <p class=\"text-sm-center font-weight-light\">Drinkers who are the biggest consumers of this beer.</p>\n  <p-table [value]=\"consumer\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th class=\"text-center\">Name</th>\n  <th class=\"text-center\">Count</th>\n  </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-consumer>\n  <tr>\n  <td class=\"text-center\">\n    <a routerLink= \"/drinkers/{{consumer.name}}\">\n      {{ consumer.name }}\n    </a>\n    </td>\n  <td class=\"text-center\">{{ consumer.count }}</td>\n  </tr>\n  </ng-template>\n  </p-table>\n </div>\n <br>\n <br>\n <div class=\"container\">\n   <div class=\"p-3 mb-2 bg-warning text-dark\">\n      <h3 class=\"text-center font-weight-light\">TOP 3 TIME DISTRIBUTION</h3></div>\n   \n   <p class=\"text-sm-center font-weight-light \">Time distribution of when this beer sells the most.</p>\n   <p-table [value]=\"time\">\n   <ng-template pTemplate=\"header\">\n   <tr>\n   <th class=\"text-center\">Time Period</th>\n   <th class=\"text-center\">Count</th>\n   </tr>\n   </ng-template>\n   <ng-template pTemplate=\"body\" let-time>\n   <tr>\n   <td class=\"text-center\">{{ time.hr }}</td>\n   <td class=\"text-center\">{{ time.count }}</td>\n   </tr>\n   </ng-template>\n   </p-table>\n  </div>\n  <br>\n\n<p></p>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBiggestConsumer(_this.beerName).subscribe(function (data) {
                _this.consumer = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Consumer not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server.Please check the browser console.');
                }
            });
            beerService.getBarSellMost(_this.beerName).subscribe(function (data) {
                _this.bar = data;
            });
            beerService.getTimeDisBeer(_this.beerName).subscribe(function (data) {
                _this.time = data;
            });
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeer = function (bar) {
        return this.http.get('api/beerfind/' + bar);
    };
    BeersService.prototype.getBeers = function () {
        return this.http.get('api/beer');
    };
    BeersService.prototype.getBiggestConsumer = function (beer) {
        return this.http.get('api/consumer/' + beer);
    };
    BeersService.prototype.getBarSellMost = function (beer) {
        return this.http.get('api/bar_most/' + beer);
    };
    BeersService.prototype.getTimeDisBeer = function (beer) {
        return this.http.get('api/beer_timedist/' + beer);
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Beer Page</h1>\n    <p class=\"lead\"></p>\n  </div>\n</div>\n\n<div class=\"container\">\n\n    <p-table [value]=\"beers\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Manufactuer</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-beer>\n        <tr>\n          <td>\n            <a routerLink=\"/beers/{{ beer.name }}\">\n              {{ beer.name }}\n            </a>\n          </td>\n          <td>{{ beer.manf }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n </div>\n\n <br><br>\n\n<p> </p>\n"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        this.beerService = beerService;
    }
    BeersComponent.prototype.ngOnInit = function () {
        this.getBeers();
    };
    BeersComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Cannot retrieve the list of beers');
        });
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ drinkerName }}</h1>\n    <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n      {{ drinkerDetails?.address }} <span *ngIf=\"drinkerDetails.address && drinkerDetails.state\">| </span>{{ drinkerDetails?.state}}\n      <br>\n      {{ drinkerDetails?.phone }}\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Transactions</h2>\n  <br>\n  <p-table [value]=\"transactions\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n    <th>Transaction ID</th>\n    <th>Date</th>\n    <th>Time</th>\n    <th>Tip</th>\n    <th>Sum</th>\n  </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-transaction>\n  <tr>\n  <td>{{ transaction.tid }}</td>\n  <td>{{ transaction.date }}</td>\n  <td>{{ transaction.time }}</td>\n  <td> {{transaction.tip | currency}} </td>\n  <td>{{ transaction.totalSum | currency }}</td>\n  </tr>\n  </ng-template>\n  </p-table>\n </div>\n <br>\n <br>\n <div class = \"container\">\n   <br>\n   <div id = \"bargraph_ORDERS_MOST\"></div>\n </div>\n <br>\n <br>\n <div class = \"container\">\n    <h2 class=\"text-center font-weight-light\">{{drinkerName}}'s Spendings</h2>\n    <p-tabView orientation = \"right\" >\n        <p-tabPanel header=\"Date\">\n            <form [formGroup] = \"spendingsForm_Date\" (ngSubmit) = \"onSubmitbyDate()\">\n                <label>\n                  Generate Bar Graph\n                </label> \n                 <br>\n                 <label>\n                   On Date:\n                   <input  type = \"text\" formControlName = \"graphDate\" required minlength=\"10\"  maxlength=\"10\">\n                   <p>\n                     (Input Format: YYYY-MM-DD)\n                  </p>\n                 </label>\n                 <br>\n                 <label>\n                  At Bar:\n                   <input type = \"text\" formControlName = \"barName\">\n                 </label>\n                 <br>\n                 <div [hidden]=\"!successD\" id = \"bargraph_Drinker_Spending_Date\" ></div>\n                 <br>\n                 <button type = \"submit\" [disabled] = \"!spendingsForm_Date.valid\">Submit</button>\n                 <br>\n                 <p> GENERATE GRAPH STATUS: {{successD}} </p>\n          </form>\n        </p-tabPanel>\n        <p-tabPanel header=\"Week\">\n            <form [formGroup] = \"spendingsForm_Week\" (ngSubmit) = \"onSubmitbyWeek()\">\n                <label>\n                  Generate Bar Graph\n                </label> \n                 <br>\n                 <label>\n                   On Week Of:\n                   <input  type = \"text\" formControlName = \"graphWeek\" required minlength=\"10\" required maxlength=\"10\">\n                   <p></p>\n                     (Input Format: YYYY-MM-DD)\n                  <p></p>\n                 </label>\n                 <br>\n                 <label>\n                  At Bar:\n                   <input type = \"text\" formControlName = \"barName\">\n                 </label>\n                 <br>\n                 <div [hidden]=\"!successW\" id = \"bargraph_Drinker_Spending_Week\"></div>\n                 <br>\n                 <button type = \"submit\" [disabled] = \"!spendingsForm_Week.valid\">Submit</button>\n                 <br>\n                 <p> GENERATE GRAPH STATUS: {{successW}} </p>\n            </form>\n        </p-tabPanel>\n        <p-tabPanel header=\"Month\">\n          <form [formGroup] = \"spendingsForm_Month\" (ngSubmit) = \"onSubmitbyMonth()\">\n                <label>\n                  Generate Bar Graph\n                </label> \n                 <br>\n                 <label>\n                   On Month:\n                   <input  type = \"text\" formControlName = \"graphMonth\" required minlength=\"7\" required maxlength=\"7\">\n                   <p>\n                     (Input Format: YYYY-MM)\n                  </p>\n                 </label>\n                 <br>\n                 <label>\n                  At Bar:\n                   <input type = \"text\" formControlName = \"barName\">\n                 </label>\n                 <br>\n                 <div [hidden]=\"!successM\" id = \"bargraph_Drinker_Spending_Month\"></div>\n                 <br>\n                 <button type = \"submit\" [disabled] = \"!spendingsForm_Month.valid\">Submit</button>\n                 <br>\n                 <p> GENERATE GRAPH STATUS: {{successM}} </p>\n          </form>\n        </p-tabPanel>\n    </p-tabView>\n </div>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        this.spendingsForm_Date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            graphDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            barName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.spendingsForm_Week = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            graphWeek: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            barName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.spendingsForm_Month = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            graphMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            barName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Drinker not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server.Please check the browser console.');
                }
            });
            drinkerService.getDrinkerTransactions(_this.drinkerName).subscribe(function (data) {
                _this.transactions = data;
            }, function (error) {
                alert('Could not retrieve transactions');
            });
            drinkerService.getMostOrderedBeer(_this.drinkerName).subscribe(function (data) {
                _this.mostOrdered = data;
                console.log(data);
                var item = [];
                var count = [];
                data.forEach(function (mostOrdered) {
                    item.push(mostOrdered.item);
                    count.push(mostOrdered.count);
                });
                _this.render_Most_Ordered_Chart(item, count);
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.render_Most_Ordered_Chart = function (items, count) {
        Highcharts.chart('bargraph_ORDERS_MOST', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'TOP 3 BEERS ORDERED'
            },
            xAxis: {
                categories: items,
                title: {
                    text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Ordered Count'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                items: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: count
                }]
        });
    };
    DrinkerDetailsComponent.prototype.onSubmitbyDate = function () {
        var _this = this;
        console.log(this.spendingsForm_Date.value);
        this.drinkerService.getSpendingsByDate(this.drinkerName, this.spendingsForm_Date.value.graphDate, this.spendingsForm_Date.value.barName).subscribe(function (data) {
            _this.spendingsByDate = data;
            _this.successD = true;
            console.log(data);
            if (data.length == 0) {
                _this.successD = false;
                _this.spendingsForm_Date.reset();
                return console.log("No Found Spendings for Given Date and Bar");
            }
            var bar = [];
            var spending = [];
            data.forEach(function (spendingsByDate) {
                spending.push(spendingsByDate.spending);
                bar.push(spendingsByDate.bar);
            });
            _this.render_Drinker_Spending_Chart_Date(bar, spending);
        });
        this.successD = false;
    };
    DrinkerDetailsComponent.prototype.onSubmitbyWeek = function () {
        var _this = this;
        console.log(this.spendingsForm_Week.value);
        this.drinkerService.getSpendingsByWeek(this.drinkerName, this.spendingsForm_Week.value.graphWeek, this.spendingsForm_Week.value.barName).subscribe(function (data) {
            _this.spendingsByWeek = data;
            _this.successW = true;
            console.log(data);
            if (data.length == 0) {
                _this.successW = false;
                _this.spendingsForm_Date.reset();
                return console.log("No Found Spendings for Given Week and Bar");
            }
            var day = [];
            var spending = [];
            data.forEach(function (spendingsByWeek) {
                spending.push(spendingsByWeek.spending);
                day.push(spendingsByWeek.date);
            });
            _this.render_Drinker_Spending_Chart_Week(day, spending);
            _this.successM = true;
        });
        this.successW = false;
    };
    DrinkerDetailsComponent.prototype.onSubmitbyMonth = function () {
        var _this = this;
        console.log(this.spendingsForm_Month.value);
        this.drinkerService.getSpendingsByMonth(this.drinkerName, this.spendingsForm_Month.value.graphMonth, this.spendingsForm_Month.value.barName).subscribe(function (data) {
            _this.spendingsByMonth = data;
            _this.successM = true;
            console.log(data);
            if (data.length == 0) {
                _this.successM = false;
                _this.spendingsForm_Date.reset();
                return console.log("No Found Spendings for Given Month and Bar");
            }
            var day = [];
            var spending = [];
            data.forEach(function (spendingsByMonth) {
                spending.push(spendingsByMonth.spending);
                day.push(spendingsByMonth.date);
            });
            _this.render_Drinker_Spending_Chart_Month(day, spending);
        });
        this.successM = false;
    };
    DrinkerDetailsComponent.prototype.render_Drinker_Spending_Chart_Date = function (bars, spendings) {
        Highcharts.chart('bargraph_Drinker_Spending_Date', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'SPENDINGS on ' + this.spendingsForm_Date.value.graphDate
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Spendings'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                items: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: spendings
                }]
        });
    };
    DrinkerDetailsComponent.prototype.render_Drinker_Spending_Chart_Week = function (dates, spendings) {
        Highcharts.chart('bargraph_Drinker_Spending_Week', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'SPENDINGS WEEK OF ' + this.spendingsForm_Week.value.graphWeek
            },
            xAxis: {
                categories: dates,
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Spendings'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                items: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: spendings
                }]
        });
    };
    DrinkerDetailsComponent.prototype.render_Drinker_Spending_Chart_Month = function (dates, spendings) {
        Highcharts.chart('bargraph_Drinker_Spending_Month', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'SPENDINGS for ' + this.spendingsForm_Month.value.graphMonth
            },
            xAxis: {
                categories: dates,
                title: {
                    text: 'DATE'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Spendings'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                items: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    color: '#FFC400'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: spendings
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinkersFromLikes = function () {
        return this.http.get('/api/drinker/likes');
    };
    DrinkersService.prototype.getDrinkersFromFreqs = function () {
        return this.http.get('/api/drinker/frequents');
    };
    DrinkersService.prototype.getDrinker = function (drinker) {
        return this.http.get('/api/drinker/' + drinker);
    };
    DrinkersService.prototype.getDrinkerTransactions = function (drinker) {
        return this.http.get('/api/transactions/' + drinker);
    };
    DrinkersService.prototype.getMostOrderedBeer = function (drinker) {
        return this.http.get('/api/most_ordered_beer/' + drinker);
    };
    DrinkersService.prototype.getSpendingsByDate = function (drinker, date, bar) {
        return this.http.get('/api/drinker_spendings_date/' + drinker + '/' + bar + '/' + date);
    };
    DrinkersService.prototype.getSpendingsByWeek = function (drinker, week, bar) {
        return this.http.get('/api/drinker_spendings_week/' + drinker + '/' + bar + '/' + week);
    };
    DrinkersService.prototype.getSpendingsByMonth = function (drinker, month, bar) {
        return this.http.get('/api/drinker_spendings_month/' + drinker + '/' + bar + '/' + month);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinkers Page</h1>\n    <p class=\"lead\"></p>\n  </div>\n</div>\n\n<div class=\"container\">\n\n    <p-table [value]=\"drinkers\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Address</th>\n          <th>State</th>\n          <th>Phone</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-drinker>\n        <tr>\n          <td>\n            <a routerLink=\"/drinkers/{{ drinker.name }}\">\n              {{ drinker.name }}\n            </a>\n          </td>\n          <td>{{ drinker.address }}</td>\n          <td>{{ drinker.state }}</td>\n          <td>{{ drinker.phone }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n </div>\n\n <br><br>"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerComponent", function() { return DrinkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerComponent = /** @class */ (function () {
    function DrinkerComponent(drinkerService) {
        this.drinkerService = drinkerService;
    }
    DrinkerComponent.prototype.ngOnInit = function () {
        this.getDrinkers();
    };
    DrinkerComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of drinkers');
        });
    };
    DrinkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkerComponent);
    return DrinkerComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outer \r\n{\r\n    width: 100%;\r\n    text-align : center;\r\n}\r\n.inner\r\n{\r\n    display: inline-block;\r\n    width:130px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLG9CQUFvQjtDQUN2QjtBQUNEOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdXRlciBcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG59XHJcbi5pbm5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDoxMzBweDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Home Page</h1>\n      <h2 class=\"display-4\" > Welcome to our Bar Beer Drinker Webpage</h2>\n      <p class=\"lead\"></p>\n    </div>\n</div>\n\n<div class = \"container\">\n  <div id =\"outer\">\n    <h5>Click to View</h5>\n    <div class = \"inner\"><button type = \"button\">\n        <a routerLink =\"/bars/\">\n          Bars\n        </a></button> \n    </div>\n    <div class = \"inner\"><button type = \"button\">\n        <a routerLink =\"/beers/\">\n           Beers\n        </a></button> \n    </div>\n    <div class = \"inner\"><button type = \"button\">\n          <a routerLink =\"/drinkers/\">\n            Drinkers\n          </a></button> \n    </div>\n    <div class = \"inner\"><button type =\"button\">\n          <a routerLink =\"/modifications/\">\n            Modifications\n          </a></button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modifications.service.ts":
/*!******************************************!*\
  !*** ./src/app/modifications.service.ts ***!
  \******************************************/
/*! exports provided: ModificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsService", function() { return ModificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationsService = /** @class */ (function () {
    function ModificationsService(http) {
        this.http = http;
    }
    ModificationsService.prototype.updateDrinker = function (name, column, value) {
        return this.http.get('/api/modifications/update_drinker/' + name + '/' + column + '/' + value);
    };
    ModificationsService.prototype.insertDrinker = function (name, address, state, phone) {
        return this.http.get('/api/modifications/insert_drinker/' + name + '/' + address + '/' + state + '/' + phone);
    };
    ModificationsService.prototype.updateBar = function (name, column, value) {
        return this.http.get('/api/modifications/update_bar/' + name + '/' + column + '/' + value);
    };
    ModificationsService.prototype.runAnyQuery = function (query) {
        return this.http.get('/api/any_query/' + query);
    };
    ModificationsService.prototype.insertBar = function (name, license, state, phone, address) {
        return this.http.get('/api/insert_bar/' + name + '/' + license + '/' + state + '/' + phone + '/' + address);
    };
    ModificationsService.prototype.updateFrequent = function (name, oldbar, newbar) {
        return this.http.get('/api/update_frequent/' + name + '/' + oldbar + '/' + newbar);
    };
    ModificationsService.prototype.insertFrequent = function (name, bar) {
        return this.http.get('/api/insert_frequent/' + name + '/' + bar);
    };
    ModificationsService.prototype.insertLikes = function (name, beer) {
        return this.http.get('/api/insert_likes/' + name + '/' + beer);
    };
    ModificationsService.prototype.insertOccurs = function (tid, bar) {
        return this.http.get('/api/insert_occurs/' + tid + '/' + bar);
    };
    ModificationsService.prototype.getItems = function () {
        return this.http.get('/api/item');
    };
    ModificationsService.prototype.updateItem = function (name, column, value) {
        return this.http.get('/api/modifications/update_item/' + name + '/' + column + '/' + value);
    };
    ModificationsService.prototype.updateLike = function (name, oldval, newval) {
        return this.http.get('/api/modifications/update_like/' + name + '/' + oldval + '/' + newval);
    };
    ModificationsService.prototype.insertItem = function (item, manf, type) {
        return this.http.get('/api/bar/insert_item/' + item + '/' + manf + '/' + type);
    };
    ModificationsService.prototype.deleteDrinker = function (name) {
        return this.http.get('/api/delete_drinker/' + name);
    };
    ModificationsService.prototype.deleteBar = function (name) {
        return this.http.get('/api/delete_bar/' + name);
    };
    ModificationsService.prototype.deleteFrequent = function (bar, name) {
        return this.http.get('/api/delete_frequent/' + bar + '/' + name);
    };
    ModificationsService.prototype.insertSells = function (bar, item, price) {
        return this.http.get('/api/insert_sells/' + bar + '/' + item + '/' + price);
    };
    ModificationsService.prototype.verifyPattern3_1 = function (bar, beer) {
        return this.http.get('/api/verify_pattern3_1/' + bar + '/' + beer);
    };
    ModificationsService.prototype.verifyPattern3_2 = function (bar, beer, price) {
        return this.http.get('/api/verify_pattern3_2/' + bar + '/' + beer + '/' + price);
    };
    ModificationsService.prototype.verifyPattern3_0 = function (item) {
        return this.http.get('/api/verify_pattern3_0/' + item);
    };
    ModificationsService.prototype.insertHas = function (tid, item) {
        return this.http.get('/api/insert_has/' + tid + '/' + item);
    };
    ModificationsService.prototype.deleteItem = function (name) {
        return this.http.get('/api/delete_item/' + name);
    };
    ModificationsService.prototype.deleteSell = function (bar, item) {
        return this.http.get('/api/delete_sells/' + bar + '/' + item);
    };
    ModificationsService.prototype.deleteLike = function (name, beer) {
        return this.http.get('/api/delete_like/' + name + '/' + beer);
    };
    ModificationsService.prototype.deleteOccur = function (tid, bar) {
        return this.http.get('/api/delete_occur/' + tid + '/' + bar);
    };
    ModificationsService.prototype.deleteHas_valid = function (tid, item) {
        return this.http.get('/api/delete_has_valid/' + tid + '/' + item);
    };
    ModificationsService.prototype.deleteHas_lastItem = function (tid) {
        return this.http.get('/api/delete_has_lastItem/' + tid);
    };
    ModificationsService.prototype.deleteHas = function (tid, item) {
        return this.http.get('/api/delete_has/' + tid + '/' + item);
    };
    ModificationsService.prototype.deleteDay = function (bar, day) {
        return this.http.get('/api/delete_day/' + bar + '/' + day);
    };
    ModificationsService.prototype.deletePay = function (tid, name) {
        return this.http.get('/api/delete_pays/' + tid + '/' + name);
    };
    ModificationsService.prototype.updatePay = function (tid, oldpayer, newpayer) {
        return this.http.get('/api/update_pays/' + tid + '/' + oldpayer + '/' + newpayer);
    };
    ModificationsService.prototype.updateHas = function (tid, olditem, newitem) {
        return this.http.get('/api/update_has/' + tid + '/' + olditem + '/' + newitem);
    };
    ModificationsService.prototype.insertPay = function (tid, name) {
        return this.http.get('/api/insert_pay/' + tid + '/' + name);
    };
    ModificationsService.prototype.insertDays = function (name, open, close, day) {
        return this.http.get('/api/insert_day/' + name + '/' + open + '/' + close + '/' + day);
    };
    ModificationsService.prototype.deleteTrans = function (tid) {
        return this.http.get('/api/delete_trans/' + tid);
    };
    ModificationsService.prototype.update_days_bar = function (bar, day, newVal) {
        return this.http.get('/api/update_day_bar/' + bar + '/' + day + '/' + newVal);
    };
    ModificationsService.prototype.update_days_pattern1validation_open = function (bar, day, openTime) {
        return this.http.get('/api/update_day_openingTime/' + bar + '/' + day + '/' + openTime);
    };
    ModificationsService.prototype.update_days_pattern1validation_close = function (bar, day, closeTime) {
        return this.http.get('/api/update_day_closingTime/' + bar + '/' + day + '/' + closeTime);
    };
    ModificationsService.prototype.update_days_daycolumn = function (bar, day, newVal) {
        return this.http.get('/api/update_days_daycolumn/' + bar + '/' + day + '/' + newVal);
    };
    ModificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationsService);
    return ModificationsService;
}());



/***/ }),

/***/ "./src/app/modifications/modifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modifications/modifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    width: 100%;\r\n    margin: 20px auto;\r\n    table-layout:fixed;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\nth, td{\r\n    padding: 8px;\r\n    vertical-align: top;\r\n    border: 1px solid #ddd;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZpY2F0aW9ucy9tb2RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7Q0FFcEIiLCJmaWxlIjoic3JjL2FwcC9tb2RpZmljYXRpb25zL21vZGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRhYmxlLWxheW91dDpmaXhlZDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG50aCwgdGR7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modifications/modifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/modifications/modifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Modifications Page</h1>\n    <p class=\"lead\"></p>\n  </div>\n</div>\n\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Drinkers Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE </h5> \n          <label>SELECT DRINKER TO UPDATE</label>\n          <form [formGroup] = \"drinkerUpdateForm\" (ngSubmit) =\"onSubmitDrinkerUpdate()\">\n            <label>\n              <h6>Name:</h6>\n              <select id = \"drinkerUpdate\" formControlName = \"drinkerName\">\n                  <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n              </select>\n            </label>\n            <br>\n            <label>\n                <h6>Update Attribute: </h6>\n                  <input type = \"radio\" formControlName = \"drinkerColumn\" value = \"name\">Name \n                  <input type = \"radio\" formControlName = \"drinkerColumn\" value = \"address\">Address \n                  <input type = \"radio\" formControlName = \"drinkerColumn\" value = \"state\">State \n                  <input type = \"radio\" formControlName = \"drinkerColumn\" value = \"phone\">Phone \n            </label> \n            <br>\n            <label>\n              <h6>New Value:</h6>\n              <input type = \"text\" formControlName = \"drinkerupdateValue\">\n            </label>\n            <br>\n              <div>\n                <button type = \"submit\" [disabled] =\"!drinkerUpdateForm.valid\">Submit</button>\n              </div>\n              <p>status for Update: {{drinkerUpdateStatus}}</p>\n            </form>\n        </td>\n        <td >\n          <h5>INSERT </h5> \n          <label>INPUT DRINKER INFO</label>\n          <form [formGroup] = \"insertDrinkerForm\" (ngSubmit) = \"onSubmit4()\">\n               <label>\n                <h6>Name:</h6>\n                 <input type = \"text\" formControlName = \"drinkerName\" minlength=\"1\">\n               </label>\n               <br>\n               <label>\n                <h6>Address:</h6>\n                 <input type = \"text\" formControlName = \"drinkerAddress\" minlength=\"1\">\n               </label>\n               <br>\n               <label>\n                <h6>State:</h6>\n               <p-dropdown [options] = \"list_states\" formControlName = \"drinkerState\"></p-dropdown>\n              </label>\n              <br>\n               <label>\n                 <h6>Phone</h6>\n                   <input type = \"text\" formControlName = \"drinkerPhone\" minlength=\"12\" maxlength=\"12\">\n                   <br>\n                   (format xxx-xxx-xxxx)\n                 </label>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!insertDrinkerForm.valid\">Submit</button>\n              <p>status: inserting - {{drinker_insert}}\n            </form>\n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <label>SELECT THE DRINKER TO DELETE</label>\n          <form [formGroup] = \"deleteDrinkerForm\" (ngSubmit) = \"delete_drinker()\">\n               <label>\n                 <h6>Drinker Name: </h6>\n                 <select id = \"drinkerDelete\" formControlName = \"D_drinkerName\">\n                    <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                </select>\n               </label>\n               <br>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!deleteDrinkerForm.valid\">Submit</button>\n              <p>status: deleting - {{drinker_delete}}\n          </form>\n        </td>\n      </tr>\n    </table>\n</div>\n<br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Bars Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE </h5>\n          <label>SELECT BAR TO UPDATE</label>\n          <b></b>\n          <form [formGroup] = \"barUpdateForm\" (ngSubmit) =\"onSubmitBarUpdate()\">\n            <label>\n              <h6>Name: </h6>\n              <select id = \"barUpdate\" formControlName = \"barName\">\n                <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n              </select>\n            </label>\n            <br>\n            <label>\n                <h6>Update Attribute: </h6>\n                  <input type = \"radio\" formControlName = \"barColumn\" value = \"name\">Name \n                  <input type = \"radio\" formControlName = \"barColumn\" value = \"license\">License \n                  <input type = \"radio\" formControlName = \"barColumn\" value = \"state\">State \n                  <input type = \"radio\" formControlName = \"barColumn\" value = \"phone\">Phone\n                  <input type = \"radio\" formControlName = \"barColumn\" value = \"address\">Address\n            </label> \n            <br>\n            <label>\n              <h6>New Value: </h6>\n              <input type = \"text\" formControlName = \"barupdateValue\">\n            </label>\n            <br>\n              <div>\n                <button type = \"submit\" [disabled] =\"!barUpdateForm.valid\">Submit</button>\n              </div>\n              <p>status for Update: {{barUpdateStatus}}</p>\n            </form>\n        </td>\n        <td>\n            <h5>INSERT</h5>\n            <label>INPUT BAR INFO</label>\n            <form [formGroup] = \"insertBarForm\" (ngSubmit) = \"onSubmit5()\">\n                 <label>\n                  <h6>Name: </h6>\n                   <input type = \"text\" formControlName = \"barName\">\n                 </label>\n                 <br>\n                 <label>\n                  <h6>License Number: </h6>\n                   <input type = \"number\" formControlName = \"barLicense\" required minlength=\"4\" maxlength=\"5\" >\n                   <br>\n                   (4 or 5 digit number required)\n                 </label>\n                 <br>\n                 <label>\n                  <h6>State: </h6>\n                  <p-dropdown [options] = \"list_states\" formControlName = \"barState\"></p-dropdown>\n                </label>\n                 <br>\n                 <label>\n                    <h6>Phone: </h6>\n                     <input type = \"text\" formControlName = \"barPhone\" minlength=\"12\" maxlength=\"12\">\n                     <br>\n                     (format xxx-xxx-xxxx)\n                   </label>\n                   <br>\n                   <label>\n                      <h6>Address: </h6>\n                       <input type = \"text\" formControlName = \"barAddress\">\n                     </label>\n                 <p></p>\n                 <button type = \"submit\" [disabled] = \"!insertBarForm.valid\">Submit</button>\n                <p>status: inserting - {{bar_insert}}\n            \n              </form>\n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deleteBarForm\" (ngSubmit) = \"delete_Bar()\">\n              <label>\n                SELECT BAR TO DELETE\n              </label> \n               <label>\n                 <h6>Bar Name:</h6>\n                 <select id = \"barDelete\" formControlName = \"deleteBar\">\n                    <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                  </select>\n               </label>\n              <br>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!deleteBarForm.valid\">Submit</button>\n              <p>status: deleting - {{bar_delete}}\n            </form>\n        </td>\n      </tr>\n    </table>\n</div>\n<br>\n<div class = \"container\">\n  <h2 class=\"text-center font-weight-dark\">Items Table Modifications</h2>\n  <br>\n  <table>\n    <tr>\n      <td>\n        <h5>UPDATE</h5>\n        <label>SELECT ITEM TO UPDATE</label>\n          <form [formGroup] = \"updateItemForm\" (ngSubmit) =\"onSubmitItemUpdate()\">\n              <label>\n                <h6>Item Name:</h6>\n                <select id = \"itemUpdateName\" formControlName = \"itemName\">\n                  <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                </select>\n              </label>\n              <br>\n              <label>\n                <h6>Update Attribute: </h6>\n                  <input type = \"radio\" formControlName = \"itemColumn\" value = \"name\">Name \n                  <input type = \"radio\" formControlName = \"itemColumn\" value = \"manf\">Manufacturer \n              </label> \n              <br>\n              <label>\n                <h6>New Value:</h6>\n                <input type = \"text\" formControlName = \"itemUpdateValue\">\n              </label>\n              <br>\n              <div>\n                <button type = \"submit\" [disabled] =\"!updateItemForm.valid\">Submit</button>\n              </div>\n              <p>status for Update: {{item_updateStatus}}</p>\n          </form>\n      </td>\n      <td>\n        <h5>INSERT</h5>\n        <label>INPUT ITEM INFO</label>\n        <form [formGroup] = \"insertItemForm\" (ngSubmit) = \"onSubmitItemInsert()\">\n           <label>\n             <h6>Name: </h6>\n             <input type = \"text\" formControlName = \"itemName\">\n           </label>\n           <br>\n           <label>\n            <h6>Manufacturer: </h6>\n             <input type = \"text\" formControlName = \"itemManf\">\n           </label>\n           <br>\n           <label>\n            <h6>Type: </h6>\n             <input type = \"radio\" formControlName = \"itemType\" value = \"Beer\">Beer\n             <input type = \"radio\" formControlName = \"itemType\" value = \"SoftDrink\">Soft Drink\n             <input type = \"radio\" formControlName = \"itemType\" value = \"Food\">Food\n           </label>\n           <p></p>\n           <button type = \"submit\" [disabled] = \"!insertItemForm.valid\">Submit</button>\n          <p>status: inserting - {{insertItemStatus}}\n        </form>\n        <br>\n      </td>\n      <td>\n        <h5>DELETE</h5>\n        <form [formGroup] = \"deleteItemForm\" (ngSubmit) = \"delete_item()\">\n          <label>SELECT ITEM TO DELETE</label> \n          <br>\n          <label> \n            <h6>Item Name:</h6>\n            <select id = \"itemDeleteName\" formControlName = \"D_itemname\">\n                <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n            </select>\n          </label>\n           <p></p>\n           <button type = \"submit\" [disabled] = \"!deleteItemForm.valid\">Submit</button>\n          <p>status: deleting - {{item_delete}}\n        </form>\n      </td> \n    </tr>\n  </table>\n</div>\n<br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Sells Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE</h5>\n        </td>\n        <td>\n            <h5>INSERT</h5>\n            <form [formGroup] = \"insertSellsform\" (ngSubmit) = \"onSubmit10()\">\n                <label>\n                  INPUT SELLS INFO\n                </label> \n                 <br>\n                 <label>\n                    <h6>Bar Name: </h6>\n                    <select id = \"sellsInsertBar\" formControlName = \"sellBar\">\n                      <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                    </select>\n                </label>\n                 <br>\n                 <label>\n                    <h6>Item Name:</h6>\n                    <select id = \"sellsInsertItem\" formControlName = \"sellItem\">\n                      <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                    </select>\n                  </label>\n                <br>\n                <label>\n                    <h6>Price: </h6>\n                     <input type = \"number\" formControlName = \"sellPrice\" minlength=\"1\" >\n                   </label>\n                  <br>\n                 <p></p>\n                 <button type = \"submit\" [disabled] = \"!insertSellsform.valid\">Submit</button>\n                <p>status: inserting - {{sell_insert}}\n                <br>Pattern 3 validation check: {{sell_insert}}\n              </form>\n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deleteSellForm\" (ngSubmit) = \"delete_sell()\">\n            <label>SELECT BAR-ITEM TO DELETE</label> \n            <br>\n             <label>\n               <h6>Bar: </h6>\n                <select id = \"sellsDeletetBar\" formControlName = \"D_sellBar\">\n                  <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                </select>\n              </label>\n              <br>\n              <label>\n                <h6>Item Name:</h6>\n                <select id = \"sellsDeleteItem\" formControlName = \"D_sellItem\">\n                  <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                </select>\n              </label>\n             <p></p>\n             <button type = \"submit\" [disabled] = \"!deleteSellForm.valid\">Submit</button>\n            <p>status: deleting - {{sell_delete}}\n          </form>\n        </td>\n      </tr>\n    </table>\n  </div>\n<br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Frequents Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE </h5>\n          <label>SELECT DRINKER-BAR TO UPDATE</label>\n          <form [formGroup] = \"updateFreqsForm\" (ngSubmit) =\"onSubmitFreqsUpdate()\">\n              <label>\n                <h6>Drinker Name:</h6>\n                <select id = \"freqUpdateName\" formControlName = \"freqDrinker\">\n                  <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                </select>\n              </label> \n              <br>\n              <label>Update the Bar Frequeted</label>\n              <br>\n              <label>\n                <h6>Old Value: </h6>\n                <select id =\"freqUpdateBar1\" formControlName =\"freqOldBar\">\n\t\t\t            <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                </select>\n            </label>\n            <br>\n            <label>\n                <h6>New Value: </h6>\n                <select id =\"freqUpdateBar1\" formControlName =\"freqNewBar\">\n                    <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                </select>\n            </label>\n            <br>\n              <div>\n                <button type = \"submit\" [disabled] =\"!updateFreqsForm.valid\">Submit</button>\n              </div>\n              <p>status for Update: {{freqs_updateStatus}}</p>\n\t\t          <br>Pattern 2 Verfication check : {{pattern2_bool}}\n          </form>\n \n        </td>\n        <td>\n            <h5>INSERT </h5> \n            <form [formGroup] = \"insertFreqForm\" (ngSubmit) = \"onSubmit7()\">\n                <label>\n                  INPUT FREQUENTS INFO\n                </label> \n                 <br>\n                 <label>\n                    <h6>Name: </h6>\n                    <select id = \"freqInsertName\" formControlName = \"freqName\">\n                        <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                    </select>\n                  </label>\n                 <br>\n                 <label>\n                   <h6>Bar Name: </h6>\n                    <select id = \"freqInsertBar\" formControlName = \"freqBar\">\n                      <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                    </select>\n                 </label>\n                <br>\n                 <p></p>\n                 <button type = \"submit\" [disabled] = \"!insertFreqForm.valid\">Submit</button>\n                <p>status: inserting - {{freq_insert}}\n                <br>Pattern 2 Verfication check : {{pattern2_bool}}\n              </form>\n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deleteFreqForm\" (ngSubmit) = \"delete_freq()\">\n              <label>SELECT FREQUENTS INFO TO DELETE</label>\n               <label>\n                  <h6>Drinker Name: </h6>\n                  <select id=\"freqDeleteName\" formControlName =\"D_freqName\">\n                    <option *ngFor= \"let drinkers of drinkerFreqs_list\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                  </select>\n                </label>\n               <br>\n               <label>\n                <h6>Bar Name: </h6>\n                <select id=\"freqDeleteBar\" formControlName =\"D_freqBar\">\n                  <option *ngFor =\"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>}\n                </select>\n               </label>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!deleteFreqForm.valid\">Submit</button>\n              <p>status: deleting - {{freq_delete}}\n            </form>\n        </td>\n      </tr>\n    </table>\n</div>\n<br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Likes Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE</h5> \n          <label>SELECT DRINKER TO UPDATE</label>\n          <form [formGroup] = \"updateLikeForm\" (ngSubmit) =\"onSubmitLikeUpdate()\">\n              <label>\n                <h6>Drinker Name:</h6>\n                <select id = \"likeUpdateName\" formControlName = \"likeDrinker\">\n                  <option *ngFor= \"let drinkers of drinkerLikes_list\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                </select>\n              </label> \n              <br>\n              <label>Update the Beer Liked </label>\n              <br>\n              <label>\n                <h6>Old Value: </h6>\n                <input type = \"text\" formControlName = \"likeOldVal\">\n            </label>\n            <br>\n            <label>\n                <h6>New Value: </h6>\n                <input type = \"text\" formControlName = \"likeNewVal\">\n            </label>\n            <br>\n              <div>\n                <button type = \"submit\" [disabled] =\"!updateLikeForm.valid\">Submit</button>\n              </div>\n              <p>status for Update: {{like_updateStatus}}</p>\n          </form>\n        </td>\n        <td>\n            <h5>INSERT</h5>\n            <form [formGroup] = \"insertLikeForm\" (ngSubmit) = \"onSubmit9()\">\n                <label>\n                  SELECT LIKES INFO\n                </label> \n                 <br>\n                 <label>\n                   <h6>Drinker Name: </h6>\n                   <select id = \"likesInsert\" formControlName =\"likeName\">\n                     <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                   </select>\n                 </label>\n                 <br>\n                 <label>\n                  <h6>Beer Name: </h6>\n                  <select id =\"like_insert\" formControlName = \"likeBeer\">\n                    <option *ngFor = \"let beers of beerName_UPDATE\" [ngValue]= \"beers.name\">{{beers.name}}</option>\n                  </select>\n                 </label>\n                <br>\n                 <p></p>\n                 <button type = \"submit\" [disabled] = \"!insertLikeForm.valid\">Submit</button>\n                <p>status: inserting - {{like_insert}}\n            </form>\n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deleteLikeForm\" (ngSubmit) = \"delete_like()\">\n            <label>SELECT LIKES INFO TO DELETE</label> \n            <br>\n             <label>\n                <h6>Drinker: </h6>\n                <select id = \"likeDeleteDrinker\" formControlName = \"D_likename\">\n                  <option *ngFor= \"let drinkers of drinkerLikes_list\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                </select>\n              </label> \n              <br>\n              <label>\n                <h6>Beer Name: </h6>\n                <select id =\"likeDeleteBeer\" formControlName = \"D_likeBeer\">\n                  <option *ngFor = \"let beers of beerName_UPDATE\" [ngValue]= \"beers.name\">{{beers.name}}</option>\n                </select> \n               </label>\n             <p></p>\n             <button type = \"submit\" [disabled] = \"!deleteLikeForm.valid\">Submit</button>\n            <p>status: deleting - {{like_delete}}\n          </form>\n        </td>\n      </tr>\n    </table>\n</div>\n<br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Transactions Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE</h5>\n        </td>\n        <td>\n            <h5>INSERT</h5>\n            <form [formGroup] =\"redirectBarForm\" (ngSubmit) = \"onSubmitRedirectBar()\">\n            <h6>Please direct yourself to the Bar Page for the Transaction you want to add. Complete the form at the bottom.</h6>\n            <label>\n                <h6>Bar Name: </h6>\n                <select id =\"transInsertBar\" formControlName = \"redirecttoBarPage\" >\n                  <option *ngFor =\"let bars of barName_UPDATE\" [ngValue] = \"bars.name\" >{{bars.name}}</option>\n                </select>\n               </label>\n               <br>\n                <p></p>\n                <button type = \"submit\" [disabled] = \"!redirectBarForm.valid\">Submit</button>\n            </form>\n          </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deleteTransForm\" (ngSubmit) = \"delete_trans()\">\n              <label>\n                SELECT TRANSACTION ID TO DELETE\n              </label> \n              <br>\n               <label>\n                  <h6>Transaction ID:</h6>\n                  <input type = \"number\" formControlName = \"D_transID\">\n                </label>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!deleteTransForm.valid\">Submit</button>\n              <p>status: deleting - {{trans_delete}}\n\n            </form>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <br>\n  <div class = \"container\">\n      <h2 class=\"text-center font-weight-dark\">Has Table Modifications</h2>\n      <br>\n      <table>\n        <tr>\n          <td>\n            <h5>UPDATE</h5>\n            <form [formGroup] = \"updateHasform\" (ngSubmit) = \"onSubmitHasUpdate()\">\n                <label>INPUT HAS INFO</label>\n                 <br>\n                 <label>\n                   <h6>Transaction ID: </h6>\n                   <input type = \"number\" formControlName = \"hasTID\">\n                 </label>\n                 <br>\n                 <label>\n                    <h6>Current Item:</h6>\n                    <select id = \"hasUpdateItem1\" formControlName = \"hasOldItem\">\n                      <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                    </select>\n                  </label>\n                  <label>\n                      <h6>New Item:</h6>\n                      <select id = \"hasUpdateItem2\" formControlName = \"hasNewItem\">\n                        <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                      </select>\n                    </label>\n                <br>\n                 <p></p>\n                 <button type = \"submit\" [disabled] = \"!updateHasform.valid\">Submit</button>\n                <p>status: inserting - {{has_update}}\n            </form>\n          </td>\n          <td>\n              <h5>INSERT</h5>\n              <form [formGroup] = \"insertHasform\" (ngSubmit) = \"onSubmit11()\">\n                  <label>INPUT HAS INFO</label>\n                   <br>\n                   <label>\n                     <h6>Transaction ID: </h6>\n                     <input type = \"number\" formControlName = \"hasTID\">\n                   </label>\n                   <br>\n                   <label>\n                      <h6>Item Name:</h6>\n                      <select id = \"hasInsertItem\" formControlName = \"hasItem\">\n                        <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                      </select>\n                    </label>\n                  <br>\n                   <p></p>\n                   <button type = \"submit\" [disabled] = \"!insertHasform.valid\">Submit</button>\n                  <p>status: inserting - {{has_insert}}\n                </form>\n          </td>\n          <td>\n            <h5>DELETE</h5>\n            <form [formGroup] = \"deleteHasForm\" (ngSubmit) = \"delete_has()\">\n              <label>SELECT TRANSACTION ID-ITEM TO DELETE FROM HAS </label> \n              <br>\n               <label>\n                  <h6>Transaction ID: </h6>\n                  <input type = \"number\" formControlName = \"D_hasTid\">\n                </label>\n               <br>\n               <label>\n                <h6>Item Name:</h6>\n                <select id = \"hasDeleteItem\" formControlName = \"D_hasItem\">\n                  <option *ngFor= \"let item of itemName_list\" [ngValue] = \"item.name\">{{item.name}}</option>\n                </select>\n              </label>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!deleteHasForm.valid\">Submit</button>\n              <p>status: deleting - {{has_delete}} \n            </form>\n          </td>\n        </tr>\n      </table>\n  </div>\n <br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Occurs Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE</h5>\n\n        </td>\n        <td>\n            <h5>INSERT</h5>\n            <form [formGroup] = \"insertOccurForm\" (ngSubmit) = \"onSubmit8()\">\n                <label>\n                  SELECT OCCURS INFO\n                </label> \n                 <br>\n                 <label>\n                   <h6>Transaction ID: </h6>\n                   <input type = \"text\" formControlName = \"occurTid\">\n                 </label>\n                 <br>\n                 <label>\n                  <h6>Bar Name: </h6>\n                  <select id =\"occursInsertBar\" formControlName = \"occurBar\">\n                    <option *ngFor =\"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>}\n                  </select>\n                 </label>\n                <br>\n                 <p></p>\n                 <button type = \"submit\" [disabled] = \"!insertOccurForm.valid\">Submit</button>\n                <p>status: inserting - {{occur_insert}}\n              </form>\n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deleteOccurForm\" (ngSubmit) = \"delete_occur()\">\n            <label>SELECT OCCURS-INFO to DELETE</label> \n            <br>\n             <label>\n                <H6>Transaction ID: </H6>\n                <input type = \"number\" formControlName = \"D_occurTID\">\n              </label>\n              <br>\n              <label>\n                <h6>Bar: </h6>\n                <select id = \"occursDeleteBar\" formControlName = \"D_occurBar\">\n                  <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                </select>\n                </label>\n             <p></p>\n             <button type = \"submit\" [disabled] = \"!deleteOccurForm.valid\">Submit</button>\n            <p>status: deleting - {{occur_delete}}\n          </form>\n        </td>\n      </tr>\n    </table>\n</div>\n<br>\n<div class = \"container\">\n  <h2 class=\"text-center font-weight-dark\">Days Table Modifications</h2>\n  <br>\n  <table>\n    <tr>\n      <td>\n        <h5>UPDATE</h5>\n        <label>SELECT BAR TO UPDATE THE OPERATION DAYS INFO</label>\n          <form [formGroup] = \"updateDaysForm\" (ngSubmit) =\"onSubmitDaysUpdate()\">\n            <label>\n              <h6>Bar:</h6>\n              <select id = \"daysUpdate\" formControlName = \"daysBarName\">\n                  <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n              </select>\n            </label>\n            <label>\n                <h6>Day of Week: </h6>\n                <input type = \"radio\" formControlName = \"daysDay\" value = \"mon\">Monday \n                <input type = \"radio\" formControlName = \"daysDay\" value = \"tue\">Tuesday \n                <input type = \"radio\" formControlName = \"daysDay\" value = \"wed\">Wednesday \n                <input type = \"radio\" formControlName = \"daysDay\" value = \"thur\">Thursday \n                <br>\n                <input type = \"radio\" formControlName = \"daysDay\" value = \"fri\">Friday \n                <input type = \"radio\" formControlName = \"daysDay\" value = \"sat\">Saturday \n                <input type = \"radio\" formControlName = \"daysDay\" value = \"sun\">Sunday \n            </label>\n            <br>\n            <label>\n                <h6>Update Attribute: </h6>\n                  <input type = \"radio\" formControlName = \"daysType\" value = \"name\">Bar Name \n                  <input type = \"radio\" formControlName = \"daysType\" value = \"day\">Day \n                  <input type = \"radio\" formControlName = \"daysType\" value = \"open\">Open Time \n                  <input type = \"radio\" formControlName = \"daysType\" value = \"close\">Close Time \n            </label> \n            <br>\n            <label>\n              <h6>New Value:</h6>\n              <input type = \"text\" formControlName = \"daysNewValue\">\n            </label>\n            <br>\n              <div>\n                <button type = \"submit\" [disabled] =\"!updateDaysForm.valid\">Submit</button>\n              </div>\n              <p>status for Update: {{day_update}}</p>\n            </form>\n      </td>\n      <td>\n          <h5>INSERT</h5>\n          <form [formGroup] = \"insertDaysForm\" (ngSubmit) = \"onSubmitInsertDays()\">\n              <label>\n                Generate Days Data\n              </label> \n               <br>\n               <label>\n                 <h6>Bar Name: </h6>\n                 <select id = \"daysInsertDay\" formControlName = \"daysName\">\n                    <option *ngFor= \"let bars of barName_UPDATE\" [ngValue] = \"bars.name\">{{bars.name}}</option>\n                  </select>\n               </label>\n               <br>\n               <label>\n                <h6>Open Time: </h6> \n                 <input type = \"text\" formControlName = \"dayOpen\" >\n                 <br>\n                 (24 hr time format. format: hh:mm:ss)\n               </label>\n               <br>\n               <label>\n                 <h6>Close Time:</h6>\n                 <input type = \"text\" formControlName = \"dayClose\" >\n                 <br>\n                 (24 hr time format. format: hh:mm:ss)\n               </label>\n               <br>\n               <label>\n                  <h6>Day: </h6>\n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"mon\">Monday \n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"tue\">Tuesday \n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"wed\">Wednesday \n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"thur\">Thursday \n                    <br>\n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"fri\">Friday \n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"sat\">Saturday \n                    <input type = \"radio\" formControlName = \"dayDay\" value = \"sun\">Sunday \n                  </label> \n               <br>\n               <p></p>\n               <button type = \"submit\" [disabled] = \"!insertDaysForm.valid\">Submit</button>\n              <p>status: inserting - {{day_insert}}\n          </form>\n      </td>\n      <td>\n        <h5>DELETE</h5>\n        <form [formGroup] = \"deleteDayForm\" (ngSubmit) = \"delete_day()\">\n          <label>SELECT BAR-DAY TO DELETE</label> \n           <br>\n           <label>\n             <h6>Bar Name: </h6>\n             <input type = \"text\" formControlName = \"D_daybar\">\n           </label>\n           <br>\n           <label>\n              <b>Day: </b>\n              <br>\n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"mon\">Monday \n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"tue\">Tuesday \n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"wed\">Wednesday \n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"thur\">Thursday \n                <br>\n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"fri\">Friday \n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"sat\">Saturday \n                <input type = \"radio\" formControlName = \"D_dayDay\" value = \"sun\">Sunday \n            </label> \n          <br>\n           <p></p>\n           <button type = \"submit\" [disabled] = \"!deleteDayForm.valid\">Submit</button>\n          <p>status: deleting - {{day_delete}}\n        </form>\n      </td>\n    </tr>\n  </table>\n</div>\n<br>\n<div class = \"container\">\n    <h2 class=\"text-center font-weight-dark\">Pays Table Modifications</h2>\n    <br>\n    <table>\n      <tr>\n        <td>\n          <h5>UPDATE</h5>\n          <form [formGroup] = \"updatePaysForm\" (ngSubmit) = \"update_pay()\">\n              <label>INPUT INFO TRANSACTION ID-PAYER to UPDATE</label>\n              <br>\n              <label>\n                <h6>Transaction ID: </h6>\n                <input type = \"number\" formControlName = \"payTID\" minlength=\"1\">\n              </label>\n              <br>\n              <label>\n                <h6>Current Payer: </h6> \n                <select id = \"paysUpdatePayer1\" formControlName = \"payOldDrinker\">\n                    <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                </select>\n              </label>\n              <label>\n                  <h6>New Payer: </h6>\n                  <select id = \"paysUpdatePayer2\" formControlName = \"payNewDrinker\">\n                      <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                  </select>\n                </label>\n              <p></p>\n             <button type = \"submit\" [disabled] = \"!updatePaysForm.valid\">Submit</button>\n            <p>status: inserting - {{pays_updateStatus}}\n            </form>\n        </td>\n        <td>\n            <h5>INSERT</h5>\n            <form [formGroup] = \"insertPayForm\" (ngSubmit) = \"insert_pay()\">\n              <label>INPUT PAYS INFO</label>\n              <br>\n              <label>\n                <h6>Transaction ID: </h6>\n                <input type = \"number\" formControlName = \"Pay_tid\">\n              </label>\n              <br>\n              <label>\n                <h6>Payer: </h6>\n                <select id = \"paysInsertPayer\" formControlName = \"Pay_name\">\n                    <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                </select>\n              </label>\n              <p></p>\n             <button type = \"submit\" [disabled] = \"!insertPayForm.valid\">Submit</button>\n            <p>status: inserting - {{pay_insert}}\n            </form>\n            \n        </td>\n        <td>\n          <h5>DELETE</h5>\n          <form [formGroup] = \"deletePayForm\" (ngSubmit) = \"delete_pay()\">\n            <label>\n              SELECT TRANSACTION ID-PAYER TO DELETE\n            </label> \n            <br>\n             <label>\n               <h6>TRANSACTION ID: </h6>\n                <input type = \"number\" formControlName = \"D_payTID\">\n              </label>\n              <br>\n              <label>\n                  <h6>Payer: </h6>\n                  <select id = \"paysDeletePayer\" formControlName = \"D_payPayer\">\n                      <option *ngFor= \"let drinkers of drinkerName_UPDATE\" [ngValue] = \"drinkers.name\">{{drinkers.name}}</option>\n                  </select>\n                </label>\n             <p></p>\n             <button type = \"submit\" [disabled] = \"!deletePayForm.valid\">Submit</button>\n            <p>status: deleting - {{pay_delete}}\n          </form>\n        </td>\n      </tr>\n    </table>\n  </div>\n<p></p>"

/***/ }),

/***/ "./src/app/modifications/modifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modifications/modifications.component.ts ***!
  \**********************************************************/
/*! exports provided: ModificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsComponent", function() { return ModificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modifications.service */ "./src/app/modifications.service.ts");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModificationsComponent = /** @class */ (function () {
    function ModificationsComponent(drinkerService, barService, modificationService, router, beerService) {
        this.drinkerService = drinkerService;
        this.barService = barService;
        this.modificationService = modificationService;
        this.router = router;
        this.beerService = beerService;
        this.redirectBarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            redirecttoBarPage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.drinkerUpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            drinkerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            drinkerColumn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            drinkerupdateValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.barUpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            barName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barColumn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barupdateValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertFreqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            freqName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            freqBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.updateFreqsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            freqDrinker: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            freqOldBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            freqNewBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertLikeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            likeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            likeBeer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.insertOccurForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            occurTid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            occurBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.anyqueryFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            anyquery: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.insertDrinkerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            drinkerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            drinkerAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            drinkerState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            drinkerPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertBarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            barName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barLicense: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.updateItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            itemColumn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            itemUpdateValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.updateLikeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            likeDrinker: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            likeOldVal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            likeNewVal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            itemManf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            itemType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteDrinkerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_drinkerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteBarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            deleteBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteFreqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_freqBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_freqName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertSellsform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sellBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sellItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sellPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.insertHasform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hasTID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hasItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.updateHasform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hasTID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hasOldItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hasNewItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_itemname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteSellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_sellBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_sellItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteLikeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_likename: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_likeBeer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteOccurForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_occurTID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_occurBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteHasForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_hasTid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_hasItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteDayForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_daybar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_dayDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deletePayForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_payTID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            D_payPayer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertPayForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Pay_tid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Pay_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.insertDaysForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            daysName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dayOpen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dayClose: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dayDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.updateDaysForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            daysBarName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            daysDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            daysType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            daysNewValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.deleteTransForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            D_transID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.item = '';
        this.t_vaild = false;
        this.updateOccursForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            occurTID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            occurOldBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            occurNewBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.updatePaysForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            payTID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            payOldDrinker: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            payNewDrinker: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.list_states = [
            { label: 'Select a State', value: null },
            { label: 'Alabama', value: 'AL' },
            { label: 'Alaska', value: 'AK' },
            { label: 'Arizona', value: 'AZ' },
            { label: 'Arkansas', value: 'AR' },
            { label: 'California', value: 'CA' },
            { label: 'Colorado', value: 'CO' },
            { label: 'Connecticut', value: 'CT' },
            { label: 'Delaware', value: 'DE' },
            { label: 'Florida', value: 'FL' },
            { label: 'Georgia', value: 'GA' },
            { label: 'Hawaii', value: 'HI' },
            { label: 'Idaho', value: 'ID' },
            { label: 'Illinois', value: 'IL' },
            { label: 'Indiana', value: 'IN' },
            { label: 'Iowa', value: 'IA' },
            { label: 'Kansas', value: 'KS' },
            { label: 'Kentucky', value: 'KY' },
            { label: 'Louisiana', value: 'LA' },
            { label: 'Maine', value: 'ME' },
            { label: 'Maryland', value: 'MD' },
            { label: 'Massachusetts', value: 'MA' },
            { label: 'Michigan', value: 'MI' },
            { label: 'Minnesota', value: 'MN' },
            { label: 'Mississippi', value: 'MS' },
            { label: 'Missouri', value: 'MO' },
            { label: 'Montana', value: 'MT' },
            { label: 'Nebraska', value: 'NE' },
            { label: 'Nevada', value: 'NV' },
            { label: 'New Hampshire', value: 'NH' },
            { label: 'New Jersey', value: 'NJ' },
            { label: 'New Mexico', value: 'NM' },
            { label: 'New York', value: 'NY' },
            { label: 'North Carolina', value: 'NC' },
            { label: 'North Dakota', value: 'ND' },
            { label: 'Ohio', value: 'OH' },
            { label: 'Oklahoma', value: 'OK' },
            { label: 'Oregon', value: 'OR' },
            { label: 'Pennsylvania', value: 'PA' },
            { label: 'Rhode Island', value: 'RI' },
            { label: 'South Carolina', value: 'SC' },
            { label: 'South Dakota', value: 'SD' },
            { label: 'Tennessee', value: 'TN' },
            { label: 'Texas', value: 'TX' },
            { label: 'Utah', value: 'UT' },
            { label: 'Vermont', value: 'VT' },
            { label: 'Virginia', value: 'VA' },
            { label: 'Washington', value: 'WA' },
            { label: 'West Virginia', value: 'WV' },
            { label: 'Wisconsin', value: 'WI' },
            { label: 'Wyoming', value: 'WY' },
        ];
    }
    ModificationsComponent.prototype.ngOnInit = function () {
        this.getDrinkers();
        this.getBars();
        this.getBeers();
        this.getItems();
        this.getDrinkers_Likes();
        this.getDrinkers_Freqs();
    };
    ModificationsComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkerName_UPDATE = data;
        }, function (error) {
            alert('Could not get list of drinkers');
        });
    };
    ModificationsComponent.prototype.getDrinkers_Likes = function () {
        var _this = this;
        this.drinkerService.getDrinkersFromLikes().subscribe(function (data) {
            _this.drinkerLikes_list = data;
        }, function (error) {
            alert('Could not get list of drinkers from likes table');
        });
    };
    ModificationsComponent.prototype.getDrinkers_Freqs = function () {
        var _this = this;
        this.drinkerService.getDrinkersFromFreqs().subscribe(function (data) {
            _this.drinkerFreqs_list = data;
        }, function (error) {
            alert('Could not load distinct drinkers from frequents table');
        });
    };
    ModificationsComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beerName_UPDATE = data;
        }, function (error) {
            alert('Could not get list of beers');
        });
    };
    ModificationsComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.barName_UPDATE = data;
        }, function (error) {
            alert('Could not get list of bars');
        });
    };
    ModificationsComponent.prototype.getItems = function () {
        var _this = this;
        this.modificationService.getItems().subscribe(function (data) {
            _this.itemName_list = data;
        }, function (error) {
            alert('Could not get list of items');
        });
    };
    ModificationsComponent.prototype.onSubmitDrinkerUpdate = function () {
        var _this = this;
        console.log(this.drinkerUpdateForm.value);
        this.modificationService.updateDrinker(this.drinkerUpdateForm.value.drinkerName, this.drinkerUpdateForm.value.drinkerColumn, this.drinkerUpdateForm.value.drinkerupdateValue).subscribe(function (data) {
            console.log(data);
            _this.getDrinkers();
            _this.getDrinkers_Freqs();
            _this.getDrinkers_Likes();
            _this.drinkerUpdateForm.reset();
            _this.drinkerUpdateStatus = true;
        }, function (error) {
            alert(error.error.text);
            _this.drinkerUpdateForm.reset();
            _this.drinkerUpdateStatus = false;
        });
        this.drinkerUpdateForm.reset();
    };
    ModificationsComponent.prototype.onSubmitBarUpdate = function () {
        var _this = this;
        console.log(this.barUpdateForm.value);
        this.modificationService.updateBar(this.barUpdateForm.value.barName, this.barUpdateForm.value.barColumn, this.barUpdateForm.value.barupdateValue).subscribe(function (data) {
            console.log(data);
            _this.getBars();
            _this.barUpdateForm.reset();
            _this.barUpdateStatus = true;
        }, function (error) {
            alert(error.error.text);
            _this.barUpdateForm.reset();
            _this.barUpdateStatus = false;
        });
        this.barUpdateForm.reset();
    };
    ModificationsComponent.prototype.onSubmit4 = function () {
        var _this = this;
        console.log(this.insertDrinkerForm.value);
        this.modificationService.insertDrinker(this.insertDrinkerForm.value.drinkerName, this.insertDrinkerForm.value.drinkerAddress, this.insertDrinkerForm.value.drinkerState, this.insertDrinkerForm.value.drinkerPhone).subscribe(function (data) {
            _this.getDrinkers();
            _this.getDrinkers_Freqs();
            _this.getDrinkers_Likes();
            _this.insertDrinkerForm.reset();
            _this.drinker_insert = true;
        }, function (error) {
            alert(error.error.text);
            _this.insertDrinkerForm.reset();
            _this.drinker_insert = false;
        });
        this.insertDrinkerForm.reset();
        this.drinker_insert = false;
    };
    ModificationsComponent.prototype.onSubmit5 = function () {
        var _this = this;
        console.log(this.insertBarForm.value);
        this.modificationService.insertBar(this.insertBarForm.value.barName, this.insertBarForm.value.barLicense, this.insertBarForm.value.barState, this.insertBarForm.value.barPhone, this.insertBarForm.value.barAddress).subscribe(function (data) {
            _this.getBars();
            _this.insertBarForm.reset();
            _this.bar_insert = true;
        }, function (error) {
            alert("Duplicate Bar name! Bar already exists");
            _this.insertBarForm.reset();
            _this.bar_insert = false;
        });
        this.insertBarForm.reset();
    };
    ModificationsComponent.prototype.onSubmit7 = function () {
        var _this = this;
        console.log(this.insertFreqForm.value);
        this.modificationService.insertFrequent(this.insertFreqForm.value.freqName, this.insertFreqForm.value.freqBar).subscribe(function (data) {
            _this.getDrinkers_Freqs();
            _this.insertFreqForm.reset();
            _this.freq_insert = true;
            _this.pattern2_bool = true;
        }, function (error) {
            alert(error.error.text);
            if (error.error.text === "Unsatisfy pattern2! Invalid frequent state.") {
                _this.insertFreqForm.reset();
                _this.pattern2_bool = false;
                _this.freq_insert = false;
            }
            else {
                _this.insertFreqForm.reset();
                _this.pattern2_bool = null;
                _this.freq_insert = false;
            }
        });
        this.insertFreqForm.reset();
    };
    ModificationsComponent.prototype.onSubmit8 = function () {
        var _this = this;
        console.log(this.insertOccurForm.value);
        this.modificationService.insertOccurs(this.insertOccurForm.value.occurTid, this.insertOccurForm.value.occurBar).subscribe(function (data) {
            _this.insertOccurForm.reset();
            _this.occur_insert = true;
        }, function (error) {
            alert(error.error.text);
            _this.insertOccurForm.reset();
            _this.occur_insert = false;
        });
        this.insertOccurForm.reset();
    };
    ModificationsComponent.prototype.onSubmit9 = function () {
        var _this = this;
        console.log(this.insertLikeForm.value);
        this.modificationService.insertLikes(this.insertLikeForm.value.likeName, this.insertLikeForm.value.likeBeer).subscribe(function (data) {
            _this.getDrinkers_Likes();
            _this.insertLikeForm.reset();
            _this.like_insert = true;
        }, function (error) {
            alert(error.error.text);
            _this.insertLikeForm.reset();
            _this.like_insert = false;
        });
        this.insertLikeForm.reset();
    };
    ModificationsComponent.prototype.onSubmitItemUpdate = function () {
        var _this = this;
        console.log(this.updateItemForm.value);
        this.modificationService.updateItem(this.updateItemForm.value.itemName, this.updateItemForm.value.itemColumn, this.updateItemForm.value.itemUpdateValue).subscribe(function (data) {
            console.log(data);
            _this.getItems();
            _this.updateItemForm.reset();
            _this.item_updateStatus = true;
        }, function (error) {
            alert(error.error.text);
            _this.updateItemForm.reset();
            _this.item_updateStatus = false;
        });
        this.updateItemForm.reset();
        this.item_updateStatus = false;
    };
    ModificationsComponent.prototype.onSubmitLikeUpdate = function () {
        var _this = this;
        console.log(this.updateLikeForm.value);
        this.modificationService.updateLike(this.updateLikeForm.value.likeDrinker, this.updateLikeForm.value.likeOldVal, this.updateLikeForm.value.likeNewVal).subscribe(function (data) {
            console.log(data);
            _this.updateLikeForm.reset();
            _this.like_updateStatus = true;
        }, function (error) {
            console.log(error);
            alert(error.error.text);
            _this.updateLikeForm.reset();
            _this.like_updateStatus = false;
        });
        this.updateLikeForm.reset();
        this.like_updateStatus = false;
    };
    ModificationsComponent.prototype.onSubmitItemInsert = function () {
        var _this = this;
        console.log(this.insertItemForm.value);
        this.modificationService.insertItem(this.insertItemForm.value.itemName, this.insertItemForm.value.itemManf, this.insertItemForm.value.itemType).subscribe(function (data) {
            _this.getItems();
            _this.insertItemForm.reset();
            _this.insertItemStatus = true;
        }, function (error) {
            alert("Duplicate item! Item is already exists.");
            _this.insertItemForm.reset();
            _this.insertItemStatus = false;
        });
        this.insertItemForm.reset();
    };
    ModificationsComponent.prototype.delete_drinker = function () {
        var _this = this;
        console.log(this.deleteDrinkerForm.value);
        this.modificationService.deleteDrinker(this.deleteDrinkerForm.value.D_drinkerName).subscribe(function (data) {
            _this.getDrinkers();
            _this.getDrinkers_Freqs();
            _this.getDrinkers_Likes();
            _this.deleteDrinkerForm.reset();
            _this.drinker_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteDrinkerForm.reset();
            _this.drinker_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_Bar = function () {
        var _this = this;
        console.log(this.deleteBarForm.value);
        this.modificationService.deleteBar(this.deleteBarForm.value.deleteBar).subscribe(function (data) {
            _this.getBars();
            _this.deleteBarForm.reset();
            _this.bar_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteBarForm.reset();
            _this.bar_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_freq = function () {
        var _this = this;
        console.log(this.deleteFreqForm.value);
        this.modificationService.deleteFrequent(this.deleteFreqForm.value.D_freqBar, this.deleteFreqForm.value.D_freqName).subscribe(function (data) {
            _this.deleteFreqForm.reset();
            _this.freq_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteFreqForm.reset();
            _this.freq_delete = false;
        });
    };
    ModificationsComponent.prototype.onSubmit10 = function () {
        var _this = this;
        console.log(this.insertSellsform.value);
        this.modificationService.verifyPattern3_0(this.insertSellsform.value.sellItem).subscribe(function (data) {
            console.log(data);
            if (data == null) {
                _this.modificationService.insertSells(_this.insertSellsform.value.sellBar, _this.insertSellsform.value.sellItem, _this.insertSellsform.value.sellPrice).subscribe(function (data) {
                    _this.insertSellsform.reset();
                    _this.sell_insert = true;
                }, function (error) {
                    alert(error.error.text);
                });
                _this.insertSellsform.reset();
                _this.sell_insert = false;
            }
            else {
                _this.modificationService.verifyPattern3_1(_this.insertSellsform.value.sellBar, _this.insertSellsform.value.sellItem).subscribe(function (data) {
                    console.log(data);
                    _this.pattern3_q1rownum = data.length;
                    _this.modificationService.verifyPattern3_2(_this.insertSellsform.value.sellBar, _this.insertSellsform.value.sellItem, _this.insertSellsform.value.sellPrice).subscribe(function (data) {
                        _this.pattern3_q2rownum = data.length;
                        console.log(_this.pattern3_q1rownum);
                        console.log(_this.pattern3_q2rownum);
                        if (_this.pattern3_q1rownum == _this.pattern3_q2rownum) {
                            _this.modificationService.insertSells(_this.insertSellsform.value.sellBar, _this.insertSellsform.value.sellItem, _this.insertSellsform.value.sellPrice).subscribe(function (data) {
                                _this.insertSellsform.reset();
                                _this.sell_insert = true;
                            }, function (error) {
                                alert(error.error.text);
                            });
                            _this.insertSellsform.reset();
                            _this.sell_insert = false;
                        }
                        else {
                            alert("Unsatisfy pattern 3! Invalid price.");
                            _this.insertSellsform.reset();
                            _this.sell_insert = false;
                        }
                    });
                });
            }
        });
    };
    ModificationsComponent.prototype.onSubmit11 = function () {
        var _this = this;
        console.log(this.insertHasform.value);
        this.modificationService.insertHas(this.insertHasform.value.hasTID, this.insertHasform.value.hasItem).subscribe(function (data) {
            _this.insertHasform.reset();
            _this.has_insert = true;
        }, function (error) {
            alert(error.error.text);
            _this.insertHasform.reset();
            _this.has_insert = false;
        });
    };
    ModificationsComponent.prototype.delete_item = function () {
        var _this = this;
        console.log(this.deleteItemForm.value);
        this.modificationService.deleteItem(this.deleteItemForm.value.D_itemname).subscribe(function (data) {
            _this.getItems();
            _this.deleteItemForm.reset();
            _this.item_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteItemForm.reset();
            _this.item_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_sell = function () {
        var _this = this;
        console.log(this.deleteSellForm.value);
        this.modificationService.deleteSell(this.deleteSellForm.value.D_sellBar, this.deleteSellForm.value.D_sellItem).subscribe(function (data) {
            _this.deleteSellForm.reset();
            _this.sell_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteSellForm.reset();
            _this.sell_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_like = function () {
        var _this = this;
        console.log(this.deleteLikeForm.value);
        this.modificationService.deleteLike(this.deleteLikeForm.value.D_likename, this.deleteLikeForm.value.D_likeBeer).subscribe(function (data) {
            _this.deleteLikeForm.reset();
            _this.like_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteLikeForm.reset();
            _this.like_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_occur = function () {
        var _this = this;
        console.log(this.deleteOccurForm.value);
        this.modificationService.deleteOccur(this.deleteOccurForm.value.D_occurTID, this.deleteOccurForm.value.D_occurBar).subscribe(function (data) {
            _this.deleteOccurForm.reset();
            _this.occur_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteOccurForm.reset();
            _this.occur_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_has = function () {
        var _this = this;
        console.log(this.deleteHasForm.value);
        this.modificationService.deleteHas_valid(this.deleteHasForm.value.D_hasTid, this.deleteHasForm.value.D_hasItem).subscribe(function (data) {
            _this.modificationService.deleteHas_lastItem(_this.deleteHasForm.value.D_hasTid).subscribe(function (data) {
                if (data.length == 1) {
                    alert("Not allowed to remove last item in Has table with given Transaction id.");
                    _this.deleteHasForm.reset();
                    _this.has_delete = false;
                    return;
                }
                else {
                    _this.modificationService.deleteHas(_this.deleteHasForm.value.D_hasTid, _this.deleteHasForm.value.D_hasItem).subscribe(function (data) {
                        _this.deleteHasForm.reset();
                        _this.has_delete = true;
                        return;
                    });
                    _this.deleteHasForm.reset();
                    _this.has_delete = false;
                }
            });
        }, function (error) {
            alert(error.error.text);
            _this.deleteHasForm.reset();
            _this.has_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_day = function () {
        var _this = this;
        console.log(this.deleteDayForm.value);
        this.modificationService.deleteDay(this.deleteDayForm.value.D_daybar, this.deleteDayForm.value.D_dayDay).subscribe(function (data) {
            _this.deleteDayForm.reset();
            _this.day_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteDayForm.reset();
            _this.day_delete = false;
        });
    };
    ModificationsComponent.prototype.delete_pay = function () {
        var _this = this;
        console.log(this.deletePayForm.value);
        this.modificationService.deletePay(this.deletePayForm.value.D_payTID, this.deletePayForm.value.D_payPayer).subscribe(function (data) {
            _this.deletePayForm.reset();
            _this.pay_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deletePayForm.reset();
            _this.pay_delete = false;
        });
    };
    ModificationsComponent.prototype.insert_pay = function () {
        var _this = this;
        console.log(this.insertPayForm.value);
        this.modificationService.insertPay(this.insertPayForm.value.Pay_tid, this.insertPayForm.value.Pay_name).subscribe(function (data) {
            _this.insertPayForm.reset();
            _this.pay_insert = true;
        }, function (error) {
            alert(error.error.text);
            _this.insertPayForm.reset();
            _this.pay_insert = false;
        });
    };
    ModificationsComponent.prototype.onSubmitInsertDays = function () {
        var _this = this;
        console.log(this.insertDaysForm.value);
        if (this.insertDaysForm.value.dayOpen < this.insertDaysForm.value.dayClose) {
            this.modificationService.insertDays(this.insertDaysForm.value.daysName, this.insertDaysForm.value.dayOpen, this.insertDaysForm.value.dayClose, this.insertDaysForm.value.dayDay).subscribe(function (data) {
                _this.day_insert = true;
                _this.insertDaysForm.reset();
            }, function (error) {
                alert(error.error.text);
                _this.day_insert = false;
                _this.insertDaysForm.reset();
            });
            this.day_insert = false;
            this.insertDaysForm.reset();
        }
        this.day_insert = false;
        this.insertDaysForm.reset();
    };
    ModificationsComponent.prototype.delete_trans = function () {
        var _this = this;
        console.log(this.deleteTransForm.value);
        this.modificationService.deleteTrans(this.deleteTransForm.value.D_transID).subscribe(function (data) {
            _this.deleteTransForm.reset();
            _this.trans_delete = true;
        }, function (error) {
            alert(error.error.text);
            _this.deleteTransForm.reset();
            _this.trans_delete = false;
        });
    };
    ModificationsComponent.prototype.onSubmitRedirectBar = function () {
        console.log(this.redirectBarForm.value.redirecttoBarPage);
        this.router.navigate(['/bars/', this.redirectBarForm.value.redirecttoBarPage]);
    };
    ModificationsComponent.prototype.onSubmitFreqsUpdate = function () {
        var _this = this;
        console.log(this.updateFreqsForm.value);
        this.modificationService.updateFrequent(this.updateFreqsForm.value.freqDrinker, this.updateFreqsForm.value.freqOldBar, this.updateFreqsForm.value.freqNewBar).subscribe(function (data) {
            _this.getDrinkers_Freqs();
            _this.updateFreqsForm.reset();
            _this.freqs_updateStatus = true;
            _this.pattern2_bool = true;
        }, function (error) {
            alert(error.error.text);
            if (error.error.text === "Unsatisfy pattern2! Invalid frequent state.") {
                _this.updateFreqsForm.reset();
                _this.pattern2_bool = false;
                _this.freqs_updateStatus = false;
            }
            else {
                _this.updateFreqsForm.reset();
                _this.pattern2_bool = null;
                _this.freqs_updateStatus = false;
            }
        });
        this.updateFreqsForm.reset();
    };
    ModificationsComponent.prototype.update_pay = function () {
        var _this = this;
        console.log(this.updatePaysForm.value);
        this.modificationService.updatePay(this.updatePaysForm.value.payTID, this.updatePaysForm.value.payOldDrinker, this.updatePaysForm.value.payNewDrinker).subscribe(function (data) {
            _this.updatePaysForm.reset();
            _this.pays_updateStatus = true;
        }, function (error) {
            alert(error.error.text);
            _this.updatePaysForm.reset();
            _this.pays_updateStatus = false;
        });
    };
    ModificationsComponent.prototype.onSubmitHasUpdate = function () {
        var _this = this;
        console.log(this.updateHasform.value);
        this.modificationService.updateHas(this.updateHasform.value.hasTID, this.updateHasform.value.hasOldItem, this.updateHasform.value.hasNewItem).subscribe(function (data) {
            _this.updateHasform.reset();
            _this.has_update = true;
        }, function (error) {
            alert(error.error.text);
            _this.updateHasform.reset();
            _this.has_update = false;
        });
    };
    ModificationsComponent.prototype.onSubmitDaysUpdate = function () {
        var _this = this;
        console.log(this.updateDaysForm.value);
        if (this.updateDaysForm.value.daysType == "name") {
            this.modificationService.update_days_bar(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(function (data) {
                _this.updateDaysForm.reset();
                _this.day_update = true;
            }, function (error) {
                alert(error.error.text);
                _this.updateDaysForm.reset();
                _this.day_update = false;
            });
        }
        else if (this.updateDaysForm.value.daysType == "day") {
            this.modificationService.update_days_daycolumn(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(function (data) {
                _this.updateDaysForm.reset();
                _this.day_update = true;
            }, function (error) {
                alert(error.error.text);
                _this.updateDaysForm.reset();
                _this.day_update = false;
            });
        }
        else if (this.updateDaysForm.value.daysType == "open") {
            this.modificationService.update_days_pattern1validation_open(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(function (data) {
                _this.updateDaysForm.reset();
                _this.day_update = true;
            }, function (error) {
                alert(error.error.text);
                _this.updateDaysForm.reset();
                _this.day_update = false;
            });
        }
        else if (this.updateDaysForm.value.daysType == "close") {
            this.modificationService.update_days_pattern1validation_close(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(function (data) {
                _this.updateDaysForm.reset();
                _this.day_update = true;
            }, function (error) {
                alert(error.error.text);
                _this.updateDaysForm.reset();
                _this.day_update = false;
            });
        }
    };
    ModificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modifications',
            template: __webpack_require__(/*! ./modifications.component.html */ "./src/app/modifications/modifications.component.html"),
            styles: [__webpack_require__(/*! ./modifications.component.css */ "./src/app/modifications/modifications.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _bars_service__WEBPACK_IMPORTED_MODULE_6__["BarsService"],
            _modifications_service__WEBPACK_IMPORTED_MODULE_5__["ModificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _beers_service__WEBPACK_IMPORTED_MODULE_3__["BeersService"]])
    ], ModificationsComponent);
    return ModificationsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Bars Page</h1>\n    <p class=\"lead\"></p>\n  </div>\n</div>\n\n<div class=\"container\">\n\n    <p-table [value]=\"bars\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Licence</th>\n          <th>Address</th>\n          <th>State</th>\n          <th>Phone</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bar>\n        <tr>\n          <td>\n            <a routerLink=\"/bars/{{ bar.name }}\">\n              {{ bar.name }}\n            </a>\n          </td>\n          <td>{{ bar.license }}</td>\n          <td>{{ bar.address }}</td>\n          <td>{{ bar.state }}</td>\n          <td>{{ bar.phone }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n </div>\n\n <br><br>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Claudia\Documents\18-19_Fall\Prin_Info_Management\Class_Project\bar_beer_drinker\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map