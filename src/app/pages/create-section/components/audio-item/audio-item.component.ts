import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent {
  @Input() sound: any;
  @ViewChild('audio', { static: false }) audioRef!: ElementRef<HTMLAudioElement>;

  constructor(public createSectionService: CreateSectionService) {}

  toggleSound(sound: any): void {
    const isCurrentlyActive = this.isActive();
    this.createSectionService.toggleActiveSound(sound);

    // Handle audio playback
    if (isCurrentlyActive) {
      this.audioRef.nativeElement.pause();
      this.audioRef.nativeElement.currentTime = 0;
    } else {
      this.audioRef.nativeElement.play();
    }
  }

  isActive(): boolean {
    return this.createSectionService.getActiveSounds().includes(this.sound);
  }

  updateVolume(event: Event): void {
    const volume = (event.target as HTMLInputElement).valueAsNumber;
    this.audioRef.nativeElement.volume = volume / 10;
  }
}
