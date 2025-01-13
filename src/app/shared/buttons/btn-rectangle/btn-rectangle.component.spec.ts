import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRectangleComponent } from './btn-rectangle.component';

describe('BtnRectangleComponent', () => {
  let component: BtnRectangleComponent;
  let fixture: ComponentFixture<BtnRectangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnRectangleComponent]
    });
    fixture = TestBed.createComponent(BtnRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
