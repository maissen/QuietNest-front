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
    public service: SpeechesService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService
  ) { }

  displaySpeechBanner() {
    this.service.setSelectedSpeechData(this.speech);
    this.service.isPlaying();
  }
}
