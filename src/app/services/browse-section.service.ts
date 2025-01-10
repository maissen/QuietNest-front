import { Injectable } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  constructor(
    private scenesService: ScenesService,
    private speechService: SpeechesService
  ) { }

  getSpeechesList() {
    return this.speechService.getAllSpeches();
  }

  getActiveScene() {
    return this.scenesService.getActiveScene();
  }
}
