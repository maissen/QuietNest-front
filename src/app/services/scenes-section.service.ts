import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScenesService } from './scenes.service';

@Injectable({
  providedIn: 'root'
})
export class ScenesSectionService {
  private defaultSceneApi = 'https://quietrest-back.onrender.com/api/default-scene';

  constructor(
    private http: HttpClient,
    private scenesService: ScenesService
  ) {}

  getAllScenes(): any[] {
    return this.scenesService.getScenesList();
  }

  getActiveScene(): any {
    return this.scenesService.getActiveScene()
  }

}
