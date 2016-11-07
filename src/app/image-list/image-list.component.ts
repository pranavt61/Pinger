import { Component, OnInit } from '@angular/core';

import {imageModel} from '../models/imageModel';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  inputs: ['images']
})
export class ImageListComponent implements OnInit {

   images:imageModel[];
   constructor()
   {
   }

   ngOnInit() {
   }

}
