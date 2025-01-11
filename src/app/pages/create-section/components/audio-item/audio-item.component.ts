import { Component, Input } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent {

  @Input() sound: any;

  constructor(
    public bottomSheetService: BottomSheetService,
    private createSectionService: CreateSectionService
  ) {}

  toggleSound(sound: any) {
    this.createSectionService.toggleActiveSound(sound);
  }

  isActive(): boolean {
    return this.createSectionService.getActiveSounds().includes(this.sound);
  }
}
