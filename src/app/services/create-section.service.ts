import { Injectable } from '@angular/core';
import { SoundsService } from './sounds.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {
  constructor(private soundsService: SoundsService) {}

  getCategories(): any[] {
    return this.soundsService.getCategories();
  }

  getSoundsOfCategory(category: any): any[] {
    return this.soundsService.getSounds().filter(sound => sound.sound_category_id === category.id);
  }
}
