import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScenesService } from './services/scenes.service';
import { UserService } from './services/user.service';
import { AppService } from './services/app.service';
import { SpeechesService } from './services/speeches.service';
import { CreateSectionService } from './services/create-section.service';
import { SoundsService } from './services/sounds.service';
import { PlaylistsService } from './services/playlists.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quietNest-front';

  constructor(
    private router: Router,
    public scenesService: ScenesService,
    public user: UserService,
    private app: AppService,
    public speechesService: SpeechesService,
    public service: CreateSectionService,
    public soundsService: SoundsService,
    public playlistsService: PlaylistsService,
    public navbar: NavbarService
  ) { }

  ngOnInit() {
  
    this.check_url();
    this.router.events.subscribe(() => {
      this.check_url();
    });

  }
  
  check_url() {
    const currentUrl = this.router.url;
    this.navbar.showNavbar = currentUrl.startsWith('/app/');

    if(currentUrl.startsWith('/app/speech') || currentUrl.startsWith('/app/playlist') || currentUrl.startsWith('/app/scenes') || currentUrl.startsWith('/app/set-timer')) {
      this.navbar.showNavbar = false;
    }

    if(this.user.getUser() !== null && this.app.isLoaded == false) {
      this.app.loadAllAppData();
      this.app.isLoaded = true;
    }
  }

  getFetchedSpeechDuration(): void {
    console.log('Audio finished loading.');
    this.speechesService.selected_speech_is_loading = false;
  
    const html_audio = document.querySelector('#playing_speech_html_audio') as HTMLAudioElement;
  
    html_audio.addEventListener('timeupdate', () => {
      const currentTime = html_audio.currentTime;
      const duration = html_audio.duration;
  
      this.speechesService.setSpeechDurationInSeconds(duration);
      this.speechesService.setSpeechReadingLevelInSeconds(currentTime);
  
      const formattedCurrentTime = `${Math.floor(currentTime / 60)
        .toString()
        .padStart(2, '0')}:${Math.floor(currentTime % 60)
        .toString()
        .padStart(2, '0')}`;
  
      this.speechesService.setSpeechReadingLevel(formattedCurrentTime);
  
      const formattedDuration = `${Math.floor(duration / 60)
        .toString()
        .padStart(2, '0')}:${Math.floor(duration % 60)
        .toString()
        .padStart(2, '0')}`;
  
      this.speechesService.setSpeechDuration(formattedDuration);
    });
    
    //! when the audio loading is canceled
    html_audio.addEventListener('error', () => {
      console.error('Error loading audio.');
      this.speechesService.selected_speech_is_loading = false;
    });

  }

  onAudioEnd(): void {
    if (this.playlistsService.isPlaying) {
      const playlistSpeeches = this.playlistsService.getPlayingPlaylist().speeches;
      const currentSpeech = this.speechesService.getSelectedSpeechData();
  
      const index = playlistSpeeches.findIndex((speech: any) => speech.id === currentSpeech.id);
  
      if (index >= 0 && index < playlistSpeeches.length - 1) {
        this.speechesService.setSelectedSpeechData(playlistSpeeches[index + 1]);
        console.log('Current speech index in playlist is ' + index);
      } 
      else if (index === playlistSpeeches.length - 1) {
        console.log('Playlist has finished!');
        this.playlistsService.isFinished = true;
      }
    }
  }

  onAudioSourceChange(): void {
    console.log('Audio started loading...');
    this.speechesService.selected_speech_is_loading = true;
  }
  

}
