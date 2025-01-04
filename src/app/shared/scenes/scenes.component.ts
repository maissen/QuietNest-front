import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss']
})
export class ScenesComponent {
  constructor(private router: Router){};

  closeComponent() {
    this.router.navigate(['home/']);
  }
}
