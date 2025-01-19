import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSquareNarratorsComponent } from './carousel-square-narrators.component';

describe('CarouselSquareNarratorsComponent', () => {
  let component: CarouselSquareNarratorsComponent;
  let fixture: ComponentFixture<CarouselSquareNarratorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselSquareNarratorsComponent]
    });
    fixture = TestBed.createComponent(CarouselSquareNarratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
