(function (global) {

   
    //map tells the System loader where to look for things
    var map = {
        'app': 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular'
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'index.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'components': { defaultExtension: 'js' },
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/upgrade',
    ];

  
    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        transpiler: 'typescript',
        typescriptOptions: {
            emitDecoratorMetadata: true
        },
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/