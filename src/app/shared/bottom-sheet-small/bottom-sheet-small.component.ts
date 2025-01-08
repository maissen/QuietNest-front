import { Component } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';

@Component({
  selector: 'app-bottom-sheet-small',
  templateUrl: './bottom-sheet-small.component.html',
  styleUrls: ['./bottom-sheet-small.component.scss']
})
export class BottomSheetSmallComponent {

  constructor(
    public bottomSheetService: BottomSheetService,
    public createSectionLogic: CreateSectionLogicService
  ) {}
  
}
