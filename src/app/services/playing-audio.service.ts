import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayingAudioService {
  //? Create a BehaviorSubject to hold the audio data (can be any type, for example, an object)
  private audioData: any = null;

  constructor() {}

  //? Method to set the selected audio data
  setSelectedAudioData(audio: any) {
    this.audioData = audio;
    console.log(this.audioData);
  }

  getSelectedAudioData(): any {
    return this.audioData;
  }

  clearSelectedAudioData() {
    this.audioData = null;
    console.log('after clearance : ' + this.audioData);
  }

  isPlaying() {
    return this.audioData;
  }
}
