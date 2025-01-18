import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBtnReviewComponent } from './cta-btn-review.component';

describe('CtaBtnReviewComponent', () => {
  let component: CtaBtnReviewComponent;
  let fixture: ComponentFixture<CtaBtnReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaBtnReviewComponent]
    });
    fixture = TestBed.createComponent(CtaBtnReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
