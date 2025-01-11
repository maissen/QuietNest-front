import { Injectable } from '@angular/core';
import { SoundsService } from './sounds.service';
import { PlayingSpeechService } from './playing-speech.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {

  private activeSounds: any[] = [];
  screenWidth: number = window.innerWidth;
  expandContent: boolean = false;
  private currentUrl: string = '';

  constructor(
    private soundsService: SoundsService,
    private playingSpeechService: PlayingSpeechService
  ) {
    this.initResizeListener();
  }

  // Toggle the sound in the active list
  toggleActiveSound(sound: any): void {
    const index = this.activeSounds.indexOf(sound);

    if (index === -1) {
      this.activeSounds.push(sound);
    } else {
      this.activeSounds.splice(index, 1);
    }
    console.log(this.getActiveSounds());
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
    return this.screenWidth >= 500 && this.isCreateSection() && this.activeSounds.length > 0;
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
  toggleExpandSheetContent() {
    console.log('toggled');
    alert('Toggled');  // Add a quick alert to check if it's being triggered.
    this.expandContent = !this.expandContent;
    this.toggleDocumentScroll();
  }

  // Get the current expansion state of the sheet
  getExpandSheetContent(): boolean {
    return this.expandContent;
  }

  // Toggle the scroll behavior for document
  toggleDocumentScroll() {
    const overflow = window.getComputedStyle(document.body).overflowY;
    console.log(overflow);
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
}
