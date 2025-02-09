import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveSoundsHtmlAudioService } from './active-sounds-html-audio.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {

  public activeSoundsPaused: boolean = false;

  screenWidth: number = window.innerWidth;
  showOverlayContent: boolean = false;
  private currentUrl: string = '';
  
  constructor(
    private router: Router,
  ) {
    this.updateCurrentUrl();
  }

  toggleOverLayContent(): void {
    this.showOverlayContent = !this.showOverlayContent;
    document.body.classList.toggle('overflow_content_hide');
  }

  private updateCurrentUrl(): void {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  isCreateSection(): boolean {
    return this.currentUrl.startsWith('/app/create');
  }
}
