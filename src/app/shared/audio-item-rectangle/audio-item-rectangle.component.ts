import { Component, Input, OnInit } from '@angular/core';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent {
  @Input() audio: any;

  constructor(
    private playingAudioService: PlayingAudioService,
  ) {}

  onAudioClick() {
    this.playingAudioService.setSelectedAudioData(this.audio);
    this.playingAudioService.isPlaying()

  }
}
