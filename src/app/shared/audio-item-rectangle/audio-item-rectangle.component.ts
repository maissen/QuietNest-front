import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
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
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService
  ) { }

  onAudioClick() {
    this.playingAudioService.setSelectedAudioData(this.audio);
    this.playingAudioService.isPlaying();
  }
}
