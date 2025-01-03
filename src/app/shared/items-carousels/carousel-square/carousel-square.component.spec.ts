import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSquareComponent } from './carousel-square.component';

describe('CarouselSquareComponent', () => {
  let component: CarouselSquareComponent;
  let fixture: ComponentFixture<CarouselSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselSquareComponent]
    });
    fixture = TestBed.createComponent(CarouselSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
