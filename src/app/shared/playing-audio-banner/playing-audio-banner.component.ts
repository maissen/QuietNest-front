import { Component } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-playing-audio-banner',
  templateUrl: './playing-audio-banner.component.html',
  styleUrls: ['./playing-audio-banner.component.scss']
})
export class PlayingAudioBannerComponent {

  constructor(
    public playingAudioService: PlayingAudioService,
    public bottomSheetService: BottomSheetService
  ) {}

  ngOnInit() {
    
  }

}
