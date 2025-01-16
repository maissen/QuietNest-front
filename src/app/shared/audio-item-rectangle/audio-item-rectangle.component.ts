import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent {
  @Input() speech: any;

  constructor(
    public playingSpeechService: SpeechesService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService
  ) { }

  displaySpeechBanner() {
    this.playingSpeechService.setSelectedSpeechData(this.speech);
    this.playingSpeechService.isPlaying();
  }
}
