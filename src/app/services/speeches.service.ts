import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoriesService } from './categories.service';
import { NarratorsService } from './narrators.service';

@Injectable({
  providedIn: 'root'
})
export class SpeechesService {
  public api_get_all_speeches = 'http://localhost:2003/api/get-all-speeches';
  public api_like_speech = 'http://localhost:2003/api/like/speech/';
  public api_speech_likes_nbr = 'http://localhost:2003/api/get-speech-likes/';
  public api_did_user_like_this_speech = 'http://localhost:2003/api/did-user-like-this-speech/';

  private allSpeches: any[] = [];
  private selectedSpeech: any = null;

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private narratorsService: NarratorsService
  ) {}

  setSpeeches(list: any[]) {
    this.allSpeches = list;
  }

  getAllSpeeches() {
    return this.allSpeches;
  }

  getSpeechById(speechID: number): any {
    return this.getAllSpeeches().find(speech => speech.id === speechID);
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

  setSelectedSpeechData(speech: any) {
    this.selectedSpeech = speech;
    this.selectedSpeech.narrator = this.narratorsService.getNarratorById(this.selectedSpeech);
    this.selectedSpeech.category = this.categoriesService.getCategoryById(this.selectedSpeech);
    // console.log(this.getSelectedSpeechData())
  }

  getSpeech(): any {
    return this.selectedSpeech;
  }

  getSelectedSpeechData(): any {
    return this.selectedSpeech;
  }

  clearSelectedSpeechData() {
    this.selectedSpeech = null;
  }

  isPlaying(): any {
    return this.selectedSpeech;
  }
}
