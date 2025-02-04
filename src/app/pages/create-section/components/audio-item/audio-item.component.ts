import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CreateSectionSoundsService } from 'src/app/services/create-section-sounds.service';
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
    private soundsService: SoundsService,
    public createSectionSoundsService: CreateSectionSoundsService
  ) {}
  
  updateSoundVolume(event: Event): void {
    const volume = parseInt((event.target as HTMLInputElement).value);
    this.sound.volume = volume;
  }

  toggleSound(sound: any): void {
    sound.isActive = !sound.isActive;
  }
  
}
