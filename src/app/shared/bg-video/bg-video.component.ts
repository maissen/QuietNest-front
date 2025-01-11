import { Component, OnInit } from '@angular/core';
import { ScenesService } from 'src/app/services/scenes.service';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss']
})
export class BgVideoComponent {

  constructor(public scenesService: ScenesService) {}

}
