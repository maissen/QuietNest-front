import { Injectable } from '@angular/core';
import { CreateSectionService } from './create-section.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SoundsmixturesService {

  api_get_all_soundsmixtures = 'http://localhost:2003/api/get-all-soundsmixture';
  api_play_soundsmixture = 'http://localhost:2003/api/soundmixture-increment-playing-nbr';

  private soundsmixtures: any[] = [];

  constructor(
    private createSectionService: CreateSectionService,
    private router: Router
  ) { }

  getSoundsMixtures(): any[] {
    return this.soundsmixtures;
  }

  setSoundsMixtures(list: any[]): void {
    this.soundsmixtures = list;
  }

  playSoundMixture(mixture: any): void {

    this.router.navigate(['app/create'])

    // console.log('sound mixture to play : ' + mixture.sounds)
    // mixture.sounds.forEach((sound: any) => {
    //   // console.log('audio-item-'+sound.id);

    //   console.log('Sound ID:', sound.id);
    //   const item = document.querySelector('#audio-item-' + sound.id);
    //   console.log('Queried item:', item);
      
    //   // this.createSectionService.toggleSound(sound);
    // });
  }
}
