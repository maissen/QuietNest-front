import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScenesSectionService {
  private url = 'http://localhost:2003/api/scenes';

  constructor(private http: HttpClient) { }

  getScenes(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
