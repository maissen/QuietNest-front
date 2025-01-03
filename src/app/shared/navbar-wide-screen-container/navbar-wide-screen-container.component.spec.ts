import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWideScreenContainerComponent } from './navbar-wide-screen-container.component';

describe('NavbarWideScreenContainerComponent', () => {
  let component: NavbarWideScreenContainerComponent;
  let fixture: ComponentFixture<NavbarWideScreenContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarWideScreenContainerComponent]
    });
    fixture = TestBed.createComponent(NavbarWideScreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
