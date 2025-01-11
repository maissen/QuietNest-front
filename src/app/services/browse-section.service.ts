import { Injectable } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  constructor(
    private speechesService: SpeechesService
  ) { }

  getAllSpeeches(): any[] {
    return this.speechesService.getAllSpeeches();
  }
}
