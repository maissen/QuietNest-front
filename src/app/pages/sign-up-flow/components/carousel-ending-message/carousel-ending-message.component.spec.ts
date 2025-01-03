import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEndingMessageComponent } from './carousel-ending-message.component';

describe('CarouselEndingMessageComponent', () => {
  let component: CarouselEndingMessageComponent;
  let fixture: ComponentFixture<CarouselEndingMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselEndingMessageComponent]
    });
    fixture = TestBed.createComponent(CarouselEndingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
