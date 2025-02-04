import { TestBed } from '@angular/core/testing';

import { ActiveSoundsHtmlAudioService } from './active-sounds-html-audio.service';

describe('ActiveSoundsHtmlAudioService', () => {
  let service: ActiveSoundsHtmlAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveSoundsHtmlAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
