import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotolistService } from '../photolist.service';

@Component({
  selector: 'app-photolistdisplayclick',
  templateUrl: './photolistdisplayclick.component.html',
  styleUrls: ['./photolistdisplayclick.component.scss']
})
export class PhotolistdisplayclickComponent implements OnInit, OnDestroy {
  thumbs = [];
  constructor(private photolistService: PhotolistService) { }

  ngOnInit() {
    this.thumbs = this.photolistService.getThumbsList();
  }

  imgChoice(index: number) {
    this.photolistService.selectedImage.next(index);
  }

  ngOnDestroy() {
    this.photolistService.selectedImage.unsubscribe();
  }

}
