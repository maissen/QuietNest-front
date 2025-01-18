import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
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
    public service: PlaylistsService,
    public categoriesService: CategoriesService,
    private speechesService: SpeechesService
  ) { }

  playlistClick(): void {
    this.service.setPlayingPlayList(this.playlist);
    
    if(this.playlist.id != this.service.getPlayingPlaylist().id) {
      this.service.incrementPlaylistPlayings(this.playlist);
    }

    this.speechesService.clearSelectedSpeechData();
    this.speechesService.setSelectedSpeechData(this.playlist.speeches[0]);

  }
}
