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
    this.setActiveScene(this.scenesList.find((scene: any) => scene.isActive == 1));
  }

  getScenesList(): any[] {
    return this.scenesList;
  }  

  private setActiveScene(scene: any) {
    this.activeScene = scene;
  }

  getActiveScene(): any {
    return this.activeScene;
  }

}
