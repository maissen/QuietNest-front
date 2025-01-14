import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private playlists: any[] = [];

  constructor() { }

  public api_all_playlists: string = 'http://localhost:2003/api/get-all-playlists';

  setPlayLists(list: any[]) {
    this.playlists = list;
  }

  getPlaylists(): any[] {
    return this.playlists;
  }

}
