import { Injectable } from '@angular/core';
import { SoundsService } from './sounds.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionSoundsService {

  constructor(
    private soundsService: SoundsService
  ) { }

  getHtmlAudioByID(id: number): HTMLAudioElement | null {
    return document.querySelector(`#sound-${id}`) as HTMLAudioElement;
  }

  toggleSound(sound: any): void {
    let audio = this.getHtmlAudioByID(sound.id);
    sound.isActive = !sound.isActive;
    console.log(sound.isActive)
  }

}
