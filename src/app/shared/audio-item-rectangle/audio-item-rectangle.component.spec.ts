import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioItemRectangleComponent } from './audio-item-rectangle.component';

describe('AudioItemRectangleComponent', () => {
  let component: AudioItemRectangleComponent;
  let fixture: ComponentFixture<AudioItemRectangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioItemRectangleComponent]
    });
    fixture = TestBed.createComponent(AudioItemRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
