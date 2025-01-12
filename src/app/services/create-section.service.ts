import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SoundsService } from './sounds.service';
import { PlayingSpeechService } from './playing-speech.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {

  private activeSounds: any[] = [];
  private pauseActiveSounds: boolean = false;
  private ActiveSoundIDRefs: string[] = [];

  screenWidth: number = window.innerWidth;
  expandContent: boolean = false;
  private currentUrl: string = '';

  constructor(
    private soundsService: SoundsService,
    private playingSpeechService: PlayingSpeechService,
    private router: Router
  ) {
    this.initResizeListener();
    this.updateCurrentUrl();
  }

  toggleActiveSoundIDRef(idref: string): void {
    const index = this.ActiveSoundIDRefs.indexOf(idref);
    
    if (index === -1) {
      this.ActiveSoundIDRefs.push(idref);
    } else {
      this.ActiveSoundIDRefs.splice(index, 1);
    }

    console.log(this.ActiveSoundIDRefs);
  }
  

  // Update the current URL whenever it changes
  private updateCurrentUrl(): void {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  getPauseActiveSounds(): boolean {
    return this.pauseActiveSounds;
  }

  togglePauseActiveSounds(): void {
    this.pauseActiveSounds = !this.pauseActiveSounds;
  
    this.ActiveSoundIDRefs.forEach(id => {
      const audioElement = document.querySelector<HTMLAudioElement>(id);
      
      if (audioElement) {
        if (this.pauseActiveSounds) {
          audioElement.pause();
          console.log(id + ' is paused')
        } 
        else {
          audioElement.play();
        }
      }
    });
  }
  

  // Toggle the sound in the active list
  toggleActiveSound(sound: any): void {
    const index = this.activeSounds.indexOf(sound);

    if (index === -1) {
      this.activeSounds.push(sound);
    } else {
      this.activeSounds.splice(index, 1);
    }

    if (this.activeSounds.length === 0) {
      this.toggleExpandSheetContent();
    }
  }

  isSoundActive(sound: any): boolean {
    return this.getActiveSounds().includes(sound);
  }

  updateActiveSoundVolume(activeSound: any, volume: number) {
    this.getActiveSounds().filter((sound) => {
      if(sound.id == activeSound.id) {
        sound.volume = volume;
      }
    })

    console.log(activeSound.name + ',Volume updated ' + activeSound.volume)
  }

  // Get all active sounds
  getActiveSounds(): any[] {
    return this.activeSounds;
  }

  // Get all categories from sounds
  getCategories(): any[] {
    return this.soundsService.getCategories();
  }

  // Get sounds from a specific category
  getSoundsOfCategory(category: any): any[] {
    return this.soundsService.getSounds().filter(sound => sound.sound_category_id === category.id);
  }

  // Get whether the bottom sheet should be wide
  showBottomSheetWide(): boolean {
    return this.screenWidth >= 500 && this.getActiveSounds().length > 0 && this.isCreateSection();
  }

  // Get whether the bottom sheet should be small
  showBottomSheetSmall(): boolean {
    return this.screenWidth < 500 && this.isCreateSection();
  }

  // Get whether the speech banner should be shown
  showPlayingSpeechBanner(): boolean {
    return !this.isCreateSection() && this.playingSpeechService.isPlaying();
  }

  // Toggle content expansion
  toggleExpandSheetContent(): void {
    if (this.activeSounds.length > 0) {
        this.expandContent = !this.expandContent;

        if (this.expandContent) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    } else {
        this.expandContent = false;
        document.body.style.overflowY = 'auto';
    }
  }

  // Get the current expansion state of the sheet
  getExpandSheetContent(): boolean {
    return this.expandContent;
  }

  // Initialize resize listener to adjust the screen width
  private initResizeListener(): void {
    window.addEventListener('resize', this.onResize);
  }

  // Resize event handler to update screen width
  private onResize = (): void => {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 500) {
      document.body.style.overflowY = 'auto';
    }
  };

  // Check if the current URL belongs to the create section
  isCreateSection(): boolean {
    return this.currentUrl.startsWith('/app/create');
  }

  // Get the current screen width
  getScreenWidth(): number {
    return this.screenWidth;
  }

  // Clear all active sounds
  clearActiveSounds(): void {
    this.activeSounds = [];
    this.toggleExpandSheetContent();
    console.log('All active sounds cleared:', this.getActiveSounds());
  }
}
