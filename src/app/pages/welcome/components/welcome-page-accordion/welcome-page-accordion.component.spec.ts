import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageAccordionComponent } from './welcome-page-accordion.component';

describe('WelcomePageAccordionComponent', () => {
  let component: WelcomePageAccordionComponent;
  let fixture: ComponentFixture<WelcomePageAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageAccordionComponent]
    });
    fixture = TestBed.createComponent(WelcomePageAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
