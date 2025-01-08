import { Component } from '@angular/core';
import { BottomSheetService } from 'src/app/services/bottom-sheet.service';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { PlayingAudioService } from 'src/app/services/playing-audio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public bottomSheetService: BottomSheetService,
    public createSectionLogic: CreateSectionLogicService
  ) {}

}
