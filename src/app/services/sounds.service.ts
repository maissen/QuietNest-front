import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {
  private api_get_sounds_categories = 'http://localhost:2003/api/get-sounds-categories';
  private api_get_all_sounds = 'http://localhost:2003/api/get-all-sounds';

  private categories: any[] = [];
  private allSounds: any[] = [];

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
    this.allSounds = list;
  }

  getSounds(): any[] {
    return this.allSounds;
  }

  getSoundsByCategory(categoryID: number): any[] {
    return this.getSounds().filter(sound => sound.soundCategoryID == categoryID);
  }
}
