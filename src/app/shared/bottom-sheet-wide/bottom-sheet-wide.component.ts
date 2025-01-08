import { Component } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';

@Component({
  selector: 'app-bottom-sheet-wide',
  templateUrl: './bottom-sheet-wide.component.html',
  styleUrls: ['./bottom-sheet-wide.component.scss']
})
export class BottomSheetWideComponent {

  activeSounds: any[] = [];
  expandConent: boolean = false;

  constructor(
    public bottomSheetService: BottomSheetService,
    public createSectionLogic: CreateSectionLogicService,
  ) {}
  
  expandBody() {
    this.expandConent = !this.expandConent;
  }

}
