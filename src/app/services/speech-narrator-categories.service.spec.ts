import { TestBed } from '@angular/core/testing';

import { SpeechNarratorCategoriesService } from './speech-narrator-categories.service';

describe('SpeechNarratorCategoriesService', () => {
  let service: SpeechNarratorCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechNarratorCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
