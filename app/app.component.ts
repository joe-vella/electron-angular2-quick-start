
import { Component }	from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [],
	providers: []
})

export class AppComponent {
    
    constructor() {
        console.log('AppComponent');
    }
}
