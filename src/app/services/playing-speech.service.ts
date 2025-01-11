import { Injectable } from '@angular/core';
import { SpeechesService } from './speeches.service';
import { CategoriesService } from './categories.service';
import { NarratorsService } from './narrators.service';

@Injectable({
  providedIn: 'root'
})
export class PlayingSpeechService {
  private speech: any = null;

  constructor(
    private categoriesService: CategoriesService,
    private narratorseService: NarratorsService
  ) {}

  setSelectedSpeechData(speech: any) {
    this.speech = speech;
    this.speech.narrator = this.narratorseService.getNarratorById(this.speech);
    this.speech.category = this.categoriesService.getCategoryById(this.speech);
    console.log(this.speech);
  }

  getSpeech(): any { 
    return this.speech;
  }

  getSelectedSpeechData(): any {
    return this.speech;
  }

  clearSelectedSpeechData() {
    this.speech = null;
    console.log('after clearance : ' + this.speech);
  }

  isPlaying() {
    return this.speech;
  }
}
