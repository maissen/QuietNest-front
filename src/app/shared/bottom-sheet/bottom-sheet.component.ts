import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  constructor(
    public service: CreateSectionService,
    public timerService: TimerService
  ) {}

  get formattedTimer(): string {
    return this.timerService.getFormattedCount();
  }
}
