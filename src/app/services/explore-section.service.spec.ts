import { TestBed } from '@angular/core/testing';

import { ExploreSectionService } from './explore-section.service';

describe('ExploreSectionService', () => {
  let service: ExploreSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
