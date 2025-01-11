import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NarratorsService {

  public api_get_all_narrators = "http://localhost:2003/api/get-all-narrators";
  private allNarrators: any[] = [];


  setAllnarrators(list: any[]) {
    this.allNarrators = list;
  }

  getAllNarrators(): any[] {
    return this.allNarrators;
  }

  getNarratorById(speech: any): any {
    return this.getAllNarrators().find(narrator => narrator.id == speech.narrator_id);
  }
}
