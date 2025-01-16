import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-audio-item-square',
  templateUrl: './audio-item-square.component.html',
  styleUrls: ['./audio-item-square.component.scss']
})
export class AudioItemSquareComponent {
  @Input() soundMixture: any;
  
  constructor(
    public playingSpeechService: SpeechesService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService
  ) {}
}
