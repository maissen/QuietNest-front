import { TestBed } from '@angular/core/testing';

import { ScenesSectionService } from './scenes-section.service';

describe('ScenesSectionService', () => {
  let service: ScenesSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenesSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
