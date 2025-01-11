import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent {
  @Input() audio: any;

  constructor(
    private playingSpeechService: PlayingSpeechService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService
  ) { }

  onAudioClick() {
    this.playingSpeechService.setSelectedAudioData(this.audio);
    this.playingSpeechService.isPlaying();
  }
}
