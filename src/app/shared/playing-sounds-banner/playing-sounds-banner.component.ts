import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { PlayingSpeechControlsService } from 'src/app/services/playing-speech-controls.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-playing-sounds-banner',
  templateUrl: './playing-sounds-banner.component.html',
  styleUrls: ['./playing-sounds-banner.component.scss']
})
export class PlayingSoundsBannerComponent {

  constructor(
    public service: CreateSectionService,
    public timerService: TimerService,
    public soundsService: SoundsService,
    public speechesService: SpeechesService,
    public playingSpeechControl: PlayingSpeechControlsService,
    public playlistsService: PlaylistsService
  ) {}

}
