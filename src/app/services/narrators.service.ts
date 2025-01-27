import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NarratorsService {

  public api_get_all_narrators = "http://localhost:2003/api/get-all-narrators";
  public api_user_likes_narrator = "http://localhost:2003/api/like/narrator/";
  private allNarrators: any[] = [];

  constructor(private http: HttpClient) {}

  setAllnarrators(list: any[]) {
    this.allNarrators = list;
  }

  getAllNarrators(): any[] {
    return this.allNarrators;
  }

  getNarratorById(narratorID: number): any {
    return this.getAllNarrators().find(narrator => narrator.id == narratorID);
  }
}

