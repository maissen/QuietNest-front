import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayingSpeechService } from 'src/app/services/playing-speech.service';

@Component({
  selector: 'app-speech-section',
  templateUrl: './speech-section.component.html',
  styleUrls: ['./speech-section.component.scss']
})
export class SpeechSectionComponent implements OnInit {

  constructor(
    public service: PlayingSpeechService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.service.getSelectedSpeechData()) {
      this.router.navigate(['/app/browse']);
    }
  }
}
