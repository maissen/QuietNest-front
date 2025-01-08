import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlayingAudioService } from './playing-audio.service';
import { filter } from 'rxjs/operators';
import { CreateSectionLogicService } from './create-section-logic.service';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
  screenWidth: number = window.innerWidth;
  expandConent: boolean = false;
  private currentUrl: string = '';

  constructor(
    private router: Router,
    private playingAudioService: PlayingAudioService,
    private createSectionLogic: CreateSectionLogicService
  ) {
    this.initResizeListener();
    this.subscribeToRouterEvents();
  }

  getExpandSheetContent(): boolean { return this.expandConent }

  toggleExpandSheetContent() { 
    this.expandConent = !this.expandConent;
  
    // Update the body overflow based on the expandContent state
    if (this.expandConent && this.createSectionLogic.getActiveSounds().length > 0) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  
    // Log the updated overflow value
    this.toggleDocumentScroll();
  }
  
  toggleDocumentScroll() {
    const overflow = window.getComputedStyle(document.body).overflowY;
    console.log(overflow);
  }
  

  private initResizeListener(): void {
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    this.screenWidth = window.innerWidth;
    if(this.getScreenWidth() >= 500 ) {
      document.body.style.overflowY = 'auto';
    }
  }

  private subscribeToRouterEvents(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.url;
    });
  }

  showBottomSheetWide(): boolean {
    return this.screenWidth >= 500 && this.isCreateSection();
  }

  showBottomSheetSmall(): boolean {
    return this.screenWidth < 500 && this.isCreateSection();
  }

  showPlayingAudioBanner(): boolean {
    return !this.isCreateSection() && this.playingAudioService.isPlaying();
  }

  isCreateSection(): boolean {
    return this.currentUrl.startsWith('/app/create');
  }

  getScreenWidth(): number { return this.screenWidth }

  

}
