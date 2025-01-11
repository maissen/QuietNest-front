import { Injectable } from '@angular/core';
import { SoundsService } from './sounds.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {

  private activeSounds: any[] = [];

  constructor(private soundsService: SoundsService) {}

  getCategories(): any[] {
    return this.soundsService.getCategories();
  }

  getSoundsOfCategory(category: any): any[] {
    return this.soundsService.getSounds().filter(sound => sound.sound_category_id === category.id);
  }

  toggleActiveSound(sound: any): void {
    const index = this.activeSounds.indexOf(sound);

    if (index === -1) {
      this.activeSounds.push(sound);
    } else {
      this.activeSounds.splice(index, 1);
    }
    console.log(this.getActiveSounds())
  }

  getActiveSounds(): any[] {
    return this.activeSounds;
  }
}
