import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent {
  @Input() speech: any = null;

  constructor(
    public service: SpeechesService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService,
    public playlistsService: PlaylistsService,
    private user: UserService
  ) { }

  speechClick() {

    this.playlistsService.clearPlayingPlaylist();
    this.service.setSelectedSpeechData(this.speech);
  }
}
