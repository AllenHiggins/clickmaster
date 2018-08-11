import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotolistService } from '../photolist.service';

@Component({
  selector: 'app-mainclick',
  templateUrl: './mainclick.component.html',
  styleUrls: ['./mainclick.component.scss']
})
export class MainclickComponent implements OnInit, OnDestroy {
  images: string[] = [];
  thumbs = [];
  close: boolean;
  index = 0;
  constructor( private photolistService: PhotolistService) { }

  ngOnInit() {
    this.close = true;
    this.thumbs = this.photolistService.getThumbsList();
    this.images = this.photolistService.getFullList();
    this.photolistService.selectedImage.subscribe(index => {
      this.index = index;
      this.closePanel();
    });
  }

  closePanel() {
    this.close = !this.close;
  }

  imgChoice(index: number) {
    this.photolistService.selectedImage.next(index);
  }

  changeImgWithArrows(direction: string) {
    const end = this.images.length - 1;
    if ( direction === 'right') {
      if ( this.index + 1 > end ) {
        this.index = 0;
      } else {
        this.index++;
      }
    } else {
      if ( this.index - 1 < 0 ) {
        this.index = end;
      } else {
        this.index--;
      }
    }
  }

  ngOnDestroy() {
    this.photolistService.selectedImage.unsubscribe();
  }

}
