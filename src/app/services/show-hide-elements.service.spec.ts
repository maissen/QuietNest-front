import { TestBed } from '@angular/core/testing';

import { ShowHideElementsService } from './show-hide-elements.service';

describe('ShowHideElementsService', () => {
  let service: ShowHideElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHideElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
