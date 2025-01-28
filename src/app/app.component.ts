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
import { NarratorsService } from './services/narrators.service';

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
    public navbar: NavbarService,
    public narratorsService: NarratorsService,
  ) { }

  ngOnInit() {
  
    this.check_url();
    this.router.events.subscribe(() => {
      this.check_url();
    });

    this.loadAllAppData();

  }

  loadAllAppData(): void {
  }
  
  check_url() {
    const currentUrl = this.router.url;
    this.navbar.showNavbar = currentUrl.startsWith('/app/');

    if(currentUrl.startsWith('/app/speech') || currentUrl.startsWith('/app/playlist') || currentUrl.startsWith('/app/scenes') || currentUrl.startsWith('/app/set-timer')) {
      this.navbar.showNavbar = false;
    }

    if(this.user.getUser() !== null && this.app.isLoaded == false) {
      this.app.isLoaded = true;
    }
    
    if(currentUrl.startsWith('/app')) {
      this.app.loadScenes();
      this.app.loadAllNarrators();
    }

    if(this.router.url.startsWith('/app/browse')) {
      if(this.narratorsService.trending_narrators.length == 0) {
        this.app.loadTrendingNarrators(12);
      }
      if(this.speechesService.popular_speeches.length == 0) {
        this.app.loadPopularSpeeches(12);
      }
      if(this.playlistsService.hot_playlists.length == 0) {
        this.app.loadHotPlaylists(12);
      }
      if(this.speechesService.random_speeches.length == 0) {
        this.app.loadRandomSpeeches(12);
      }
      if(this.speechesService.top_liked_speeches.length == 0) {
        this.app.loadTopLikedSpeeches(12);
      }
    }

    if(this.router.url.startsWith('/app/create')) {
      if(this.soundsService.getSounds().length == 0) {
        this.app.loadSounds();
      }
    }

    if(this.router.url.startsWith('/app/explore')) {
      this.app.loadAllNarrators();
      this.app.loadAllSpeeches();
      this.app.loadAllPlaylists();
    }

  }

  getFetchedSpeechDuration(): void {
    // console.log('Audio finished loading.');
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
      let index = this.playlistsService.getPlayingPlaylist().speeches.indexOf(this.speechesService.getSelectedSpeechData().id);
  
      if (index >= 0 && index < playlistSpeeches.length - 1) {
        this.speechesService.setSelectedSpeechData(this.speechesService.getSpeechById(playlistSpeeches[index + 1]));
      } 
      else if (index == playlistSpeeches.length - 1) {
        this.playlistsService.isFinished = true;
      }
    }
  }

  onAudioSourceChange(): void {
    // console.log('Audio started loading...');
    this.speechesService.selected_speech_is_loading = true;
  }
  

}
