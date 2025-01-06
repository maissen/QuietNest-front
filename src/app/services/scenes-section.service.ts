import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenesSectionService {
  private url = 'http://localhost:2003/api/scenes';
  private currentScene: any = {};
  private defaultScene: any = null;

  constructor(private http: HttpClient) { }

  getScenes(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  setCurrentScene(scene: any): void {
    this.currentScene = scene;
  }

  getCurrentScene(): any {
    return this.currentScene;
  }

  setDefaultScene(): Observable<any> {
    if (this.defaultScene) {
      return new Observable(observer => {
        observer.next(this.defaultScene);
        observer.complete();
      });
    } else {
      return this.http.get<any>(this.url).pipe(
        map(scenes => {
          this.defaultScene = scenes[0];
          return this.defaultScene;
        })
      );
    }
  }
}
