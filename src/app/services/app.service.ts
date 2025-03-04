import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import { NarratorsService } from './narrators.service';
import { ScenesService } from './scenes.service';
import { SoundsService } from './sounds.service';
import { PlaylistsService } from './playlists.service';
import { UserService } from './user.service';
import { SpeechesService } from './speeches.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isPlayingAudio: boolean = false;
  avgcolor: string = '';
  
  constructor(
    public user: UserService,
    public scenesService: ScenesService,
    private http: HttpClient,
    private playlistsService: PlaylistsService,
    private speechesService: SpeechesService,
    private soundsService: SoundsService,
    private categoriesService: CategoriesService,
    private narratorsService: NarratorsService,
  ) { }


  loadScenes(): void {
    this.http.get<any[]>(this.scenesService.api_get_all_scenes).subscribe(
      allScenes => {
        this.scenesService.setScenesList(allScenes);
        if (this.user.getUser() !== null) {
          const userSceneID = this.user.getUser().sceneID;
          const scene = this.scenesService.getSceneByID(userSceneID);
          if (scene) {
            this.scenesService.setActiveScene(scene);
          } else {
            console.warn(`No scene found with ID: ${userSceneID}`);
          }
        } else {
          console.warn('User is not logged in');
        }
      },
      error => {
        console.error('Error loading scenes:', error);
      }
    );
  }

  
  
  loadTrendingNarrators(count: number = 0): void {
    this.http.get<any[]>(`${this.narratorsService.api_trending_narrators}/${this.user.getUser().id}/${count}`).subscribe(
      trendingNarrators => {
        this.narratorsService.trending_narrators = trendingNarrators;
      },
      error => {
        console.error('Error loading narrators:', error);
      }
    );
  }

  loadAllNarrators(count: number = 0): void {
    this.http.get<any[]>(`${this.narratorsService.api_get_all_narrators}/${this.user.getUser().id}/${count}`).subscribe(
      allNarrators => {
        this.narratorsService.setAllnarrators(allNarrators);
      },
      error => {
        console.error('Error loading narrators:', error);
      }
    );
  }
  
  loadCategories(): void {
    this.http.get<any[]>(this.categoriesService.api_get_all_categories).subscribe(
      categories => {
        this.categoriesService.setAllCategories(categories);
      },
      error => {
        console.error('Error loading categories:', error);
      }
    );
  }
  
  loadSpeechesDurations(): void {
    this.http.get<any[]>(this.speechesService.api_speeches_durations).subscribe(
      res => {
        this.speechesService.speechesDurations = res;
      },
      error => {
        console.error('Error loading speech durations:', error);
      }
    );
  }
  
  loadAllSpeeches(count: number = 0): void {
    this.http.get<any[]>(`${this.speechesService.api_get_all_speeches}/${this.user.getUser().id}/${count}`).subscribe(
      speeches => {
        this.speechesService.setSpeeches(speeches);
      },
      error => {
        console.error('Error loading speeches:', error);
      }
    );
  }

  loadPopularSpeeches(count: number = 0): void {
    this.http.get<any[]>(`${this.speechesService.api_get_popular_speeches}/${this.user.getUser().id}/${count}`).subscribe(
      speeches => {
        this.speechesService.popular_speeches = speeches;
      },
      error => {
        console.error('Error loading popular speeches:', error);
      }
    );
  }

  loadTopLikedSpeeches(count: number = 0): void {
    this.http.get<any[]>(`${this.speechesService.api_get_top_liked_speeches}/${this.user.getUser().id}/${count}`).subscribe(
      speeches => {
        this.speechesService.top_liked_speeches = speeches;
      },
      error => {
        console.error('Error loading top liked speeches:', error);
      }
    );
  }
  
  loadAllPlaylists(count: number = 0): void {
    this.http.get<any[]>(`${this.playlistsService.api_all_playlists}/${this.user.getUser().id}/${count}`).subscribe(
      allPlaylists => {
        this.playlistsService.setPlayLists(allPlaylists);
      },
      error => {
        console.error('Error loading all playlists:', error);
      }
    );
  }  
  
  loadRandomSpeeches(count: number = 0): void {
    this.http.get<any[]>(`${this.speechesService.api_get_random_speeches}/${this.user.getUser().id}/${count}`).subscribe(
      random_speeches => {
        this.speechesService.random_speeches = random_speeches;
      },
      error => {
        console.error('Error loading random speeches:', error);
      }
    );
  }
  
  loadSounds(): void {
    this.http.get<any[]>(this.soundsService.apiGetAllSounds()).subscribe(
      sounds => {
        this.soundsService.setSounds(sounds);
        this.http.get<any[]>(this.soundsService.apiGetSoundsCategories()).subscribe(
          categories => {
            this.soundsService.setCategories(categories);
          },
          error => {
            console.error('Error loading sound categories:', error);
          }
        );
      },
      error => {
        console.error('Error loading sounds:', error);
      }
    );
  }

  loadAllCategories(): void {
    this.http.get<any[]>(`${this.categoriesService.api_get_all_categories}`).subscribe(
      categories => {
        this.categoriesService.setAllCategories(categories);
      },
      error => {
        console.error('Error loading categories:', error);
      }
    );
  }


  loadSpeechDurations(): void {
    this.http.get<any[]>(`${this.speechesService.api_speeches_durations}`).subscribe(
      durations => {
        this.speechesService.speechesDurations = durations;
      },
      error => {
        console.error(error)
      }
    )
  }

  

  //! Replay speeches & playlists
  replay(): void {

    //! replay a playlist
    if (this.playlistsService.isPlaying) { 
      const currentPlaylist = this.playlistsService.getPlayingPlaylist();
  
      if (currentPlaylist && currentPlaylist.speeches.length > 0) {
        this.playlistsService.isFinished = false;
        this.speechesService.setSelectedSpeechData(this.speechesService.getSpeechById(currentPlaylist.speeches[0]));
        this.playlistsService.setPlayingPlayList(currentPlaylist);
        this.speechesService.html_audio.currentTime = 0;
        this.speechesService.html_audio.play();

        //? increment plays number of playlist
        this.playlistsService.incrementPlaylistPlayings(currentPlaylist);
      }
    } 
    else {
      //! Reset single speech playback
      const currentSpeech = this.speechesService.getSelectedSpeechData();
  
      if (currentSpeech) {
        this.speechesService.clearSelectedSpeechData();
        this.speechesService.setSelectedSpeechData(currentSpeech);
        this.speechesService.html_audio.currentTime = 0;
        this.speechesService.html_audio.play();

        //? increment plays number of speech
        this.speechesService.incrementSpeechPlayings(currentSpeech);
      }
    }
  }
  

  showPlay_hideReplay(): boolean {
    const isPlaylistFinished = this.playlistsService.isPlaying && this.playlistsService.isFinished;
  
    //? Show the play/pause button in the following cases:
    //? - If a playlist or speech is currently playing and not finished.
    //? - Hide the play button (show replay) only if playback is finished.
    return !(isPlaylistFinished || this.speechesService.speech_is_ended_playing);
  }


  clearPlayback(): void {
    if (this.playlistsService.isPlaying) {
    
      //! Clear playlist playback
      this.playlistsService.isFinished = true;
      this.playlistsService.clearPlayingPlaylist();
      this.speechesService.clearSelectedSpeechData();
      this.speechesService.html_audio.pause();
      this.speechesService.html_audio.currentTime = 0;    

      this.speechesService.clear_current_speech(this.user.getUser());
    } 
    else if (this.speechesService.getSelectedSpeechData()) {
    
      //! Clear single speech playback
      this.speechesService.clearSelectedSpeechData();
      this.speechesService.html_audio.pause();
      this.speechesService.html_audio.currentTime = 0;

      this.speechesService.clear_current_speech(this.user.getUser());

    }
  }  

  playNextSpeechOfPlaylist(): void {
    const playlist = this.playlistsService.getPlayingPlaylist();
    if (!playlist || !playlist.speeches.length) return;

    const currentSpeechId = this.speechesService.getSelectedSpeechData().id;
    const currentIndex = playlist.speeches.indexOf(currentSpeechId);

    if (currentIndex >= 0 && currentIndex < playlist.speeches.length - 1) {
      const nextSpeech = this.speechesService.getSpeechById(playlist.speeches[currentIndex + 1]);
      this.speechesService.setSelectedSpeechData(nextSpeech);
    } else {
      this.playlistsService.isFinished = true;
    }
  }

  playPrevSpeechOfPlaylist(): void {
    const playlist = this.playlistsService.getPlayingPlaylist();
    if (!playlist || !playlist.speeches.length) return;

    const currentSpeechId = this.speechesService.getSelectedSpeechData().id;
    const currentIndex = playlist.speeches.indexOf(currentSpeechId);

    if (currentIndex > 0) {
      const prevSpeech = this.speechesService.getSpeechById(playlist.speeches[currentIndex - 1]);
      this.speechesService.setSelectedSpeechData(prevSpeech);
      this.playlistsService.isFinished = false;
    } 
}


  playingSpeechVolume: number = .7;

}
