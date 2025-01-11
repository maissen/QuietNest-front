import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-audio-item-square',
  templateUrl: './audio-item-square.component.html',
  styleUrls: ['./audio-item-square.component.scss']
})
export class AudioItemSquareComponent {
  @Input() audio: any;
  
    constructor(
      private playingSpeechService: PlayingSpeechService,
      public narratorsService: NarratorsService,
      public categoriesService: CategoriesService
    ) {}
  
    ngOnInit(): void {
      
    }
  
    onAudioClick() {
      const audioData = { audio: this.audio.name };
      this.playingSpeechService.setSelectedAudioData(audioData);
      this.playingSpeechService.isPlaying()
    }
}
