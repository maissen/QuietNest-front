import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideRectangleCarouselComponent } from './wide-rectangle-carousel.component';

describe('WideRectangleCarouselComponent', () => {
  let component: WideRectangleCarouselComponent;
  let fixture: ComponentFixture<WideRectangleCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WideRectangleCarouselComponent]
    });
    fixture = TestBed.createComponent(WideRectangleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
