import { TestBed } from '@angular/core/testing';

import { PlayingAudioService } from './playing-audio.service';

describe('PlayingAudioService', () => {
  let service: PlayingAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
