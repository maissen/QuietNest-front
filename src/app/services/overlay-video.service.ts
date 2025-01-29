import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayVideoService {

  isOpened: boolean = false;
  checkbox_recent_speech: boolean = true;
  checkbox_video_overlay: boolean = true;
  
  constructor() { }
}
