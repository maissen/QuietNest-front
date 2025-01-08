import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlayingAudioService } from './playing-audio.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
  screenWidth: number = window.innerWidth;
  expandConent: boolean = false;
  private currentUrl: string = '';

  constructor(
    private router: Router,
    private playingAudioService: PlayingAudioService
  ) {
    this.initResizeListener();
    this.subscribeToRouterEvents();
  }

  getExpandSheetContent(): boolean { return this.expandConent }

  toggleExpandSheetContent() { 
    this.expandConent = !this.expandConent
    if(this.getScreenWidth() < 500 ) {
      document.body.style.overflowY = 'hidden';
      if(!this.expandConent) document.body.style.overflowY = 'scroll'; 
    }
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

  showBottomSheetsmall(): boolean {
    return this.screenWidth <= 500 && this.isCreateSection() && true;
  }

  showPlayingAudioBanner(): boolean {
    return !this.isCreateSection() && this.playingAudioService.isPlaying();
  }

  isCreateSection(): boolean {
    return this.currentUrl.startsWith('/app/create');
  }

  getScreenWidth(): number { return this.screenWidth }

}
