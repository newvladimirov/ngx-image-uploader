import { Component } from '@angular/core';
import { ImageUploaderOptions } from 'projects/ngx-image-uploader-next/src/lib/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-image-uploader';
  imageOptions: ImageUploaderOptions = {
    uploadUrl: 'https://fancy-image-uploader-demo.azurewebsites.net/api/demo/upload',
    cropEnabled: true,
    thumbnailResizeMode: 'fill',
    autoUpload: false,
    resizeOnLoad: false,
    thumbnailWidth: 320,
    thumbnailHeight: 200
  };
}
