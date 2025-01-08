import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlayingAudioService } from './playing-audio.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowHideComponentsService {

  screenWidth: number = window.innerWidth;
  soundsArePlaying: boolean = false; //? for active sounds in create section
  private currentUrl: string = '';

  constructor(
    private router: Router,
    private playingAudioService: PlayingAudioService
  ) {
    this.initResizeListener();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.url;
    });
  }

  private initResizeListener(): void {
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    this.screenWidth = window.innerWidth;
  }

  showBottomSheetWide(): boolean {
    return this.screenWidth > 500 && this.isCreateSection() && this.soundsArePlaying;
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
