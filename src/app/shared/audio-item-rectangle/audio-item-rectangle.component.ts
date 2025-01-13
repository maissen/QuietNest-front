import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent {
  @Input() speech: any;

  constructor(
    public playingSpeechService: PlayingSpeechService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService
  ) { }

  displaySpeechBanner() {
    this.playingSpeechService.setSelectedSpeechData(this.speech);
    this.playingSpeechService.isPlaying();
  }
}
