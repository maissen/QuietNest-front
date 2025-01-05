import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreByCategoryComponent } from './explore-by-category.component';

describe('ExploreByCategoryComponent', () => {
  let component: ExploreByCategoryComponent;
  let fixture: ComponentFixture<ExploreByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreByCategoryComponent]
    });
    fixture = TestBed.createComponent(ExploreByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
