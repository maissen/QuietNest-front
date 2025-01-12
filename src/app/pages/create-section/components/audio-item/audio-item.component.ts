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
    this.createSectionService.toggleActiveSound(sound);
    console.log(sound)
  }

  updateVolume(event: Event): void {
    const volume = (event.target as HTMLInputElement).valueAsNumber;
    this.audioRef.nativeElement.volume = volume / 10;

    this.createSectionService.updateActiveSoundVolume(this.sound, volume);
    console.log('volume of ' + this.sound.name + ' is being updated.');
  }
}
