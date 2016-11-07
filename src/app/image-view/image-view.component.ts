import { Component, OnInit } from '@angular/core';

import {imageModel} from '../models/imageModel';

@Component({
  selector: 'image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css'],
  inputs: ['image']
})
export class ImageViewComponent implements OnInit {

   image:imageModel;
   constructor() { }

   ngOnInit() {
   }
}
