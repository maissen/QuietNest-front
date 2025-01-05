import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreByTimeComponent } from './explore-by-time.component';

describe('ExploreByTimeComponent', () => {
  let component: ExploreByTimeComponent;
  let fixture: ComponentFixture<ExploreByTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreByTimeComponent]
    });
    fixture = TestBed.createComponent(ExploreByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
