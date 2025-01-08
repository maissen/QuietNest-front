import { Component, OnInit } from '@angular/core';
import { PlayingAudioService } from './services/playing-audio.service';
import { Router } from '@angular/router';
import { ScenesSectionService } from './services/scenes-section.service';
import { ShowHideElementsService } from './services/show-hide-elements.service';

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
    public showItems: ShowHideElementsService
  ) {
    
  }

  ngOnInit() {
    // Subscribe to the BehaviorSubject to track changes dynamically
    this.playingAudioService.selectedAudioData$.subscribe(data => {
      this.isPlayingAudio = data !== null; // Update isPlayingAudio based on the presence of data
    });
  
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
