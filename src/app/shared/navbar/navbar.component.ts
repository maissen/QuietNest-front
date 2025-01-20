import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public service: CreateSectionService,
    public soundsService: SoundsService,
    public speechesService: SpeechesService,
    private router: Router
  ) {}

  checkRoute(): boolean {
    return this.router.url.startsWith('/app/search') || this.router.url.startsWith('/app/explore');
  }
  

}
