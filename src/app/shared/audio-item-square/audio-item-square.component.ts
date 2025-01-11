import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-audio-item-square',
  templateUrl: './audio-item-square.component.html',
  styleUrls: ['./audio-item-square.component.scss']
})
export class AudioItemSquareComponent {
  @Input() audio: any;
  
    constructor(
      private playingAudioService: PlayingAudioService,
      public narratorsService: NarratorsService,
      public categoriesService: CategoriesService
    ) {}
  
    ngOnInit(): void {
      
    }
  
    onAudioClick() {
      const audioData = { audio: this.audio.name };
      this.playingAudioService.setSelectedAudioData(audioData);
      this.playingAudioService.isPlaying()
    }
}
