import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlayingAudioService } from './playing-audio.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
  screenWidth: number = window.innerWidth;
  soundsArePlaying: boolean = false; //? for active sounds in create section
  private currentUrl: string = '';

  constructor(
    private router: Router,
    private playingAudioService: PlayingAudioService
  ) {
    this.initResizeListener();
    this.subscribeToRouterEvents();
  }

  private initResizeListener(): void {
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    this.screenWidth = window.innerWidth;
  }

  private subscribeToRouterEvents(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.url;
    });
  }

  showBottomSheetWide(): boolean {
    return this.screenWidth > 500 && this.isCreateSection() && true;
  }

  showBottomSheetsmall(): boolean {
    return this.screenWidth <= 500 && this.isCreateSection() && this.soundsArePlaying;
  }

  showPlayingAudioBanner(): boolean {
    return !this.isCreateSection() && this.playingAudioService.isPlaying();
  }

  private isCreateSection(): boolean {
    return this.currentUrl.startsWith('/app/create');
  }
}
