"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ImageUploadComponent = (function () {
    function ImageUploadComponent() {
        this.images = [];
        console.log('ImageUploadComponent');
    }
    ImageUploadComponent.prototype.handleDrop = function (e) {
        var _this = this;
        var files = e.dataTransfer.files;
        Object.keys(files).forEach(function (key) {
            if (files[key].type === "image/png" || files[key].type === "image/jpeg") {
                _this.images.push(files[key]);
            }
            else {
                alert("File must be a PNG or JPEG!");
            }
        });
        return false;
    };
    ImageUploadComponent = __decorate([
        core_1.Component({
            selector: 'image-upload',
            templateUrl: 'app/image-upload/image-upload.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());
exports.ImageUploadComponent = ImageUploadComponent;
//# sourceMappingURL=image-upload.component.js.map