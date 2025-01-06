import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenesSectionService {
  private url = 'http://localhost:2003/api/scenes';
  private defaultSceneApi = 'http://localhost:2003/api/default-scene';
  private currentSceneSubject = new BehaviorSubject<any>(null);

  private defaultScene: any = null;

  constructor(private http: HttpClient) {
    this.http.get<any>(this.defaultSceneApi).subscribe(
      (scene) => {
        this.defaultScene = scene;
        this.currentSceneSubject.next(scene); // Emit the default scene to the BehaviorSubject
        console.log('Default scene loaded:', scene);
      },
      (error) => {
        console.error('Error loading default scene:', error);
      }
    );
  }

  getScenes(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  setCurrentScene(scene: any): void {
    this.currentSceneSubject.next(scene);
  }

  getCurrentScene(): Observable<any> {
    return this.currentSceneSubject.asObservable();
  }

}
