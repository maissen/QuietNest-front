import { TestBed } from '@angular/core/testing';

import { CreateSectionLogicService } from './create-section-logic.service';

describe('CreateSectionLogicService', () => {
  let service: CreateSectionLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSectionLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
