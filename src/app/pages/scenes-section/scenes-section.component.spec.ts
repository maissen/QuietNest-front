import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesSectionComponent } from './scenes-section.component';

describe('ScenesSectionComponent', () => {
  let component: ScenesSectionComponent;
  let fixture: ComponentFixture<ScenesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScenesSectionComponent]
    });
    fixture = TestBed.createComponent(ScenesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
