import { Injectable } from '@angular/core';
import { SpeechesService } from './speeches.service';

@Injectable({
  providedIn: 'root'
})
export class ExploreSectionService {

  constructor(
    private speechService: SpeechesService
  ) { }

  getAllSpeches(): any[] {
    return this.speechService.getAllSpeches();
  }
}
