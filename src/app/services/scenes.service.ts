import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  private api_get_all_scenes = 'http://localhost:2003/api/get-scenes';
  private api_get_active_scene = 'http://localhost:2003/api/get-active-scene';

  private scenesList: any[] = [];
  private activeSceneSubject = new BehaviorSubject<any>(null); // Create a BehaviorSubject to hold active scene

  constructor(private http: HttpClient) {
    this.fetchScenes();
    this.fetchActiveScene();
  }

  private fetchScenes(): void {
    this.http.get<any[]>(this.api_get_all_scenes)
      .pipe(
        map(data => data || []),
        catchError(err => {
          console.error('Failed to fetch scenes', err);
          return of([]);
        })
      )
      .subscribe(data => {
        this.scenesList = data;
      });
  }

  private fetchActiveScene(): void {
    this.http.get<any>(this.api_get_active_scene)
      .pipe(
        map(data => data || {}),
        catchError(err => {
          console.error('Failed to fetch active scene', err);
          return of({});
        })
      )
      .subscribe(data => {
        this.activeSceneSubject.next(data); // Emit the active scene once it's fetched
      });
  }

  getScenes(): any[] {
    return this.scenesList;
  }

  getActiveScene() {
    return this.activeSceneSubject.asObservable();
  }
}
