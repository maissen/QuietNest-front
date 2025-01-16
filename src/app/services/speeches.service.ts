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
  public api_speech_likes_nbr = 'http://localhost:2003/api/get-speech-likes/';

  private allSpeches: any[] = [];

  constructor(private http: HttpClient) {}

  setSpeeches(list: any[]) {
    this.allSpeches = list;
  }


  getAllSpeeches() {
    return this.allSpeches;
  }

  getSpeechById(speechID: number): any {
    return this.getAllSpeeches().find(speech => speech.id === speechID);
  }

  getSpeechLikesNbr(speechID: number): Observable<number> {
    return this.http.get<number>(`${this.api_speech_likes_nbr}${speechID}`).pipe(
      map(data => data),
      catchError(err => {
        console.error('Failed to fetch likes count for speech:', err);
        return of(0);
      })
    );
  }

  userLikesSpeech(speechID: number, userID: string): Observable<any> {
    const requestBody = { speechID, userID };

    return this.http.post<any>(this.api_like_speech, requestBody).pipe(
      map(response => {
        console.log(response);
        return response;
      }),
      catchError(err => {
        console.error('Failed to like speech:', err);
        return of({ success: false, error: err });
      })
    );
  }
}
