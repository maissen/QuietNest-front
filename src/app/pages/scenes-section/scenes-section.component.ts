import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-scenes-section',
  templateUrl: './scenes-section.component.html',
  styleUrls: ['./scenes-section.component.scss']
})
export class ScenesSectionComponent implements OnInit {
  scenes: any[] = [];
  currentScene: any;

  constructor(
    private router: Router,
    private scenesServices: ScenesSectionService
  ) {}

  ngOnInit(): void {
    this.scenesServices.getScenes().subscribe(
      (data) => {
        if (data) {
          this.scenes = data;
          console.log('Scenes section successfully fetched data');
        }
      },
      (error) => {
        console.error('Error fetching scenes:', error);
      }
    );

    this.scenesServices.getCurrentScene().subscribe(
      (scene) => {
        this.currentScene = scene;
        if (this.currentScene) {
          console.log('scenes comp, Current scene:', this.currentScene.name);
        }
      },
      (error) => {
        console.error('Error fetching current scene:', error);
      }
    );
  }

  undoLink() {
    this.router.navigate(['app/']);
  }

  selectScene(scene: any): void {
    this.scenesServices.setCurrentScene(scene);
    this.currentScene = scene;
    console.log('Scene selected:', scene.name);
  }
}
