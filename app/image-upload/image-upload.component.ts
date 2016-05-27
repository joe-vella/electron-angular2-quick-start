import {Component}      from '@angular/core';
import {NgFor}          from '@angular/common';

@Component({
  selector: 'image-upload',
  templateUrl: 'app/image-upload/image-upload.component.html' 
})

export class ImageUploadComponent {

  images:Array<Object> = [];

  constructor() {
    console.log('ImageUploadComponent');
  }

  handleDrop(e) {
    
    let files:File = e.dataTransfer.files;
        
    Object.keys(files).forEach((key) => {
      if(files[key].type === "image/png" || files[key].type === "image/jpeg") {
        this.images.push(files[key]);
      }
      else {
        alert("File must be a PNG or JPEG!");
      }
    });

    return false;
  }
}
