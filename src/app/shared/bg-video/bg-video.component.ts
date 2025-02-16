import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScenesService } from 'src/app/services/scenes.service';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss']
})
export class BgVideoComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(public scenesService: ScenesService) {}

  ngAfterViewInit() {
    if (this.videoElement) {
      this.videoElement.nativeElement.muted = true;
      this.videoElement.nativeElement.play().catch(err => {
        console.warn('Autoplay prevented:', err);
      });
    }
  }
}
