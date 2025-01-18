import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistItemRectangleComponent } from './playlist-item-rectangle.component';

describe('PlaylistItemRectangleComponent', () => {
  let component: PlaylistItemRectangleComponent;
  let fixture: ComponentFixture<PlaylistItemRectangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistItemRectangleComponent]
    });
    fixture = TestBed.createComponent(PlaylistItemRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
