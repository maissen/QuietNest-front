import { Component } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer-section',
  templateUrl: './timer-section.component.html',
  styleUrls: ['./timer-section.component.scss']
})
export class TimerSectionComponent {

  constructor(
    public service: TimerService
  ) {}

}
