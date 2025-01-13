import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeechesService {

  public api_get_all_speeches = 'http://localhost:2003/api/get-all-speeches';

  private allSpeches: any[] = [];

  constructor(
    private http: HttpClient,
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
      this.allSpeches = data;
    });
  }

  getAllSpeeches() {
    return this.allSpeches;
  }

  getSpeechById(speech_id: number): any {
    return this.getAllSpeeches().find(speech => speech.id == speech_id);
  }
}
