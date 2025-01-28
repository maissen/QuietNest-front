import { TestBed } from '@angular/core/testing';

import { OverlayVideoService } from './overlay-video.service';

describe('OverlayVideoService', () => {
  let service: OverlayVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
