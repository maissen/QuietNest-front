import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenes-section',
  templateUrl: './scenes-section.component.html',
  styleUrls: ['./scenes-section.component.scss']
})
export class ScenesSectionComponent {

  constructor(private router: Router){};

  undoLink() {
    this.router.navigate(['home/']);
  }
}
