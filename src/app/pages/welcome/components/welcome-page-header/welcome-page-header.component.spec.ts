import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageHeaderComponent } from './welcome-page-header.component';

describe('WelcomePageHeaderComponent', () => {
  let component: WelcomePageHeaderComponent;
  let fixture: ComponentFixture<WelcomePageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageHeaderComponent]
    });
    fixture = TestBed.createComponent(WelcomePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
