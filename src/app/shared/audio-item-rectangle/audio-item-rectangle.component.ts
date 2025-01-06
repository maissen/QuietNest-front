import { Component, Input, OnInit } from '@angular/core';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent implements OnInit{
  @Input() audio: any;
  img_src: string = 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg';
  

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
