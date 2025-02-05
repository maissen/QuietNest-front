import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-sounds-bottom-sheet',
  templateUrl: './sounds-bottom-sheet.component.html',
  styleUrls: ['./sounds-bottom-sheet.component.scss']
})
export class SoundsBottomSheetComponent {
  constructor(
    public service: CreateSectionService,
    public timerService: TimerService,
    public soundsService: SoundsService
  ) {}
}
