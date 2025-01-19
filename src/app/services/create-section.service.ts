import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {

  private activeSounds: any[] = [];
  public activeSoundsPaused: boolean = false;
  private ActiveSoundIDRefs: string[] = [];

  screenWidth: number = window.innerWidth;
  showOverlayContent: boolean = false;
  private currentUrl: string = '';

  constructor(
    private router: Router
  ) {
    this.updateCurrentUrl();
  }

  toggleOverLayContent(): void {
    this.showOverlayContent = !this.showOverlayContent;
  }
  
  toggleActiveSoundIDRef(idref: string): void {
    const index = this.ActiveSoundIDRefs.indexOf(idref);
    
    if (index === -1) {
      this.ActiveSoundIDRefs.push(idref);
    } 
    else {
      this.ActiveSoundIDRefs.splice(index, 1);
      this.ActiveSoundIDRefs.filter(ref => ref != idref);
    }

    console.log(this.ActiveSoundIDRefs);
  }

  private updateCurrentUrl(): void {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  toggleSound(sound: any): void {
    this.toggleActiveSound(sound);
    this.toggleActiveSoundIDRef('#sound-audio-' + sound.id);

    // Ensure audio element is found and then play it
    const audioElement = document.querySelector(`#sound-audio-${sound.id}`) as HTMLAudioElement;
    
    if (audioElement) {
        if (this.activeSoundsPaused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
}

  getPauseActiveSounds(): boolean {
    return this.activeSoundsPaused;
  }

  togglePauseActiveSounds(): void {
    this.activeSoundsPaused = !this.activeSoundsPaused;
  
    this.ActiveSoundIDRefs.forEach(id => {
      const audioElement = document.querySelector<HTMLAudioElement>(id);
      
      if (audioElement) {
        if (this.activeSoundsPaused) {
          audioElement.pause();
        } 
        else {
          audioElement.play();
        }
      }
    });

    console.log(this.ActiveSoundIDRefs)
  }
  
  toggleActiveSound(sound: any): void {
    const index = this.activeSounds.indexOf(sound);

    if (index === -1) {
      this.activeSounds.push(sound);
    } else {
      this.activeSounds.splice(index, 1);
    }
  }

  isSoundActive(sound: any): boolean {
    return this.getActiveSounds().includes(sound);
  }

  updateActiveSoundVolume(activeSound: any, volume: number) {
    this.ActiveSoundIDRefs.forEach((soundIDRef) => {
      if (`#sound-audio-${activeSound.id}` === soundIDRef) {
        const audioElement = document.querySelector(soundIDRef) as HTMLAudioElement;
        if (audioElement) {
          audioElement.volume = Math.min(Math.max(volume / 10, 0), 1); 
        }
      }
    });
  }

  // Get all active sounds
  getActiveSounds(): any[] {
    return this.activeSounds;
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

  // Clear all active sounds
  clearActiveSounds(): void {
    this.activeSounds = [];
    this.showOverlayContent = false;
  }
}
