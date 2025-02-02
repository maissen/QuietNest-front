import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageNavbarComponent } from './welcome-page-navbar.component';

describe('WelcomePageNavbarComponent', () => {
  let component: WelcomePageNavbarComponent;
  let fixture: ComponentFixture<WelcomePageNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageNavbarComponent]
    });
    fixture = TestBed.createComponent(WelcomePageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
