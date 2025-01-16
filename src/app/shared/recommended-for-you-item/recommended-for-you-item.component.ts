import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-recommended-for-you-item',
  templateUrl: './recommended-for-you-item.component.html',
  styleUrls: ['./recommended-for-you-item.component.scss']
})
export class RecommendedForYouItemComponent {
  @Input() data: any;

  constructor(
    public service: SpeechesService,
    public categoriesService: CategoriesService,
    public narratorsService: NarratorsService,
  ) { }

  displaySpeechBanner() {
    this.service.setSelectedSpeechData(this.data);
    this.service.isPlaying();
  }

};
