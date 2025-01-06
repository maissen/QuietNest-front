import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenesSectionService {
  private url = 'http://localhost:2003/api/scenes';
  private currentSceneSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getScenes(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  setCurrentScene(scene: any): void {
    this.currentSceneSubject.next(scene); // Emit the new value
  }

  getCurrentScene(): Observable<any> {
    return this.currentSceneSubject.asObservable(); // Return as observable
  }

  setDefaultScene(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map(scenes => {
        if (scenes && scenes.length > 0) {
          const defaultScene = scenes[0];
          this.currentSceneSubject.next(defaultScene); // Emit the default scene
          return defaultScene;
        }
        return null;
      })
    );
  }
}
