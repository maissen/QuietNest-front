import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { CreateSectionSoundsService } from 'src/app/services/create-section-sounds.service';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent {
  @Input() sound: any;
  isVolumeOverlayVisible: boolean = false;
  overlayTimeout: any;

  constructor(
    public service: CreateSectionService,
    public createSectionSoundsService: CreateSectionSoundsService,
    public app: AppService
  ) {}

  updateSoundVolume(event: Event): void {
    const volume = parseInt((event.target as HTMLInputElement).value);
    this.sound.volume = volume;

    this.isVolumeOverlayVisible = true;

    if (this.overlayTimeout) {
      clearTimeout(this.overlayTimeout);
    }

    this.overlayTimeout = setTimeout(() => {
      this.isVolumeOverlayVisible = false;
    }, 3000);
  }

  toggleSound(sound: any): void {
    sound.isActive = !sound.isActive;
  }
}
