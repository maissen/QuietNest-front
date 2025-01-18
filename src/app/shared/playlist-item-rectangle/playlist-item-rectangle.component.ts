import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { PlaylistsService } from 'src/app/services/playlists.service';

@Component({
  selector: 'app-playlist-item-rectangle',
  templateUrl: './playlist-item-rectangle.component.html',
  styleUrls: ['./playlist-item-rectangle.component.scss']
})
export class PlaylistItemRectangleComponent {

  @Input() playlist: any;

  constructor(
    public service: PlaylistsService,
    public categoriesService: CategoriesService
  ) { }

  displaySpeechBanner() {
    // this.service.setSelectedSpeechData(this.playlist);
    // this.service.isPlaying();
  }
}
