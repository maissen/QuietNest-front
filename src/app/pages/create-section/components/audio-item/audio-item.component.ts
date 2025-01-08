import { Component, Input } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss']
})
export class AudioItemComponent {

  @Input() audio: any;

  constructor(
    public bottomSheetService: BottomSheetService,
    public logicService: CreateSectionLogicService
  ) {}
  

}
