import { TestBed } from '@angular/core/testing';

import { ShowHideComponentsService } from './show-hide-components.service';

describe('ShowHideComponentsService', () => {
  let service: ShowHideComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHideComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
