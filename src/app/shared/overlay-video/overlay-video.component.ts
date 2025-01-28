import { Component } from '@angular/core';
import { ScenesService } from 'src/app/services/scenes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overlay-video',
  templateUrl: './overlay-video.component.html',
  styleUrls: ['./overlay-video.component.scss']
})
export class OverlayVideoComponent {

  isOpened: boolean = false;

  constructor(
    public user: UserService,
    public scenesService: ScenesService
  ) {}

}
