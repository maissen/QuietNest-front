import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SpeechesService } from './speeches.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private playlists: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  public api_all_playlists: string = 'http://localhost:2003/api/get-all-playlists';
  public api_increment_playlists_plays: string = 'http://localhost:2003/api/increment-playlist-playing-nbr';
  public api_user_likes_playlist: string = 'http://localhost:2003/api/like/playlist/';


  private playingPlaylist: any = null;
  isPlaying: boolean = false;
  isFinished: boolean = false;

  setPlayLists(list: any[]) {
    this.playlists = list;
  }

  getPlaylists(): any[] {
    return this.playlists;
  }

  setPlayingPlayList(playlist: any): void {
    this.clearPlayingPlaylist();
    this.playingPlaylist = playlist;
    this.isPlaying = true;
    this.isFinished = false;
  }

  clearPlayingPlaylist(): void {
    this.playingPlaylist = null;
    this.isPlaying = false;
    this.isFinished = false;
  }

  getPlayingPlaylist(): any {
    return this.playingPlaylist;
  }

  incrementPlaylistPlayings(playlist: any) {
    const playlistID = playlist.id;
    const requestBody = { playlistID };

    return this.http.post(this.api_increment_playlists_plays, requestBody).subscribe({
      next: (response) => {
        playlist.playing_nbr = parseInt(playlist.playing_nbr) + 1;
      },
      error: (error) => {
        console.error('Error incrementing playing number:', error);
      },
    });
  }

  userLikesPlaylist(playlistID: number, userID: string): Observable<any> {
      const requestBody = { playlistID, userID };
  
      return this.http.post<any>(this.api_user_likes_playlist, requestBody).pipe(
        map(response => {
          return response;
        }),
        catchError(err => {
          console.error('Failed to like speech:', err);
          return of({ success: false, error: err });
        })
      );
    }
  

}
