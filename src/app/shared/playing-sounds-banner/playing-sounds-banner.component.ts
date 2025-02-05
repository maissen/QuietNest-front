import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-playing-sounds-banner',
  templateUrl: './playing-sounds-banner.component.html',
  styleUrls: ['./playing-sounds-banner.component.scss']
})
export class PlayingSoundsBannerComponent {

  constructor(
      public service: CreateSectionService,
      public timerService: TimerService,
      public soundsService: SoundsService
    ) {}

}
