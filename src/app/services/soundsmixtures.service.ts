import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsmixturesService {

  api_get_all_soundsmixtures = 'http://localhost:2003/api/get-all-soundsmixture';
  api_play_soundsmixture = 'http://localhost:2003/api/soundmixture-increment-playing-nbr';

  private soundsmixtures: any[] = [];

  constructor() { }

  getSoundsMixtures(): any[] {
    return this.soundsmixtures;
  }

  setSoundsMixtures(list: any[]): void {
    this.soundsmixtures = list;
  }
}
