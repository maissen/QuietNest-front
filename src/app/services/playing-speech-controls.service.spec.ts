import { TestBed } from '@angular/core/testing';

import { PlayingSpeechControlsService } from './playing-speech-controls.service';

describe('PlayingSpeechControlsService', () => {
  let service: PlayingSpeechControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingSpeechControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
