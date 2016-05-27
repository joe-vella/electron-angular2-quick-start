"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
require('rxjs/Rx');
var app_component_1 = require('./app.component');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=index.js.map