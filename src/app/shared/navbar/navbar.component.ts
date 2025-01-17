import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { SoundsService } from 'src/app/services/sounds.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public service: CreateSectionService,
    public soundsService: SoundsService,
    public speechesService: SpeechesService
  ) {}

}
