import { Component } from '@angular/core';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-playing-audio-banner',
  templateUrl: './playing-audio-banner.component.html',
  styleUrls: ['./playing-audio-banner.component.scss']
})
export class PlayingAudioBannerComponent {
  // selectedAudioData: any = null;  // This will store the audio data directly

  constructor(public playingAudioService: PlayingAudioService) {}

  ngOnInit() {
    
  }

}
