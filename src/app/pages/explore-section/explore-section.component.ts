import { Component } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-explore-section',
  templateUrl: './explore-section.component.html',
  styleUrls: ['./explore-section.component.scss']
})
export class ExploreSectionComponent {
  audios: any[] = [];
  currentScene: any;

  constructor(
    private audioService: AudioService,
    private scenesServices: ScenesSectionService
  ){};

  ngOnInit(): void {

    this.scenesServices.getCurrentScene().subscribe(
      (scene) => {
        this.currentScene = scene;
        if (this.currentScene) {
          // console.log('scenes comp, Current scene:', this.currentScene.name);
        }
      },
      (error) => {
        console.error('Error fetching current scene:', error);
      }
    );

      this.audioService.getAudioData().subscribe(
        (data) => {
          if(data) this.audios = data;
        }
      )
  }
}
