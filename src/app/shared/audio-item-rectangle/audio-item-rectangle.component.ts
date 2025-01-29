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
  @Input() speech: any;

  constructor(
    public service: SpeechesService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService,
    public playlistsService: PlaylistsService,
    private user: UserService
  ) { }

  speechClick() {
    if (this.service.getSelectedSpeechData() == null || this.speech.id != this.service.getSelectedSpeechData().id) {
      this.service.incrementSpeechPlayings(this.speech);
      this.service.set_current_speech(this.user.getUser(), this.speech)
    }

    this.playlistsService.clearPlayingPlaylist();
    this.service.setSelectedSpeechData(this.speech);
  }
}
