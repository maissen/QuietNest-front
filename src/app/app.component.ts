import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './services/categories.service';
import { NarratorsService } from './services/narrators.service';
import { ScenesService } from './services/scenes.service';
import { SoundsService } from './services/sounds.service';
import { PlaylistsService } from './services/playlists.service';
import { UserService } from './services/user.service';
import { SpeechesService } from './services/speeches.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quietNest-front';
  showNavbar: boolean = false;

  constructor(
    private router: Router,
    public scenesService: ScenesService,
    public user: UserService,
    private app: AppService
  ) { }

  ngOnInit() {
  
    this.checkIfUrlEndsWithApp();
    
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });

   
  }
  
  checkIfUrlEndsWithApp() {
    const currentUrl = this.router.url;
    this.showNavbar = currentUrl.startsWith('/app/');
    if(this.user.getUser() !== null && this.app.isLoaded == false) {
      this.app.loadAllAppData();
      this.app.isLoaded = true;
    }
  }
}
