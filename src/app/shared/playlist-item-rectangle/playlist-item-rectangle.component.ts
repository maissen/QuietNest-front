import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-playlist-item-rectangle',
  templateUrl: './playlist-item-rectangle.component.html',
  styleUrls: ['./playlist-item-rectangle.component.scss']
})
export class PlaylistItemRectangleComponent {

  @Input() playlist: any;

  constructor(
    public service: SpeechesService,
    public playlistsSerivce: PlaylistsService,
    public categoriesService: CategoriesService
  ) { }

  displaySpeechBanner() {
    // this.service.setSelectedSpeechData(this.playlist);
    // this.service.isPlaying();
  }
}
