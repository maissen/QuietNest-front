import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private playlists: any[] = [];

  constructor(
    private router: Router
  ) { }

  public api_all_playlists: string = 'http://localhost:2003/api/get-all-playlists';
  private playingPlaylist: any = null;

  setPlayLists(list: any[]) {
    this.playlists = list;
  }

  getPlaylists(): any[] {
    return this.playlists;
  }

  setPlayingPlayList(playlist: any): void {
    this.playingPlaylist = playlist;
    this.router.navigate(['/app/playlist/' + this.playingPlaylist.id])
  }

  getPlayingPlaylist(): any {
    return this.playingPlaylist;
  }
  

}
