import { TestBed } from '@angular/core/testing';

import { NarratorsService } from './narrators.service';

describe('NarratorsService', () => {
  let service: NarratorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarratorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
