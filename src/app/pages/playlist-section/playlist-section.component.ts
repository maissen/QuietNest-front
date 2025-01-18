import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-playlist-section',
  templateUrl: './playlist-section.component.html',
  styleUrls: ['./playlist-section.component.scss']
})
export class PlaylistSectionComponent implements OnInit {

  constructor(
      public router: Router,
      public narratorsService: NarratorsService,
      public user: UserService,
      public http: HttpClient,
      public service: PlaylistsService,
      public categoriesService: CategoriesService,
      public speechesService: SpeechesService
    ) {}
  
  ngOnInit(): void {
    if (this.service.getPlayingPlaylist() == null) {
      this.router.navigate(['/app/browse']);
    }
  }

}
