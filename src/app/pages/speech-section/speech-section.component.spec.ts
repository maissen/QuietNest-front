import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechSectionComponent } from './speech-section.component';

describe('SpeechSectionComponent', () => {
  let component: SpeechSectionComponent;
  let fixture: ComponentFixture<SpeechSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechSectionComponent]
    });
    fixture = TestBed.createComponent(SpeechSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
