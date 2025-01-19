import { Injectable } from '@angular/core';
import { CreateSectionService } from './create-section.service';

@Injectable({
  providedIn: 'root'
})
export class SoundsmixturesService {

  api_get_all_soundsmixtures = 'http://localhost:2003/api/get-all-soundsmixture';
  api_play_soundsmixture = 'http://localhost:2003/api/soundmixture-increment-playing-nbr';

  private soundsmixtures: any[] = [];

  constructor(
    private createSectionService: CreateSectionService
  ) { }

  getSoundsMixtures(): any[] {
    return this.soundsmixtures;
  }

  setSoundsMixtures(list: any[]): void {
    this.soundsmixtures = list;
  }

  playSoundMixture(mixture: any): void {
    console.log('sound mixture to play : ' + mixture.sounds)
    mixture.sounds.forEach((sound: any) => {
      this.createSectionService.toggleSound(sound);
    });
  }
}
