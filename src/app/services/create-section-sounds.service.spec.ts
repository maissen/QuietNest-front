import { TestBed } from '@angular/core/testing';

import { CreateSectionSoundsService } from './create-section-sounds.service';

describe('CreateSectionSoundsService', () => {
  let service: CreateSectionSoundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSectionSoundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
