import { Component, OnInit } from '@angular/core';
import { PlayingAudioService } from './services/playing-audio.service';
import { Router } from '@angular/router';
import { ShowHideComponentsService } from './services/show-hide-components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quietNest-front';
  showNavbar: boolean = false;
  isPlayingAudio: boolean = false;
  avgcolor: string = 'darkgreen';

  constructor(
    private playingAudioService: PlayingAudioService,
    private router: Router,
    public showHideComponents: ShowHideComponentsService
  ) {
    
  }

  ngOnInit() {
  
    this.checkIfUrlEndsWithApp();
  
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });
  
  }
  
  checkIfUrlEndsWithApp() {
    const currentUrl = this.router.url;
    this.showNavbar = currentUrl.startsWith('/app/');
  }
}
