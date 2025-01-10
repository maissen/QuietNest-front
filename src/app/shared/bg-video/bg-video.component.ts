import { Component, OnInit } from '@angular/core';
import { ScenesService } from 'src/app/services/scenes.service';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss']
})
export class BgVideoComponent implements OnInit {

  activeScene: any = null;

  constructor(private scenesService: ScenesService) { }

  ngOnInit(): void {
    this.subscribeToActiveScene();
  }

  private subscribeToActiveScene(): void {
    this.scenesService.getActiveScene().subscribe(scene => {
      this.activeScene = scene;
    });
  }
}
