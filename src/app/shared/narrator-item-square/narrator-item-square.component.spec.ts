import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarratorItemSquareComponent } from './narrator-item-square.component';

describe('NarratorItemSquareComponent', () => {
  let component: NarratorItemSquareComponent;
  let fixture: ComponentFixture<NarratorItemSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarratorItemSquareComponent]
    });
    fixture = TestBed.createComponent(NarratorItemSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
