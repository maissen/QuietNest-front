import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSpeechControlComponent } from './playing-speech-control.component';

describe('PlayingSpeechControlComponent', () => {
  let component: PlayingSpeechControlComponent;
  let fixture: ComponentFixture<PlayingSpeechControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingSpeechControlComponent]
    });
    fixture = TestBed.createComponent(PlayingSpeechControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
