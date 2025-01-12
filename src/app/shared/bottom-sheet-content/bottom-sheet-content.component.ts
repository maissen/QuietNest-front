import { Component, QueryList, ViewChildren, ElementRef, Input } from '@angular/core';
import { AudioItemComponent } from 'src/app/pages/create-section/components/audio-item/audio-item.component';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-bottom-sheet-content',
  templateUrl: './bottom-sheet-content.component.html',
  styleUrls: ['./bottom-sheet-content.component.scss']
})
export class BottomSheetContentComponent {

  @Input() data: any[] = [];
  @ViewChildren('audio') audioRefs!: QueryList<ElementRef<HTMLAudioElement>>;

  constructor(
    public createSectionService: CreateSectionService,
  ) {}

  updateVolume(index: number, event: Event): void {
    const volume = (event.target as HTMLInputElement).valueAsNumber;

    // Access the audio element using the index
    const audioElement = this.audioRefs.toArray()[index].nativeElement;
    if (audioElement) {
      audioElement.volume = volume / 10;
    }

    this.createSectionService.updateActiveSoundVolume(this.data[index], volume);
  }
}
