import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSoundsBannerComponent } from './playing-sounds-banner.component';

describe('PlayingSoundsBannerComponent', () => {
  let component: PlayingSoundsBannerComponent;
  let fixture: ComponentFixture<PlayingSoundsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingSoundsBannerComponent]
    });
    fixture = TestBed.createComponent(PlayingSoundsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
