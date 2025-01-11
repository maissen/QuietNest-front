import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSpeechBannerComponent } from './playing-speech-banner.component';

describe('PlayingSpeechBannerComponent', () => {
  let component: PlayingSpeechBannerComponent;
  let fixture: ComponentFixture<PlayingSpeechBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingSpeechBannerComponent]
    });
    fixture = TestBed.createComponent(PlayingSpeechBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
