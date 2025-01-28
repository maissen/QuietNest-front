import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-playing-speech-banner',
  templateUrl: './playing-speech-banner.component.html',
  styleUrls: ['./playing-speech-banner.component.scss']
})
export class PlayingSpeechBannerComponent {
  hideBanner: boolean = false;
  didUserLikeThisSpeech: boolean = false;

  constructor(
    public createSectionService: CreateSectionService,
    public service: SpeechesService,
    public playlistsService: PlaylistsService,
    public globalService: AppService,
    public categoriesService: CategoriesService,
    public narratorsService: NarratorsService,
    private router: Router,
    private user: UserService,
    private speechesService: SpeechesService
  ) {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
    this.checkRoute();
  }

  private checkRoute(): void {
    const url = this.router.url;
    this.hideBanner = url.startsWith('/app/speech') || url.startsWith('/app/playlist') || url.startsWith('/app/set-timer') || url.startsWith('/app/create') || url.startsWith('/app/scenes');
  }
  

  likeSpeech() {
    let userID = this.user.getUser().id;
    let speech = this.service.getSelectedSpeechData();
    
    this.service.userLikesSpeech(speech.id, userID).subscribe(response => {
  
      if (speech.liked) {
        speech.likes = parseInt(speech.likes) - 1 ;
      }
      else {
        speech.likes = parseInt(speech.likes) + 1 ;
      }

      speech.liked = !speech.liked;

    }, 
    error => {
      console.error('Error liking speech:', error);
    });
  }

  likePlaylist() {
    let userID = this.user.getUser().id;
    let playlist = this.playlistsService.getPlayingPlaylist();
    
    this.playlistsService.userLikesPlaylist(playlist.id, userID).subscribe(response => {
  
      if (playlist.liked) {
        playlist.likes = parseInt(playlist.likes) - 1 ;
      }
      else {
        playlist.likes = parseInt(playlist.likes) + 1 ;
      }

      playlist.liked = !playlist.liked;

    }, 
    error => {
      console.error('Error liking playlist:', error);
    });
  }

  updateVolume(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let volume = parseFloat(inputElement.value);
    this.service.updatePlayingSpeechVolume(volume);
  }
  
  showPlay_hideReplay(): boolean {
    return this.service.getSpeechReadingLevelInSeconds() < this.service.getSpeechDurationInSeconds();
  }

}
