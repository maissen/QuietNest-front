import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRectangleComponent } from './carousel-rectangle.component';

describe('CarouselRectangleComponent', () => {
  let component: CarouselRectangleComponent;
  let fixture: ComponentFixture<CarouselRectangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselRectangleComponent]
    });
    fixture = TestBed.createComponent(CarouselRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
