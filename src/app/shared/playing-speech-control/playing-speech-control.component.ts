import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { PlayingSpeechControlsService } from 'src/app/services/playing-speech-controls.service';
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
    public user: UserService,
    public playingSpeechControl: PlayingSpeechControlsService
  ) {}

  stop(): void {
    this.globalService.clearPlayback();
    this.router.navigate(['app/'])
  }
  
}
