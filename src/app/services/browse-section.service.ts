import { Injectable } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  constructor(
    private scenesService: ScenesService,
    private speechService: SpeechesService
  ) { }

  getSpeechesList(): any[] {
    return this.speechService.getAllSpeches();
  }

  getActiveScene(): Observable<any> {
    return this.scenesService.getActiveScene();
  }
}
