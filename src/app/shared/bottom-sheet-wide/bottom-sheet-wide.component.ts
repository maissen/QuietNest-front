import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-bottom-sheet-wide',
  templateUrl: './bottom-sheet-wide.component.html',
  styleUrls: ['./bottom-sheet-wide.component.scss']
})
export class BottomSheetWideComponent {

  constructor(
    public service: CreateSectionService
  ) {}
  

}
