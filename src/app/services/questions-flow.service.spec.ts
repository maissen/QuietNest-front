import { TestBed } from '@angular/core/testing';

import { QuestionsFlowService } from './questions-flow.service';

describe('QuestionsFlowService', () => {
  let service: QuestionsFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
