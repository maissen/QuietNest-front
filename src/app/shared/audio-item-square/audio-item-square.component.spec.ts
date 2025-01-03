import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioItemSquareComponent } from './audio-item-square.component';

describe('AudioItemSquareComponent', () => {
  let component: AudioItemSquareComponent;
  let fixture: ComponentFixture<AudioItemSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioItemSquareComponent]
    });
    fixture = TestBed.createComponent(AudioItemSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
