import { Component } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';

@Component({
  selector: 'app-bottom-sheet-wide',
  templateUrl: './bottom-sheet-wide.component.html',
  styleUrls: ['./bottom-sheet-wide.component.scss']
})
export class BottomSheetWideComponent {

  activeSounds: any[] = [];

  constructor(
    public bottomSheetService: BottomSheetService,
  ) {}
  

}
