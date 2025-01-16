import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeechesService {

  public api_get_all_speeches = 'http://localhost:2003/api/get-all-speeches';
  public api_like_speech = 'http://localhost:2003/api/like/speech/';

  private allSpeches: any[] = [];

  constructor(private http: HttpClient) { 
    this.fetchSpeeches();
  }

  private fetchSpeeches() {
    this.http.get<any[]>(this.api_get_all_speeches)
      .pipe(
        map(data => data || []),
        catchError(err => {
          console.error('Failed to fetch speeches', err);
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

  getSpeechById(speechID: number): any {
    return this.getAllSpeeches().find(speech => speech.id == speechID);
  }

  userLikesSpeech(speechID: number, userID: string): Observable<any> {
    const requestBody = { speechID, userID };

    return this.http.post<any>(this.api_like_speech, requestBody).pipe(
      map(response => {
        console.log('Like successful:', response);
        return response;
      }),
      catchError(err => {
        console.error('Failed to like speech:', err);
        return of({ success: false, error: err });
      })
    );
  }
}
