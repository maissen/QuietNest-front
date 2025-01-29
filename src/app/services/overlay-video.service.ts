import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayVideoService {

  isOpened: boolean = false;

  constructor() { }
}
