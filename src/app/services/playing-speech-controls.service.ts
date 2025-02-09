import { Injectable } from '@angular/core';
import { SpeechesService } from './speeches.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { PlaylistsService } from './playlists.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class PlayingSpeechControlsService {

  constructor(
    private service: SpeechesService,
    private user: UserService,
    private http: HttpClient,
    private playlistsService: PlaylistsService
  ) { }

  expand_speech_bottom_sheet: boolean = false;
  loading_like_speech: boolean = false;
  loading_like_playlist: boolean = false;
  loading_save_unsave_speech: boolean = false;

  onSeek(event: any): void {
    
    if(this.service.getSpeechDurationInSeconds() > 0) {
      let seekValue = event.target.value;
      this.service.html_audio.currentTime = seekValue;
    } 
  }

  toggleSaveUnsaveSpeech(): void {
    const userID = this.user.getUser().id;
    const speechID = this.service.getSelectedSpeechData().id;
    this.loading_save_unsave_speech = true;

    this.http.post(this.service.api_toggle_save_speech, {userID, speechID}).subscribe(
      (res) => {
        this.service.getSelectedSpeechData().saved = !this.service.getSelectedSpeechData().saved;
        this.loading_save_unsave_speech = false;
      },
      (err) =>{
        console.error('Error saving/unsaving speech:', err);
      }
    )
  }

  likeSpeech() {
    let userID = this.user.getUser().id;
    let speech = this.service.getSelectedSpeechData();
    this.loading_like_speech = true;
    
    this.service.userLikesSpeech(speech.id, userID).subscribe(response => {
      this.loading_like_speech = false;
      speech.liked = !speech.liked;
      if (speech.liked) {
        speech.likes = parseInt(speech.likes) + 1 ;
      }
      else {
        speech.likes = parseInt(speech.likes) - 1 ;
      }
    }, 
    error => {
      console.error('Error liking speech:', error);
    });
  }

  likePlaylist() {
    let userID = this.user.getUser().id;
    let playlist = this.playlistsService.getPlayingPlaylist();
    this.loading_like_playlist = true;
    
    this.playlistsService.userLikesPlaylist(playlist.id, userID).subscribe(response => {
      this.loading_like_playlist = false;
      playlist.liked = !playlist.liked;
      if (playlist.liked) {
        playlist.likes = parseInt(playlist.likes) + 1 ;
      }
      else {
        playlist.likes = parseInt(playlist.likes) - 1 ;
      }
    }, 
    error => {
      console.error('Error liking playlist:', error);
    });
  }
}
