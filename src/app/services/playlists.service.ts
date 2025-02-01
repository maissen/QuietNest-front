import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(
    private http: HttpClient,
    private user: UserService
  ) { }

  public api_all_playlists: string = 'https://quietrest-back.onrender.com/api/get-all-playlists';
  public api_hot_playlists: string = 'https://quietrest-back.onrender.com/api/get-hot-playlists';
  public api_increment_playlists_plays: string = 'https://quietrest-back.onrender.com/api/increment-playlist-playing-nbr';
  public api_user_likes_playlist: string = 'https://quietrest-back.onrender.com/api/like/playlist/';
  public api_get_playlist_speeches: string = 'https://quietrest-back.onrender.com/api/get-playlist-speeches';
  public api_set_current_playlist: string = 'https://quietrest-back.onrender.com/api/set-current-playlist-for-user/';
  public api_clear_current_playlist: string = 'https://quietrest-back.onrender.com/api/clear-current-playlist-for-user/';
  public api_fetch_playlist_by_id: string = 'https://quietrest-back.onrender.com/api/get-playlist-by-id';

  private playlists: any[] = [];
  private playingPlaylist: any = null;

  isPlaying: boolean = false;
  isFinished: boolean = false;
  playing_speech_index: number = -1;
  current_playlist: any = null;

  setPlayLists(list: any[]) {
    this.playlists = list;
  }

  getPlaylists(): any[] {
    return this.playlists;
  }

  setPlayingPlayList(playlist: any, index: number = 1): void {
    this.clearPlayingPlaylist();
    this.playingPlaylist = playlist;
    this.isPlaying = true;
    this.isFinished = false;
    this.playing_speech_index = index;
  }

  clearPlayingPlaylist(): void {
    this.playingPlaylist = null;
    this.isPlaying = false;
    this.isFinished = false;
    this.playing_speech_index = -1;
  }

  getPlayingPlaylist(): any {
    return this.playingPlaylist;
  }

  incrementPlaylistPlayings(playlist: any) {
    const playlistID = playlist.id;
    const requestBody = { playlistID };

    this.http.post(this.api_increment_playlists_plays, requestBody).subscribe({
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

  getPlaylistById(playlistID: number): any {
    return this.getPlaylists().find(playlist => playlist.id === playlistID);
  }
}
