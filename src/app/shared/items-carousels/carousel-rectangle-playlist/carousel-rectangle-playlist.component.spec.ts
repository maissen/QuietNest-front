import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRectanglePlaylistComponent } from './carousel-rectangle-playlist.component';

describe('CarouselRectanglePlaylistComponent', () => {
  let component: CarouselRectanglePlaylistComponent;
  let fixture: ComponentFixture<CarouselRectanglePlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselRectanglePlaylistComponent]
    });
    fixture = TestBed.createComponent(CarouselRectanglePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
