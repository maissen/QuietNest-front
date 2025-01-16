import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-scenes-section',
  templateUrl: './scenes-section.component.html',
  styleUrls: ['./scenes-section.component.scss']
})
export class ScenesSectionComponent {
  scenes: any[] = [];
  activeSceneId: number | null = null;

  constructor(
    private router: Router,
    public service: ScenesSectionService,
    public user: UserService
  ) {}

  undoLink(): void {
    this.router.navigate(['app/']);
  }

  updateUserScene(scene: any): void {
    const userId = this.user.getUser().id;

    this.user.updateUserScene(userId, scene.id).subscribe(
      (response) => {
        this.user.setUser(response);
      },
      (error) => {
        console.error('Error updating scene:', error);
      }
    );
  }
}
