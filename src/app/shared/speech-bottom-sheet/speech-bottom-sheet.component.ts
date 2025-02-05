import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PlayingSpeechControlsService } from 'src/app/services/playing-speech-controls.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-speech-bottom-sheet',
  templateUrl: './speech-bottom-sheet.component.html',
  styleUrls: ['./speech-bottom-sheet.component.scss']
})
export class SpeechBottomSheetComponent {

  constructor(
    public playingSpeechControl: PlayingSpeechControlsService,
    public speechesService: SpeechesService,
    public app: AppService,
    public playlistsService: PlaylistsService
  ) { }

  

}
