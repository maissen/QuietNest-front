import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
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
    public speechesService: SpeechesService
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
}
