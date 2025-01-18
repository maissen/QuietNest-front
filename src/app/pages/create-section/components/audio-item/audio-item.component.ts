import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { SoundsService } from 'src/app/services/sounds.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent {
  @Input() sound: any;

  constructor(
    public service: CreateSectionService,
    private soundsService: SoundsService
  ) {}

  toggleSound(sound: any): void {
    this.service.toggleActiveSound(sound);
    this.service.toggleActiveSoundIDRef('#sound-audio-' + sound.id);

    if(this.service.activeSoundsPaused) {
      this.service.togglePauseActiveSounds()
    }
  }

  updateSoundVolume(event: Event): void {
    const volume = parseInt((event.target as HTMLInputElement).value); // Extract the value
    this.soundsService.updateSoundVolume(this.sound, volume);
    this.service.updateActiveSoundVolume(this.sound, volume);
  }
  
}
