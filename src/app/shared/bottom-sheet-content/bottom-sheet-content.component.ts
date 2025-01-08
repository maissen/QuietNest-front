import { Component } from '@angular/core';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';

@Component({
  selector: 'app-bottom-sheet-content',
  templateUrl: './bottom-sheet-content.component.html',
  styleUrls: ['./bottom-sheet-content.component.scss']
})
export class BottomSheetContentComponent {

  constructor(
    public createSectionLogic: CreateSectionLogicService
  ) {}

}
