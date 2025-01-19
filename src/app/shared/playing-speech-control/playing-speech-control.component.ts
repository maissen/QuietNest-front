import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-playing-speech-control',
  templateUrl: './playing-speech-control.component.html',
  styleUrls: ['./playing-speech-control.component.scss']
})
export class PlayingSpeechControlComponent {  

  constructor(
    public service: SpeechesService,
    private router: Router,
    public globalService: AppService,
    public http: HttpClient,
    public user: UserService
  ) {}

  onSeek(event: any): void {
    
    if(this.service.getSpeechDurationInSeconds() > 0) {
      let seekValue = event.target.value;
      this.service.html_audio.currentTime = seekValue;
    } 
  }

  stop(): void {
    this.globalService.clearPlayback();
    this.router.navigate(['app/'])
  }


  toggleSaveUnsaveSpeech(): void {
    const userID = this.user.getUser().id;
    const speechID = this.service.getSelectedSpeechData().id;

    this.http.post(this.service.api_toggle_save_speech, {userID, speechID}).subscribe(
      (res) => {
        console.log(res);
        this.service.getSelectedSpeechData().saved = !this.service.getSelectedSpeechData().saved;
      },
      (err) =>{
        console.error('Error saving/unsaving speech:', err);
      }
    )
  }

  
}
