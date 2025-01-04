import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedForYouItemComponent } from './recommended-for-you-item.component';

describe('RecommendedForYouItemComponent', () => {
  let component: RecommendedForYouItemComponent;
  let fixture: ComponentFixture<RecommendedForYouItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedForYouItemComponent]
    });
    fixture = TestBed.createComponent(RecommendedForYouItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
