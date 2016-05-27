
import { bootstrap }				            from '@angular/platform-browser-dynamic';
import { provide, enableProdMode, Component }	from '@angular/core';
import { ROUTER_PROVIDERS }			            from '@angular/router-deprecated';
import 'rxjs/Rx';

import { AppComponent }				            from './app.component';

enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS]);