webpackJsonp(["main"],{

/***/ "../images/sports_icons/baseball.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIklEQVRYhbWXT2gjVRzHP0kmyXTSlqRN69auoYc9LIIuZUERkV5Sj+I/9uLBixQWDVZcqCdRZMWKiLA3UfaiBXE9CrKpRy0IdVEQDwrWabPQJptpbTqZTGYmHmbedNKmzUxJf/B4897MvO9nfu/33rxfrNPpADA/Py8BcSDl1RKDNQtwABNwyuWyBRDrdDpCPAXIXkl5APEBiTsegAkYXjHL5bIVKxaLQlwBRr1a5nw8YAA68J9Xm+IrZU98cjm/ujZg4S5bqhWf8i4dwAq6XlnOr67NzEygKGlkOdV3sGazydDQkF+fZoZhoustllldW6oVH8ObhjiHgScDocUrlQrVapUH2StUq9W+z8tyCkVJ+01PMy7hzrUoocS3trZwHIeH3/sLaXyGofen+r5zZGxfUwRa6Gi/f/8+juMwfXOTxOgFNt/O0jEPiMfj5PN5ZFkOO1Q8kjDA9vY2lmUx9e6fJEYvoJaSZJ+7yfSHFZKX5tjZ2Yky3CFFGNvb28O2bSZLd0lOXKKyKKPMvszI3OskRiZ5qHQ3sjiEXOuqqgIw+uw7JLLTbN8YxrZtrPq/ZxKNBFCr1QAo3Gq7MKWkf8+qqzR+/hL58jz1lQUAdF1HUZTBAeRyOYaufe63C7faqIsK0x9skBiZ9Psn3/iB6hfXMP/5MRJA3xjQNA3tzltdX174TO8SF5Z6ZJZ2ux1aPBRALpfj4pi7y6mlJB3HAeDgl6/9a98cC9u2IwH0nYJEIgFAoVBAVVU23/R3MzJPvBJJ7EwAQSsUCv61WBlHLRaLRQIY1P8egI7j4BydlvMAaDabPful3MXBB2Ev0zQN+fL8sf7Mk69GHutMAJZlkXvxE79tVn4HIJZwQ6per58fgHB/cupRABxT58FXr/n3cy99SqPROD+A3d3dLvcfrN2mvXXPbw8/cz3SeJEB2u022ec/8tvanUW3v/o3cDgNmqYNHqDVagGQmn68q1+SJLTvbvjt7Asfs7+/Hwkg1OJNp9OkClf9dmPtNuBu18Yf3/v9I3MlJKnvHucIACtQMAzzxDdarRamuu636ysLZDIZ/0QsgPRfv8WyrGPvB8b2NSUO0yUDQNddN/c6nKbT7n8g+GccHx8HIJPJUF9ZYO+b69i2feyXLI7loulpOrFisZgChoEspyQmMzMTjI2N9Lp1zOr1fTY2eh/VvcRkB9gFGsIDBm66hJc0BFOzOMAyqz8BfSGE+FKt+LTXJeLraGpmAE6Y5NQ/wy/nV9dP80RA/CrdsXVyctonPRd1MH271wsiID7rfaWY5yBA7/T8NPPAZNw4GfYgfgtCBMSveOINrxhC6CTrC3ACxLDwBBD88gYRxEMD9IAY9SDWATHnDdzgCi0eCeAIhOIVsVmYuK7Xo4hHBghAiKAUS1UsMTOKOMD/P4HZ+yML574AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"contanier-fluid\">\r\n  <ngx-alerts></ngx-alerts>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Component Decorator - Allows for specification of different properties
// that help define the structure of the component
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
        // Lines below are where all the logic reside for this Angular Application
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_google_places_autocomplete__ = __webpack_require__("./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_result_result_component__ = __webpack_require__("./src/app/components/result/result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // Import Google-Places Module
 // Import Angular-Google Maps









// Import BrowserAnimationsModule

// Import your library





// Any routes that need protecting have "canActivate[AuthGuard]"
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_20__components_create_create_component__["a" /* CreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_21__components_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_22__components_result_result_component__["a" /* ResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_result_result_component__["a" /* ResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCollapseModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_alerts__["a" /* AlertModule */].forRoot({ maxMessages: 5, timeout: 3000 }),
                __WEBPACK_IMPORTED_MODULE_6_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBqqOtWm-TTatvNnl585mt0V4dN0txIi0M',
                    libraries: ["places"]
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h2 class=\"page-header\">Create A New Game</h2>\r\n\r\n  <form (submit)=\"onCreateSubmit()\">\r\n    <!-- \"[(ngModel)]=\" allows for access to data in each of the inputs -->\r\n    <!-- These pertain to the fields set in the \"create.component.ts\" file -->\r\n    <div class=\"form-group\">\r\n      <label>Title</label>\r\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Sport</label>\r\n      <select [(ngModel)]=\"sport\" name=\"sport\" class=\"form-control\" required>\r\n        <option value=\"\" [ngValue]=\"undefined\" disabled selected>---Please select---</option>\r\n        <option value=\"BASEBALL\">Baseball</option>\r\n        <option value=\"BASKETBALL\">Basketball</option>\r\n        <option value=\"FOOTBALL\">Football</option>\r\n        <option value=\"HANDBALL\">Handball</option>\r\n        <option value=\"SOCCER\">Soccer</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Date</label>\r\n      <input id=\"datefield\" type=\"date\" [(ngModel)]=\"date\" name=\"date\" class=\"form-control\"\r\n      placeholder=\"yyyy-MM-dd\" min=\"{{todate | date:'yyyy-MM-dd'}}\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Start Time</label>\r\n      <input type=\"time\" [(ngModel)]=\"startTime\" name=\"startTime\" class=\"form-control\"\r\n      placeholder=\"HH:mm:ss\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Duration</label>\r\n      <input type=\"number\" [(ngModel)]=\"duration\" name=\"duration\" class=\"form-control\"\r\n      min=\"1\" max=\"8\" placeholder=\"Please enter of the number of hours!\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Location</label>\r\n      <input type=\"text\" placeholder=\"Enter a Location\" name=\"location\" class=\"form-control\"\r\n      autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #search [formControl]=\"searchControl\" required >\r\n    </div>\r\n\r\n    <div style=\"display: none;\" class=\"form-group\">\r\n      <label>Latitude</label>\r\n      <input type=\"number\" value=\"latH\" name=\"latitude\" class=\"form-control\" required >\r\n    </div>\r\n\r\n    <div style=\"display: none;\" class=\"form-group\">\r\n      <label>Longitude</label>\r\n      <input type=\"number\" value=\"longH\" name=\"longitude\" class=\"form-control\" required >\r\n    </div>\r\n\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // For validation of the form submission
 // For Authorization of the form submission
 // For displaying alerts
 // For re-routing to another page
// Imports specifically related to Angular-Google Maps and Places API


var CreateComponent = /** @class */ (function () {
    // Any time a service or component is used, it needs to be injected into the
    // constructor as shown below
    function CreateComponent(validateService, // For validation of the form submission
        alertService, // For displaying alerts
        router, // For re-routing to another page
        mapsAPILoader, ngZone, authService // For Authorization of the form submission
    ) {
        this.validateService = validateService;
        this.alertService = alertService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.authService = authService; // For Authorization of the form submission
        // Line below gets today's date
        this.todate = new Date();
        // Line below is for the hidden latitude and Longitude
        this.latH = this.latitude;
        this.longH = this.longitude;
    }
    CreateComponent.prototype.ngOnInit = function () {
        // Code below is for the Angular-Google Places API
        var _this = this;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // Set latitude and longitude
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                });
            });
        });
    };
    CreateComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        console.log(this.title);
        console.log(this.sport);
        console.log(this.date);
        console.log(this.duration);
        console.log(this.startTime);
        console.log(this.latitude);
        console.log(this.longitude);
        var game = {
            title: this.title,
            sport: this.sport,
            date: this.date,
            duration: this.duration,
            startTime: this.startTime,
            latitude: this.latitude,
            longitude: this.longitude
        };
        // Code below checks that all the required fields are filled
        if (!this.validateService.validateCreate(game)) {
            this.alertService.danger("Please fill in ALL Fields!");
            return false;
        }
        // Create Game
        this.authService.createGame(game).subscribe(function (data) {
            if (data.success) {
                _this.alertService.success("You have successfully created a new Game!");
                _this.router.navigate(["/dashboard"]);
            }
            else {
                _this.alertService.danger("Your Game was not created!");
                _this.router.navigate(["/create"]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CreateComponent.prototype, "searchElementRef", void 0);
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/components/create/create.component.html"),
            styles: [__webpack_require__("./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] // For Authorization of the form submission
        ])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div *ngIf=\"user\">\r\n    <h2 class=\"page-header\">Welcome {{user.name}}</h2>\r\n  </div>\r\n  <a [routerLink]=\"['/create']\"><button class=\"btn btn-success pull-right\">Start a Game!</button></a>\r\n  <a [routerLink]=\"['/search']\"><button class=\"btn btn-success pull-right\">Search for a Game!</button></a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"jumbotron text-center\">\r\n    <h1>Welcome!</h1>\r\n    <p class=\"lead\">Join the game before you get there!</p>\r\n    <div>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h3>CREATE A GAME</h3>\r\n      <p>Create a game for now or in the future</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>SEARCH FOR A GAME</h3>\r\n      <p>Use our search function and find a game going on near you</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>JOIN A GAME</h3>\r\n      <p>Join any game before you even get to where it's happening</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h2 class=\"page-header\">Login</h2>\r\n\r\n  <form (submit)=\"onLoginSubmit()\">\r\n\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n    </div>\r\n\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n\r\n  </form>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.alertService.success('You are now logged in');
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.alertService.danger(data.msg);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__["b" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar.navbar-expand-lg.navbar-dark.bg-primary {\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Who's Got Next?</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"  aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n<!--\r\nThe code snippet \"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\"\r\nhandles the highlighting of the elements in the navbar\r\n-->\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\" [ngbCollapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\" (click)=\"isCollapsed = true\">Home</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" (click)=\"isCollapsed = true\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\" (click)=\"isCollapsed = true\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" (click)=\"isCollapsed = true\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\" (click)=\"isCollapsed = true\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/create']\" (click)=\"isCollapsed = true\">Create</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/search']\" (click)=\"isCollapsed = true\">Search</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" (click)=\"isCollapsed = true\" (click)=\"onLogoutClick()\" href='#'>Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SharedModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*Plus all your other modules*/
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.alertService.success('You are logged out');
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__["b" /* AlertService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div *ngIf=\"user\">\r\n    <br>\r\n    <h2 class=\"page-header\">{{user.name}}</h2>\r\n    <br>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        Username: {{user.username}}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Email: {{user.email}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h2 class=\"page-header\">Register</h2>\r\n  <form (submit)=\"onRegisterSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, alertService, authService, router) {
        this.validateService = validateService;
        this.alertService = alertService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.alertService.danger('Please fill in all fields');
            return false;
        }
        // Required email
        if (!this.validateService.validateEmail(user.email)) {
            this.alertService.danger('Please use a valid email');
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log('Here');
            if (data.success) {
                _this.alertService.success('You are now registered and can login');
                _this.router.navigate(['/login']);
            }
            else {
                _this.alertService.danger('Something went wrong');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_alerts__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/result/result.component.css":
/***/ (function(module, exports) {

module.exports = "/* Below is the style for the Google Maps */\r\nagm-map {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <h1>{{ title }}</h1>\n\n  <!-- this creates a google map on the page with the given lat/lng from -->\n  <!-- the component as the initial center of the map: ../../../../../images/sports_icons/baseball.png-->\n  <div class=\"form-group\">\n    <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n  </div>\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n    <agm-marker [iconUrl]=\"icon\" [latitude]=\"latitude\" [longitude]=\"longitude\" ></agm-marker>\n    <agm-marker [iconUrl]=\"icon1\" [latitude]=\"latitude1\" [longitude]=\"longitude1\" ></agm-marker>\n  </agm-map>\n\n  <div *ngIf=\"!userLocation\" class=\"\">\n    <p>NOOOO</p>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // For Authorization of the form submission
 // For displaying alerts
 // For re-routing to another page
// Below are the imports for the AGM-MapsAPILoader


var ResultComponent = /** @class */ (function () {
    function ResultComponent(alertService, // For displaying alerts
        router, // For re-routing to another page
        authService, // For Authorization of the form submission
        mapsAPILoader, ngZone) {
        this.alertService = alertService;
        this.router = router;
        this.authService = authService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Code below retrieves items from local storage and parses them back to
        // their orignal types
        // NOTE: In order to find the values of and info about "games" and "userLocation,"
        // go to the search page and run a query
        // JSON.parse(localStorage.getItem("games")); JSON.parse(localStorage.getItem("userLocation"));
        this.authService.getResult().subscribe(function (results) {
            _this.games = results.games;
            _this.userLocation = results.userLocation;
        }, function (err) {
            console.log(err);
            return false;
        });
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 40;
        this.longitude = -73;
        this.icon = "https://maps.google.com/mapfiles/kml/paddle/blu-circle.png";
        this.latitude1 = 34.8282;
        this.longitude1 = -96.5795;
        this.icon1 = {
            url: __webpack_require__("../images/sports_icons/baseball.png"),
            scaledSize: {
                height: 30,
                width: 30
            }
        };
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]();
        //set current position
        // this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    ResultComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ResultComponent.prototype, "searchElementRef", void 0);
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__("./src/app/components/result/result.component.html"),
            styles: [__webpack_require__("./src/app/components/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_alerts__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h2 class=\"page-header\">Search for A Game</h2>\r\n\r\n  <form (submit)=\"onSearchSubmit()\">\r\n\r\n    <div class=\"form-group\">\r\n      <label>Sport</label>\r\n      <select [(ngModel)]=\"sport\" name=\"sport\" class=\"form-control\" required>\r\n        <option value=\"\" [ngValue]=\"undefined\" disabled selected>---Please select---</option>\r\n        <option value=\"BASEBALL\">Baseball</option>\r\n        <option value=\"BASKETBALL\">Basketball</option>\r\n        <option value=\"FOOTBALL\">Football</option>\r\n        <option value=\"HANDBALL\">Handball</option>\r\n        <option value=\"SOCCER\">Soccer</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Date</label>\r\n      <input id=\"datefield\" type=\"date\" [(ngModel)]=\"date\" name=\"date\" class=\"form-control\"\r\n      placeholder=\"yyyy-MM-dd\" min=\"{{todate | date:'yyyy-MM-dd'}}\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Location</label>\r\n      <input type=\"text\" placeholder=\"Enter the location from which you will travel!\" name=\"location\" class=\"form-control\"\r\n      autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #search [formControl]=\"searchControl\" required >\r\n    </div>\r\n\r\n    <div style=\"display: none;\" class=\"form-group\">\r\n      <label>Latitude</label>\r\n      <input type=\"number\" value=\"latH\" name=\"latitude\" class=\"form-control\" required >\r\n    </div>\r\n\r\n    <div style=\"display: none;\" class=\"form-group\">\r\n      <label>Longitude</label>\r\n      <input type=\"number\" value=\"longH\" name=\"longitude\" class=\"form-control\" required >\r\n    </div>\r\n\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_alerts__ = __webpack_require__("./node_modules/ngx-alerts/ngx-alerts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // For Authorization of the form submission
 // For displaying alerts
 // For re-routing to another page
// Imports specifically related to Angular-Google Maps and Places API


var SearchComponent = /** @class */ (function () {
    // Any time a service or component is used, it needs to be injected into the
    // constructor as shown below
    function SearchComponent(alertService, // For displaying alerts
        router, // For re-routing to another page
        mapsAPILoader, ngZone, authService // For Authorization of the form submission
    ) {
        this.alertService = alertService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.authService = authService; // For Authorization of the form submission
        // Line below gets today's date
        this.todate = new Date();
        // Line below is for the hidden latitude and Longitude
        this.latH = this.latitude;
        this.longH = this.longitude;
    }
    SearchComponent.prototype.ngOnInit = function () {
        // Code below is for the Angular-Google Places API
        var _this = this;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // Set latitude and longitude
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                });
            });
        });
    };
    SearchComponent.prototype.onSearchSubmit = function () {
        var _this = this;
        console.log(this.sport);
        console.log(this.date);
        console.log(this.latitude);
        console.log(this.longitude);
        var query = {
            sport: this.sport,
            date: this.date,
            latitude: this.latitude,
            longitude: this.longitude
        };
        // Calls the backend authentication function for Search Functionality
        this.authService.authenticateSearch(query).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeGameData(data.results.games);
                _this.authService.storeUserLocation(data.results.userLocation);
                _this.alertService.success(data.msg);
                console.log(data.msg);
                _this.router.navigate(["/result"]);
            }
            else {
                _this.alertService.danger(data.msg);
                console.log(data.msg);
                _this.router.navigate(["/search"]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SearchComponent.prototype, "searchElementRef", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_alerts__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] // For Authorization of the form submission
        ])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
// The purpose of guards is to prevent content such as the dashboard and profile
// pages from being accessed by people who are not logged in!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Redirects user to login page if they try to access a restricted page
    // while logged out
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
// The ts file makes all the requests to our backend api
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Function below reaches into our backend API and makes the post request to register
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:5000/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Function below fetches token from local-storage so that it
    // may be used in the header of restricted pages
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.games = null;
        this.userLocation = null;
        localStorage.clear();
    };
    // Function below reaches into our backend API and makes the post request to create
    AuthService.prototype.createGame = function (game) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/games/create', game, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Function below reaches into our backend API and makes the post request to search
    AuthService.prototype.authenticateSearch = function (results) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/games/search', results, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Function below stores to local-storage, the array of games that is passed-in
    AuthService.prototype.storeGameData = function (games) {
        localStorage.setItem("games", JSON.stringify(games));
        this.games = games;
    };
    // Function below stores to local-storage, the object of containing the
    // user's entered location after a search
    AuthService.prototype.storeUserLocation = function (userLocation) {
        localStorage.setItem("userLocation", JSON.stringify(userLocation));
        this.userLocation = userLocation;
    };
    // Function below handles getting all the games that result from the search page
    AuthService.prototype.getResult = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:5000/games/result', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// This file performs simple form validation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        // Returns false if any of the fields in the "register.component.html" page is undefined
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // Makes sure that the value entered by the user is actually an email by using Regular Expressions (RE)
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateCreate = function (game) {
        // Returns false if any of the fields in the "create.component.html" page is undefined
        if (game.title == undefined || game.sport == undefined || game.date == undefined || game.duration == undefined
            || game.startTime == undefined || game.latitude == undefined || game.longitude == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map