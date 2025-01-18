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

  playlistClick(): void {
    this.service.setPlayingPlayList(this.playlist);
    
    if(this.playlist.id != this.service.getPlayingPlaylist().id) {
      this.service.incrementPlaylistPlayings(this.playlist);
    }

  }
}
