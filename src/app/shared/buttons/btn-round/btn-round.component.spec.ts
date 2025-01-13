import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRoundComponent } from './btn-round.component';

describe('BtnRoundComponent', () => {
  let component: BtnRoundComponent;
  let fixture: ComponentFixture<BtnRoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnRoundComponent]
    });
    fixture = TestBed.createComponent(BtnRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
