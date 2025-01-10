import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ScenesService } from './scenes.service';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  private api_get_all_speeches = 'http://localhost:2003/api/get-speeches';

  private speechesList: any[] = [];

  constructor(
    private http: HttpClient,
    private scenesService: ScenesService
  ) { 
    this.fetchSpeeches();
  }

  private fetchSpeeches() {
    this.http.get<any[]>(this.api_get_all_speeches)
    .pipe(
      map(data => data || []),
      catchError(err => {
        console.error('Failed to fetch scenes', err);
        return of([]);
      })
    )
    .subscribe(data => {
      this.speechesList = data;
    });
  }

  getSpeechesList() {
    return this.speechesList;
  }

  getActiveScene() {
    return this.scenesService.getActiveScene();
  }
}
