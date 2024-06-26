# Angular image-uploader-next

[![npm version](https://badge.fury.io/js/ngx-image-uploader-next.svg)](https://badge.fury.io/js/ngx-image-uploader-next)
![Dependencies](https://david-dm.org/ogix/ngx-image-uploader-next.svg)

This is a fork of [ngx-image-updoader](https://www.npmjs.com/package/ngx-image-uploader).
Now supports Angular 17.

Angular image upload component with a preview and cropping features.

### Demo

See demo here: [demo](https://stackblitz.com/github/ogix/ngx-image-uploader)

### Install

```
npm install ngx-image-uploader-next --save
```

### Usage

Add image uploader module to your module's `imports`

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';

import { ImageUploaderModule } from 'ngx-image-uploader-next';

@NgModule({
    imports: [BrowserModule, ImageUploaderModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Use it in your component

```js
import { Component } from '@angular/core';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader';

@Component({
  selector: 'example-app',
  template: '<ngx-image-uploader [options]="options" (upload)="onUpload($event)"></ngx-image-uploader>'
})
export class AppComponent {
  options: ImageUploaderOptions = {
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      uploadUrl: 'http://some-server.com/upload',
      allowedImageTypes: ['image/png', 'image/jpeg'],
      maxImageSize: 3
  };

  onUpload(file: FileQueueObject) {
    console.log(file.response);
  }
}

```

### License

[MIT](https://tldrlegal.com/license/mit-license) © 2020 [Alexey Vladimirov](https://github.com/newvladimirov)

[MIT](https://tldrlegal.com/license/mit-license) © [Olegas Gončarovas](https://github.com/ogix)
