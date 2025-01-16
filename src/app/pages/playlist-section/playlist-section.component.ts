import { Component } from '@angular/core';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-playlist-section',
  templateUrl: './playlist-section.component.html',
  styleUrls: ['./playlist-section.component.scss']
})
export class PlaylistSectionComponent {

  constructor(
    public service: SpeechesService
  ) {}

}
