import { Component, OnInit } from '@angular/core';
import { PlayingAudioService } from './services/playing-audio.service';
import { Router } from '@angular/router';
import { ScenesSectionService } from './services/scenes-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quietNest-front';
  showNavbar: boolean = false;
  isPlayingAudio: boolean = false;

  constructor(
    private playingAudioService: PlayingAudioService,
    private router: Router,
    private scenesService: ScenesSectionService
  ) {}

  ngOnInit() {
    // Subscribe to the BehaviorSubject to track changes dynamically
    this.playingAudioService.selectedAudioData$.subscribe(data => {
      this.isPlayingAudio = data !== null; // Update isPlayingAudio based on the presence of data
    });

    // Check the initial URL
    this.checkIfUrlEndsWithApp();

    // Subscribe to URL changes and check if the URL ends with /app/...
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });

    // Set default scene and log the result
    this.scenesService.setDefaultScene().subscribe(defaultScene => {
      console.log('Default scene set:', defaultScene);  // Check if the default scene is set successfully
    });
  }

  checkIfUrlEndsWithApp() {
    const currentUrl = this.router.url;
    this.showNavbar = currentUrl.startsWith('/app/');
  }
}
