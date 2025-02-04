import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechBottomSheetComponent } from './speech-bottom-sheet.component';

describe('SpeechBottomSheetComponent', () => {
  let component: SpeechBottomSheetComponent;
  let fixture: ComponentFixture<SpeechBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechBottomSheetComponent]
    });
    fixture = TestBed.createComponent(SpeechBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
