import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-playing-speech-banner',
  templateUrl: './playing-speech-banner.component.html',
  styleUrls: ['./playing-speech-banner.component.scss']
})
export class PlayingSpeechBannerComponent {
  hideBanner: boolean = false;

  constructor(
    public service: PlayingSpeechService,
    public createSectionService: CreateSectionService,
    private router: Router,
    private speechesService: SpeechesService,
    private user: UserService
  ) {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
    this.checkRoute();
  }

  private checkRoute(): void {
    const url = this.router.url;
    this.hideBanner = url.startsWith('/app/speech/') || url.startsWith('/app/playlist/');
  }

  likeSpeech() {
    let userID = this.user.getUser().id;
    let speech = this.service.getSelectedSpeechData();
    
    this.speechesService.userLikesSpeech(speech.id, userID).subscribe(response => {
  
      // After the like action, fetch the updated number of likes
      this.speechesService.getSpeechLikesNbr(speech.id).subscribe(likes => {
        speech.likes = likes; // Update the speech's likes count
        console.log(`Speech ID ${speech.id} has ${likes} likes.`);
      }, error => {
        console.error('Error fetching likes count:', error);
      });
    }, error => {
      console.error('Error liking speech:', error);
    });
  }
  
}
