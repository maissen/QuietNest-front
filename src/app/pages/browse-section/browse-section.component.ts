import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit{

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
