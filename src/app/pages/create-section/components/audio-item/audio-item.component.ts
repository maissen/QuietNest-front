import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent {
  @Input() sound: any;

  constructor(public createSectionService: CreateSectionService) {}

  toggleSound(sound: any): void {
    this.createSectionService.toggleActiveSound(sound);
    this.createSectionService.toggleActiveSoundIDRef('#sound-audio-' + sound.id);
  }
}
