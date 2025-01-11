import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-bottom-sheet-small',
  templateUrl: './bottom-sheet-small.component.html',
  styleUrls: ['./bottom-sheet-small.component.scss']
})
export class BottomSheetSmallComponent {

  constructor(
    public service: CreateSectionService
  ) {}
  
}
