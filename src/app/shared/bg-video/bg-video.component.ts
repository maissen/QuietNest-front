import { Component, OnInit } from '@angular/core';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss']
})
export class BgVideoComponent implements OnInit {
  
  currentScene: any;

  constructor(private scenesServices: ScenesSectionService) {};

  ngOnInit(): void {

    this.scenesServices.getCurrentScene().subscribe(
      (scene) => {
        this.currentScene = scene;
        if (this.currentScene) {
          // console.log('create comp, Current scene:', this.currentScene.name);
        }
      },
      (error) => {
        console.error('Error fetching current scene:', error);
      }
    );

  }
}
