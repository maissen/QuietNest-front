import { TestBed } from '@angular/core/testing';

import { SoundsmixturesService } from './soundsmixtures.service';

describe('SoundsmixturesService', () => {
  let service: SoundsmixturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundsmixturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
