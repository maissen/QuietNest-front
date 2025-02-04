import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
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
import { CategoriesService } from './services/categories.service';
import { CreateSectionSoundsService } from './services/create-section-sounds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'quietNest-front';

  constructor(
    private router: Router,
    public scenesService: ScenesService,
    public user: UserService,
    public app: AppService,
    public speechesService: SpeechesService,
    public service: CreateSectionService,
    public soundsService: SoundsService,
    public playlistsService: PlaylistsService,
    public navbar: NavbarService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService,
    public createSectionSounds: CreateSectionSoundsService
  ) { }

  ngOnInit() {
  
    this.check_url();
    this.router.events.subscribe(() => {
      this.check_url();
    });

  }

  @ViewChildren('audioElement') audioElements: QueryList<ElementRef> | undefined;
  ngAfterViewInit() {
    this.audioElements?.changes.subscribe(() => {
      this.handleAudioElements();
    });

    this.handleAudioElements();
  }

  private handleAudioElements() {
    if (this.audioElements) {
      this.soundsService.allHtmlSounds = [];
      this.audioElements.forEach(audioRef => {
        const audio = audioRef.nativeElement;
        this.soundsService.allHtmlSounds.push(audio)
      });
    }
  }

  check_url() {
    const currentUrl = this.router.url;
    this.navbar.showNavbar = currentUrl.startsWith('/app/');
    const user = this.user.getUser();

    if(currentUrl.startsWith('/app/speech') || currentUrl.startsWith('/app/playlist') || currentUrl.startsWith('/app/scenes') || currentUrl.startsWith('/app/set-timer')) {
      this.navbar.showNavbar = false;
    }
    
    if(currentUrl.startsWith('/app')) {
      this.app.loadScenes();
      if(this.narratorsService.getAllNarrators().length == 0) {
        this.app.loadAllNarrators();
      }
    }

    if(this.router.url.startsWith('/app/browse')) {

      if(this.narratorsService.trending_narrators.length == 0) {
        this.app.loadTrendingNarrators(12);
      }
      if(this.speechesService.popular_speeches.length == 0) {
        this.app.loadPopularSpeeches(12);
      }
      if(this.speechesService.random_speeches.length == 0) {
        this.app.loadRandomSpeeches(12);
      }
      if(this.speechesService.top_liked_speeches.length == 0) {
        this.app.loadTopLikedSpeeches(12);
      }

    }

    if(this.router.url.startsWith('/app/create')) {

      if(!this.soundsService.sounds_started_loading) {
        this.app.loadSounds();
        this.soundsService.sounds_started_loading = true;
      }
      
    }

    if(this.router.url.startsWith('/app/explore') || this.router.url.startsWith('/app/search') || this.router.url.startsWith('/app/profile')) {
      
      if(this.speechesService.getAllSpeeches().length == 0) {
        this.app.loadAllSpeeches();
      }
      if(this.narratorsService.getAllNarrators().length == 0) {
        this.app.loadAllNarrators();
      }
      if(this.playlistsService.getPlaylists().length == 0) {
        this.app.loadAllPlaylists();
      }

      if(this.narratorsService.getAllNarrators().length == 0) {
        this.app.loadAllNarrators();
      }

      if(this.categoriesService.getAllCategories().length == 0) {
        this.app.loadAllCategories();
      }

      if(this.speechesService.speechesDurations.length == 0) {
        this.app.loadSpeechDurations();
      }
    }

    if(this.router.url.startsWith('/app/profile')) {

      this.speechesService.fetchUserSpeechHistory(user.id);

    }

  }

  getFetchedSpeechDuration(): void {
    this.speechesService.selected_speech_is_loading = false;
    
    this.speechesService.html_audio.addEventListener('timeupdate', () => {
      const currentTime = this.speechesService.html_audio.currentTime;
      const duration = this.speechesService.html_audio.duration;
  
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
    this.speechesService.html_audio.addEventListener('error', () => {
      console.error('Error loading audio.');
      this.speechesService.selected_speech_is_loading = true;
    });

  }

  onAudioEnd(): void {

    this.speechesService.speech_is_ended_playing = true;
    //! if a playlist is playing then it'll play the next speech
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

  startLoadingSpeech(): void {
    this.speechesService.selected_speech_is_loading = true;
    this.speechesService.speech_is_ended_playing = false;
  }
  

}
