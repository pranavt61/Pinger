import { Component } from '@angular/core';

import {imageModel} from './models/imageModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   images:imageModel[];

   constructor()
   {
      this.images = [];
   }

   addImageToDatabase(image:imageModel)
   {
      this.images.push(image);
   }
}
