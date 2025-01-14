import { Component } from '@angular/core';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-playlist-section',
  templateUrl: './playlist-section.component.html',
  styleUrls: ['./playlist-section.component.scss']
})
export class PlaylistSectionComponent {

  constructor(
    public service: PlayingSpeechService
  ) {}

}
