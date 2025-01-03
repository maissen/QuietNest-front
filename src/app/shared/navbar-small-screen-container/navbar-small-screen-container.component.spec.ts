import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSmallScreenContainerComponent } from './navbar-small-screen-container.component';

describe('NavbarSmallScreenContainerComponent', () => {
  let component: NavbarSmallScreenContainerComponent;
  let fixture: ComponentFixture<NavbarSmallScreenContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSmallScreenContainerComponent]
    });
    fixture = TestBed.createComponent(NavbarSmallScreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
