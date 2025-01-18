import { Component } from '@angular/core';
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
    private playlistsService: PlaylistsService
  ) {}

  getFetchedSpeechDuration(): void {
    const html_audio = document.querySelector('#playing_speech_html_audio') as HTMLAudioElement;
    html_audio.addEventListener('timeupdate', () => {
      const currentTime = html_audio.currentTime;
      const duration = html_audio.duration;

      this.speechesService.setSpeechDurationInSeconds(duration);
      this.speechesService.setSpeechReadingLevelInSeconds(currentTime);

      const formattedCurrentTime = `${Math.floor(currentTime / 60)
        .toString()
        .padStart(2, '0')}:${Math.floor(currentTime % 60)
        .toString()
        .padStart(2, '0')}`;

      this.speechesService.setSpeechReadingLevel(formattedCurrentTime)

      const formattedDuration = `${Math.floor(duration / 60)
        .toString()
        .padStart(2, '0')}:${Math.floor(duration % 60)
        .toString()
        .padStart(2, '0')}`;

      this.speechesService.setSpeechDuration(formattedDuration)
    });
  }

  onAudioEnd(): void {
    if (this.playlistsService.isPlaying) {
      const playlistSpeeches = this.playlistsService.getPlayingPlaylist().speeches;
      const currentSpeech = this.speechesService.getSelectedSpeechData();
  
      const index = playlistSpeeches.findIndex((speech: any) => speech.id === currentSpeech.id);
  
      if (index >= 0 && index < playlistSpeeches.length - 1) {
        this.speechesService.setSelectedSpeechData(playlistSpeeches[index + 1]);
        console.log('Current speech index in playlist is ' + index);
      } 
      else if (index === playlistSpeeches.length - 1) {
        console.log('Playlist has finished!');
      }
    }
  }
  

}
