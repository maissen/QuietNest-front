import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayingAudioService {
  // Create a BehaviorSubject to hold the audio data (can be any type, for example, an object)
  private audioData = new BehaviorSubject<any>(null);
  selectedAudioData$ = this.audioData.asObservable();

  constructor() {}

  // Method to set the selected audio data
  setSelectedAudioData(audioData: any) {
    this.audioData.next(audioData);
    console.log(this.audioData.value); // To verify if the data is set correctly
  }

  // Method to get the selected audio data
  getSelectedAudioData() {
    return this.audioData.value;
  }
}
