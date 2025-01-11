import { TestBed } from '@angular/core/testing';

import { PlayingSpeechService } from './playing-speech.service';

describe('PlayingSpeechService', () => {
  let service: PlayingSpeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingSpeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
