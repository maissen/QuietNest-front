import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetSmallComponent } from './bottom-sheet-small.component';

describe('BottomSheetSmallComponent', () => {
  let component: BottomSheetSmallComponent;
  let fixture: ComponentFixture<BottomSheetSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetSmallComponent]
    });
    fixture = TestBed.createComponent(BottomSheetSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
