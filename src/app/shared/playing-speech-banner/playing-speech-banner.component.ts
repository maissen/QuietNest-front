import { Component, OnInit } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-playing-speech-banner',
  templateUrl: './playing-speech-banner.component.html',
  styleUrls: ['./playing-speech-banner.component.scss']
})
export class PlayingSpeechBannerComponent {

  constructor(
    public service: PlayingSpeechService,
    public bottomSheetService: BottomSheetService
  ) {}

}
