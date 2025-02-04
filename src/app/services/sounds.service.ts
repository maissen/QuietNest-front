import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {
  private api_get_sounds_categories = 'https://quietrest-back.onrender.com/api/get-sounds-categories';
  private api_get_all_sounds = 'https://quietrest-back.onrender.com/api/get-all-sounds';

  private categories: any[] = [];
  private allSounds: any[] = [];
  public allHtmlSounds: HTMLAudioElement[] = [];
  public sounds_started_loading = false;
  public all_sounds_are_paused = false;

  apiGetSoundsCategories(): string {
    return this.api_get_sounds_categories;
  }

  apiGetAllSounds(): string {
    return this.api_get_all_sounds;
  }

  getCategories(): any[] {
    return this.categories;
  }

  setCategories(list: any[]): void {
    this.categories = list;
  }

  setSounds(list: any[]): void {
    list.forEach(item => {item.isActive = false;});
    this.allSounds = list;
  }

  getSounds(): any[] {
    return this.allSounds;
  }

  getSoundsByCategory(categoryID: number): any[] {
    return this.getSounds().filter(sound => sound.soundCategoryID == categoryID);
  }

  getActiveSounds(): any {
    return this.allSounds.filter(sound => sound.isActive);
  }

  desactivateAllSounds(): void {
    this.allSounds.forEach(sound => sound.isActive = false);
  }

  pauseAllSounds(): void {
    this.allHtmlSounds.forEach((audio: HTMLAudioElement) => {
      audio.pause();
    });
  }

  playAllSounds(): void {
    this.allHtmlSounds.forEach((audio: HTMLAudioElement) => {
      audio.play();
    });
  }

  toggle_play_pause_all_sounds(): void {
    if(this.all_sounds_are_paused) {
      this.playAllSounds();
      this.all_sounds_are_paused = false;
    } else {
      this.pauseAllSounds();
      this.all_sounds_are_paused = true;
    }
  }
}
