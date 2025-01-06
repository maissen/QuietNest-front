import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit{

  audios: any[] = [];
  currentScene: any;

  constructor(
    private audioService: AudioService,
    private scenesService: ScenesSectionService
  ){};

  ngOnInit(): void {
    this.audioService.getAudioData().subscribe(data => {
      if (data) this.audios = data;
    });
  
    this.scenesService.getCurrentScene().subscribe(currentScene => {
      if (currentScene) {
        this.currentScene = currentScene;
        // console.log('browse comp, current scene:', currentScene.avgColor);
      } else {
        // console.log('browse comp, current scene is undefined');
      }
    });
  }


}
