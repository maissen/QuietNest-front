import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarratorProfileComponent } from './narrator-profile.component';

describe('NarratorProfileComponent', () => {
  let component: NarratorProfileComponent;
  let fixture: ComponentFixture<NarratorProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarratorProfileComponent]
    });
    fixture = TestBed.createComponent(NarratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
