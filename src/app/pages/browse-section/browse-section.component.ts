import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit, AfterViewInit{

  audios: any[] = [];
  currentScene: any;

  constructor(
    private audioService: AudioService,
    private scenesService: ScenesSectionService
  ){};

  ngOnInit(): void {
    this.audioService.getAudioData().subscribe(
      (data) => {
        if(data) this.audios = data;
      }
    );

    this.currentScene = this.scenesService.getCurrentScene();
  }

  ngAfterViewInit(): void {
    console.log('browse comp, current scene : ' + this.currentScene.name);
      
  }

}
