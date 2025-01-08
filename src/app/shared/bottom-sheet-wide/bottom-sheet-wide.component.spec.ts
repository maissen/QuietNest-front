import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetWideComponent } from './bottom-sheet-wide.component';

describe('BottomSheetWideComponent', () => {
  let component: BottomSheetWideComponent;
  let fixture: ComponentFixture<BottomSheetWideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetWideComponent]
    });
    fixture = TestBed.createComponent(BottomSheetWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
