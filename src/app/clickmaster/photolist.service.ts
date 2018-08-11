import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotolistService {
  thumbsList: string[] = [
    'assets/images/click/thumbs/06.jpg',
    'assets/images/click/thumbs/01.jpg',
    'assets/images/click/thumbs/02.jpg',
    'assets/images/click/thumbs/03.jpg',
    'assets/images/click/thumbs/04.jpg',
    'assets/images/click/thumbs/05.jpg',
    'assets/images/click/thumbs/07.jpg',
    'assets/images/click/thumbs/08.jpg',
    'assets/images/click/thumbs/09.jpg',
    'assets/images/click/thumbs/10.jpg',
    'assets/images/click/thumbs/11.jpg',
    'assets/images/click/thumbs/12.jpg'
  ];

  fullList: string[] = [
    'assets/images/click/fulls/06.jpg',
    'assets/images/click/fulls/01.jpg',
    'assets/images/click/fulls/02.jpg',
    'assets/images/click/fulls/03.jpg',
    'assets/images/click/fulls/04.jpg',
    'assets/images/click/fulls/05.jpg',
    'assets/images/click/fulls/07.jpg',
    'assets/images/click/fulls/08.jpg',
    'assets/images/click/fulls/09.jpg',
    'assets/images/click/fulls/10.jpg',
    'assets/images/click/fulls/11.jpg',
    'assets/images/click/fulls/12.jpg'
  ];

  public selectedImage = new Subject<number>();

  constructor() { }

  getThumbsList() {
    return this.thumbsList;
  }

  getFullList() {
    return this.fullList;
  }
}
