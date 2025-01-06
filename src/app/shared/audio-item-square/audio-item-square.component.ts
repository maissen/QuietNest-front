import { Component, Input } from '@angular/core';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-audio-item-square',
  templateUrl: './audio-item-square.component.html',
  styleUrls: ['./audio-item-square.component.scss']
})
export class AudioItemSquareComponent {
  @Input() audio: any;
  img_src: string = 'https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg';
    
  
    constructor(private playingAudioService: PlayingAudioService) {}
  
    ngOnInit(): void {
      // console.log(this.audio)
    }
  
    // Method to handle the click event and send data to the service
    onAudioClick() {
      const audioData = { audio: this.audio.audioTitle };
      this.playingAudioService.setSelectedAudioData(audioData);
    }
}
