import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingAudioBannerComponent } from './playing-audio-banner.component';

describe('PlayingAudioBannerComponent', () => {
  let component: PlayingAudioBannerComponent;
  let fixture: ComponentFixture<PlayingAudioBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingAudioBannerComponent]
    });
    fixture = TestBed.createComponent(PlayingAudioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
