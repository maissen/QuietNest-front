import { Component, OnInit } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-playing-speech-banner',
  templateUrl: './playing-speech-banner.component.html',
  styleUrls: ['./playing-speech-banner.component.scss']
})
export class PlayingSpeechBannerComponent {

  constructor(
    public service: PlayingSpeechService,
    public createSectionService: CreateSectionService
  ) {}

}
