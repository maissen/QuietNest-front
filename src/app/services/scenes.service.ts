import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  private get_all_scenes = 'http://localhost:2003/api/get-scenes';
  private get_active_scene = 'http://localhost:2003/api/get-active-scene';
  
  
  private scenesList: any[] = [];
  private activeScene: any;

  constructor(private http: HttpClient) {
    this.fetchScenes();
    this.fetchActiveScene();
  }

  private fetchScenes(): void {
    this.http.get<any[]>(this.get_all_scenes)
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
    this.http.get<any[]>(this.get_active_scene)
      .pipe(
        map(data => data || []),
        catchError(err => {
          console.error('Failed to fetch active scene', err);
          return of([]);
        })
      )
      .subscribe(data => {
        this.scenesList = data;
      });
  }

  getScenes(): any[] {
    return this.scenesList;
  }
  
  getActiveScene(): any[] {
    return this.activeScene;
  }
}
