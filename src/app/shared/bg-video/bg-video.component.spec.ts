import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgVideoComponent } from './bg-video.component';

describe('BgVideoComponent', () => {
  let component: BgVideoComponent;
  let fixture: ComponentFixture<BgVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgVideoComponent]
    });
    fixture = TestBed.createComponent(BgVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
