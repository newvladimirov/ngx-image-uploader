import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageUploaderModule } from 'projects/ngx-image-uploader-next/src/lib/image-uploader.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ImageUploaderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
