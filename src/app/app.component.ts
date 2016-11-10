import { Component } from '@angular/core';
import { SidebarModule } from 'ng2-sidebar';

import {imageModel} from './models/imageModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   images:imageModel[];
   private _sideBar: boolean = false;

   constructor()
   {
      this.images = [];
   }
   navBarToggle()
   {
      this._sideBar = !(this._sideBar);
      console.log(this._sideBar)
   }
   navBarClose()
   {
      console.log('close');
      this._sideBar = false;
   }
   addImageToDatabase(image:imageModel)
   {
      this.images.push(image);
   }
}
