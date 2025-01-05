import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedAudioBannerComponent } from './played-audio-banner.component';

describe('PlayedAudioBannerComponent', () => {
  let component: PlayedAudioBannerComponent;
  let fixture: ComponentFixture<PlayedAudioBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayedAudioBannerComponent]
    });
    fixture = TestBed.createComponent(PlayedAudioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
