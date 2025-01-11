import { Injectable } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  private narrators: any[] = [];
  private categories: any[] = [];

  private speechesNarratorsCategories: any[] = [];

  constructor(
    private scenesService: ScenesService,
    private speechesService: SpeechesService
  ) { }

  getAllSpeeches(): any[] {
    return this.speechesService.getAllSpeeches();
  }

  getActiveScene(): Observable<any> {
    return this.scenesService.getActiveScene();
  }
}
