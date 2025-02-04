import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsBottomSheetComponent } from './sounds-bottom-sheet.component';

describe('SoundsBottomSheetComponent', () => {
  let component: SoundsBottomSheetComponent;
  let fixture: ComponentFixture<SoundsBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundsBottomSheetComponent]
    });
    fixture = TestBed.createComponent(SoundsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
