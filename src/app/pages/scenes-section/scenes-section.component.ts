import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';
import { ScenesService } from 'src/app/services/scenes.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-scenes-section',
  templateUrl: './scenes-section.component.html',
  styleUrls: ['./scenes-section.component.scss']
})
export class ScenesSectionComponent {
  scenes: any[] = [];
  is_scene_loading: boolean = false;
  target_scene_id: any = null;

  constructor(
    private router: Router,
    public service: ScenesSectionService,
    public scenesService: ScenesService,
    public user: UserService,
    private toast: ToastService
  ) {}

  undoLink(): void {
    this.router.navigate(['app/']);
  }

  updateUserScene(scene: any): void {
    this.target_scene_id = scene.id;
    const userId = this.user.getUser().id;
    this.is_scene_loading = true;

    this.user.updateUserScene(userId, scene.id).subscribe(
      (response) => {
        this.user.setUser(response);
        this.scenesService.setActiveScene(scene);
        this.is_scene_loading = false;
      },
      (error) => {
        console.error('Error updating scene:', error);
        this.toast.showToast('Failed to load scene', 2, 'try again');
      }
    );
  }
}
