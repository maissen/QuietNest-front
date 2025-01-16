import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateSectionService } from 'src/app/services/create-section.service';
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
    private router: Router,
    public service: SpeechesService,
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
    
    this.service.userLikesSpeech(speech.id, userID).subscribe(response => {
  
      // fetch the updated number of likes
      this.service.getSpeechLikesNbr(speech.id).subscribe(likes => {
        speech.likes = likes;
        console.log(`Speech ID ${speech.id} has ${likes} likes.`);
      }, error => {
        console.error('Error fetching likes count:', error);
      });

      speech.liked = !speech.liked;

    }, 
    error => {
      console.error('Error liking speech:', error);
    });
  }
  
}
