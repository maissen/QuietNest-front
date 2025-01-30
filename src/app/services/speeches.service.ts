import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { PlaylistsService } from './playlists.service';

@Injectable({
  providedIn: 'root'
})
export class SpeechesService {
  public api_get_all_speeches = 'http://localhost:2003/api/get-all-speeches';
  public api_get_popular_speeches = 'http://localhost:2003/api/get-popular-speeches';
  public api_get_top_liked_speeches = 'http://localhost:2003/api/get-top-liked-speeches';
  public api_like_speech = 'http://localhost:2003/api/like/speech/';
  public api_increment_playingNbr = 'http://localhost:2003/api/increment-playing-nbr';
  public api_toggle_save_speech = 'http://localhost:2003/api/save-speech/';
  public api_speeches_durations = 'http://localhost:2003/api/get-speech-durations/';
  public api_get_duration_of_speech = 'http://localhost:2003/api/get-speech-duration/';
  public api_get_random_speeches = 'http://localhost:2003/api/get-random-speeches';
  public api_set_current_speeches = 'http://localhost:2003/api/set-current-speech-for-user/';
  public api_clear_current_speeches = 'http://localhost:2003/api/clear-current-speech-for-user/';
  public api_get_speeches_of_playlist = 'http://localhost:2003/api/speeches-of-current-playlist';
  public api_current_speech_of_user = 'http://localhost:2003/api/get-speech-by-id';

  private allSpeches: any[] = [];
  private selectedSpeech: any = null;
  popular_speeches: any[] = [];
  top_liked_speeches: any[] = [];
  random_speeches: any[] = [];
  speeches_of_playlist: any[] = [];
  current_speech_of_user: any = null;

  private speechDuration: string = '00:00';
  private speechReadingLevel: string = '00:00';
  private speechDurationInSeconds: number = 0;
  private speechReadingLevelInSeconds: number = 0;
  public html_audio: any;

  public isSpeechPlaying: boolean = false;

  public speechesDurations: any[] = [];
  public selected_speech_is_loading: boolean = false;

  speech_played_auto: boolean = false;

  constructor(
    private http: HttpClient,
    private user: UserService,
    private playlistsService: PlaylistsService
  ) {}

  fetchSpeechDuration(durationID: string): Observable<string> {
    return this.http.get<string>(this.api_get_duration_of_speech + parseInt(durationID));
  }

  getSpeechDuration(): string {
    return this.speechDuration;
  }
  
  getSpeechReadingLevel(): string {
    return this.speechReadingLevel;
  }

  getSpeechDurationInSeconds(): number {
    this.html_audio = document.querySelector('#playing_speech_html_audio') as HTMLAudioElement;
    return Math.floor(this.speechDurationInSeconds);
  }
  
  getSpeechReadingLevelInSeconds(): number {
    return Math.floor(this.speechReadingLevelInSeconds);
  }

  setSpeechReadingLevelInSeconds(level: number) {
    this.speechReadingLevelInSeconds = level;
  }

  setSpeechDurationInSeconds(duration: number) {
    this.speechDurationInSeconds = duration;
  }

  setSpeechDuration(duration: string) {
    this.speechDuration = duration;
  }

  setSpeechReadingLevel(level: string) {
    this.speechReadingLevel = level;
  }
  
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
      }),
      catchError(err => {
        console.error('Failed to like speech:', err);
        return of({ success: false, error: err });
      })
    );
  }

  incrementSpeechPlayings(speech: any) {
    const speechID = speech.id;

    this.http.post(this.api_increment_playingNbr, {speechID}).subscribe({
      next: (response) => {
        speech.playing_nbr = parseInt(speech.playing_nbr) + 1;
      },
      error: (error) => {
        console.error('Error incrementing playing number:', error);
      },
    });
  }
  
  //! load only current speech
  fetch_current_speech_of_user(speechID: number): Observable<any> {
    return this.http.get<any>(`${this.api_current_speech_of_user}/${speechID}`).pipe(
      map((speech) => {
        this.current_speech_of_user = speech;
        return speech;
      }),
      catchError((error) => {
        console.error('Error fetching speech:', error);
        return of(null);
      })
    );
  }
  
  

  set_current_speech(user: any, speech: any): void {

    let speechID = speech.id;
    let userID = user.id;
    const requestBody = { userID, speechID }


    this.http.post(this.api_set_current_speeches, requestBody).subscribe({
      next: (user) => {
        this.user.setUser(user)
      },
      error: (error2) => {
        console.error('Error settiing current speech:', error2);
      },
    });
  }

  clear_current_speech(user: any): void {
    const userID = user.id;

    this.http.post(this.api_clear_current_speeches, { userID }).subscribe(
      (user) => {
        this.user.setUser(user);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  setSelectedSpeechData(speech: any) {
    
    this.setSpeechDuration('00:00');
    this.setSpeechReadingLevel('00:00');
    this.speechDurationInSeconds = 0;
    this.speechReadingLevelInSeconds = 0;

    this.isSpeechPlaying = true;
    this.selectedSpeech = speech;

    this.html_audio.src = '';
    this.html_audio.src = speech.link;
    this.clear_current_speech(this.user.getUser());
    this.set_current_speech(this.user.getUser(), this.selectedSpeech);
    
    this.html_audio.play();
  }  

  setAutoSelectedSpeechData(speech: any) {
    
    this.setSpeechDuration('00:00');
    this.setSpeechReadingLevel('00:00');
    this.speechDurationInSeconds = 0;
    this.speechReadingLevelInSeconds = 0;

    this.isSpeechPlaying = true;
    this.selectedSpeech = speech;

    this.html_audio.src = speech.link;
    this.speech_played_auto = true;
    this.html_audio.pause();
  }  

  getSelectedSpeechData(): any {
    return this.selectedSpeech;
  }

  clearSelectedSpeechData() {
    this.selectedSpeech = null;
    this.isSpeechPlaying = false;
  }


  isPlaying(): any {
    return this.isSpeechPlaying;
  }

  updatePlayingSpeechVolume(volume: number): void {
    this.getSelectedSpeechData().volume = volume;
  }

  replaySpeech(): void {
    this.html_audio.currentTime = 0;
    this.html_audio.play()
  }

  togglePlayPause(): void {
    if (this.isSpeechPlaying) {
      this.html_audio.pause();
      this.isSpeechPlaying = false;
    } 
    else {
      this.html_audio.play();
      this.isSpeechPlaying = true;
    }
  }

  getLikedSpeeches(): any[] {
    return this.getAllSpeeches().filter(speech => speech.liked)
  }

  getSavedSpeeches(): any[] {
    return this.getAllSpeeches().filter(speech => speech.saved)
  }

}
