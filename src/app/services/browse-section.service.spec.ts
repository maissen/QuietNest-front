import { TestBed } from '@angular/core/testing';

import { BrowseSectionService } from './browse-section.service';

describe('BrowseSectionService', () => {
  let service: BrowseSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
