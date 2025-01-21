import { Injectable, numberAttribute } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';
import { PlaylistsService } from './playlists.service';
import { UserService } from './user.service';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  constructor(
    private speechesService: SpeechesService,
    private playlistsService: PlaylistsService,
    private appService: AppService
  ) { }

  get_most_played_speeches(number: number = 12): any[] {
    return this.speechesService.getAllSpeeches()
      .sort((a, b) => b.playing_nbr - a.playing_nbr)
      .slice(0, number);
  }

  get_most_played_playlists(number: number = 12) {
    return this.playlistsService.getPlaylists()
      .sort((a, b) => b.playing_nbr - a.playing_nbr)
      .slice(0, number);
  }

  get_random_speeches(): any {
    return this.appService.get_random_speeches();
  }

  get_most_liked_speeches(number: number = 12): any[] {
    return this.speechesService.getAllSpeeches()
      .sort((a, b) => b.likes - a.likes)
      .slice(0, number);
  }
}
