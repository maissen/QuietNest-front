import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NarratorsService {

  public api_get_all_narrators = "https://quietrest-back.onrender.com/api/get-all-narrators";
  public api_trending_narrators = "https://quietrest-back.onrender.com/api/get-trending-narrators";
  public api_user_likes_narrator = "https://quietrest-back.onrender.com/api/like/narrator/";
  public api_get_narrator_speeches_nbr = "https://quietrest-back.onrender.com/api/get-narrator-nbr-speeches/:narratorID";


  private allNarrators: any[] = [];
  public trending_narrators: any[] = [];

  constructor(private http: HttpClient) {}

  setAllnarrators(list: any[]) {
    this.allNarrators = list;
  }

  getAllNarrators(): any[] {
    return this.allNarrators;
  }

  getNarratorById(narratorID: number): any {
    return this.allNarrators.find(narrator => narrator.id == narratorID);
  }

  getSpeechesNbr(narratorID: number): Observable<any> {
    const url = this.api_get_narrator_speeches_nbr.replace(':narratorID', narratorID.toString());
    return this.http.get(url).pipe(
      map((response: any) => response),
      catchError(error => {
        console.error('Error fetching speeches number:', error);
        return of(null);
      })
    );
  }
}

