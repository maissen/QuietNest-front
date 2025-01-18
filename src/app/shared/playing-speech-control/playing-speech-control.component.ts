import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-playing-speech-control',
  templateUrl: './playing-speech-control.component.html',
  styleUrls: ['./playing-speech-control.component.scss']
})
export class PlayingSpeechControlComponent {  

  constructor(
    public service: SpeechesService,
    private router: Router,
    private playlistsService: PlaylistsService,
    public globalService: AppService
  ) {}

  onSeek(event: any): void {
    
    if(this.service.getSpeechDurationInSeconds() > 0) {
      let seekValue = event.target.value;
      this.service.html_audio.currentTime = seekValue;
    } 
  }

  stopSpeech(): void {
    this.service.clearSelectedSpeechData();
    this.router.navigate(['app/'])
  }

  
}
