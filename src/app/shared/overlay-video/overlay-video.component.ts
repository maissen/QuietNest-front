import { Component } from '@angular/core';
import { OverlayVideoService } from 'src/app/services/overlay-video.service';
import { ScenesService } from 'src/app/services/scenes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overlay-video',
  templateUrl: './overlay-video.component.html',
  styleUrls: ['./overlay-video.component.scss']
})
export class OverlayVideoComponent {

  constructor(
    public scenesService: ScenesService,
    public service: OverlayVideoService
  ) {}

}
