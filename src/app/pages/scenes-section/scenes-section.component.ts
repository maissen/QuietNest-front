import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-scenes-section',
  templateUrl: './scenes-section.component.html',
  styleUrls: ['./scenes-section.component.scss']
})
export class ScenesSectionComponent {
  scenes: any[] = [];
  currentScene: any;

  constructor(
    private router: Router,
    public scenesServices: ScenesSectionService
  ) {}

  undoLink() {
    this.router.navigate(['app/']);
  }
}
