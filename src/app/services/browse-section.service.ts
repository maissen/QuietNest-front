import { Injectable, numberAttribute } from '@angular/core';
import { ScenesService } from './scenes.service';
import { SpeechesService } from './speeches.service';
import { PlaylistsService } from './playlists.service';
import { UserService } from './user.service';
import { AppService } from './app.service';
import { NarratorsService } from './narrators.service';

@Injectable({
  providedIn: 'root'
})
export class BrowseSectionService {

  constructor(
    private speechesService: SpeechesService,
    private playlistsService: PlaylistsService,
    private appService: AppService,
    private narratorsService: NarratorsService
  ) { }
}
