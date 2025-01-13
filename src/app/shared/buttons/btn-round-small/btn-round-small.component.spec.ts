import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRoundSmallComponent } from './btn-round-small.component';

describe('BtnRoundSmallComponent', () => {
  let component: BtnRoundSmallComponent;
  let fixture: ComponentFixture<BtnRoundSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnRoundSmallComponent]
    });
    fixture = TestBed.createComponent(BtnRoundSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
