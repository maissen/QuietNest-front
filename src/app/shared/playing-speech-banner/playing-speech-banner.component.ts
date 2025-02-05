import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlayingSpeechControlsService } from 'src/app/services/playing-speech-controls.service';
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
  expandBottomSheet: boolean = false;

  constructor(
    public createSectionService: CreateSectionService,
    public playlistsService: PlaylistsService,
    public categoriesService: CategoriesService,
    public narratorsService: NarratorsService,
    private router: Router,
    private user: UserService,
    public speechesService: SpeechesService,
    public app: AppService,
    public playingSpeechControl: PlayingSpeechControlsService
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
  
  showPlay_hideReplay(): boolean {
    return this.speechesService.getSpeechReadingLevelInSeconds() < this.speechesService.getSpeechDurationInSeconds();
  }

  isOverlayVisible: boolean = false;
  overlayTimeout: any;

  showOverlay() {
    this.isOverlayVisible = true;

    if (this.overlayTimeout) {
      clearTimeout(this.overlayTimeout);
    }

    this.overlayTimeout = setTimeout(() => {
      this.isOverlayVisible = false;
    }, 3000);
  }

}
