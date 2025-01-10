import { Injectable } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';
import { NarratorsService } from './narrators.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  private narrators: any[] = [];
  private narratorsSubscription: Subscription | null = null;

  constructor(
    private scenesService: ScenesService,
    private speechService: SpeechesService,
    private narratorsService: NarratorsService
  ) {
    this.subscribeToNarrators();
  }

  getSpeechesList(): any[] {
    return this.speechService.getAllSpeches();
  }

  getActiveScene(): Observable<any> {
    return this.scenesService.getActiveScene();
  }

  private subscribeToNarrators(): void {
    this.narratorsSubscription = this.narratorsService.allNarratorsList().subscribe({
      next: (narrators) => {
        this.narrators = narrators;
      },
      error: (err) => console.error('Failed to fetch narrators in BrowseSectionService:', err)
    });
  }

  getAllNarrators(): any[] {
    return this.narrators;
  }
}
