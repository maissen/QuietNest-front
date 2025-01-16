import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  public api_get_all_scenes = 'http://localhost:2003/api/get-scenes';
  public api_get_active_scene = 'http://localhost:2003/api/get-active-scene';

  private scenesList: any[] = [];
  private activeScene: any;

  setScenesList(list: any[]) {
    this.scenesList = list;
  }

  getScenesList(): any[] {
    return this.scenesList;
  }  

  setActiveScene(scene: any) {
    this.activeScene = scene;
    console.log('active scene is set:', this.getActiveScene());
  }

  getActiveScene(): any {
    return this.activeScene;
  }

  getSceneByID(sceneID: number): any {
    return this.scenesList.find(scene => scene.id === sceneID);
  }
}
