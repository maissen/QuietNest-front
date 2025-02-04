import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveSoundsHtmlAudioService {

  constructor() { }

  html_audios: HTMLAudioElement[] = [];

  createAudioElement(id: string, src: string, loop: boolean = false, volume: number = 1): void {
    const audio = document.createElement('audio');
    audio.id = id;
    audio.src = src;
    audio.loop = loop;
    audio.volume = volume;
    audio.autoplay = true;
    
    console.log('html audios : ' + this.html_audios)
    // document.body.appendChild(audio);
  }

  destroyAudioElement(id: string): void {
    const audio = document.getElementById(id) as HTMLAudioElement;
    if (audio) {
      audio.pause();
      audio.src = ''; // Clear source to free memory
      audio.remove();
    }
  }
}
