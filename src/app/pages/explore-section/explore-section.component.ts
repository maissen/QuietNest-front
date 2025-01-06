import { Component } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-explore-section',
  templateUrl: './explore-section.component.html',
  styleUrls: ['./explore-section.component.scss']
})
export class ExploreSectionComponent {
  audios: any[] = [];

  constructor(private audioService: AudioService){};

  ngOnInit(): void {
      this.audioService.getAudioData().subscribe(
        (data) => {
          if(data) this.audios = data;
        }
      )
  }
}
