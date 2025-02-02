import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageContactComponent } from './welcome-page-contact.component';

describe('WelcomePageContactComponent', () => {
  let component: WelcomePageContactComponent;
  let fixture: ComponentFixture<WelcomePageContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageContactComponent]
    });
    fixture = TestBed.createComponent(WelcomePageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
