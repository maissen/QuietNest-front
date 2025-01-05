import { Component, OnInit } from '@angular/core';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-played-audio-banner',
  templateUrl: './played-audio-banner.component.html',
  styleUrls: ['./played-audio-banner.component.scss']
})
export class PlayedAudioBannerComponent implements OnInit {
  selectedAudioData: any = null;  // This will store the audio data directly

  constructor(private playingAudioService: PlayingAudioService) {}

  ngOnInit() {
    // Subscribe to the audio data and update the component when the data changes
    this.playingAudioService.selectedAudioData$.subscribe(audioData => {
      this.selectedAudioData = audioData;
      if (this.selectedAudioData) {
        // Do something with the data, for example, update the component's view
        console.log('Currently selected audio:', this.selectedAudioData);
      }
    });
  }
}
