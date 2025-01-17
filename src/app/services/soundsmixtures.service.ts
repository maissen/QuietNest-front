import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsmixturesService {

  api_get_all_soundsmixtures = 'http://localhost:2003/api/get-all-soundsmixture';

  private soundsmixtures: any[] = [];

  constructor() { }

  getSoundsMixtures(): any[] {
    return this.soundsmixtures;
  }

  setSoundsMixtures(list: any[]): void {
    this.soundsmixtures = list;
  }
}
