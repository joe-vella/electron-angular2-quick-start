
import { Component }	from '@angular/core';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [ImageUploadComponent],
	providers: []
})

export class AppComponent {
    
    constructor() {
        console.log('AppComponent');
    }
}
