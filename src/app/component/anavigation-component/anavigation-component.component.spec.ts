import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANavigationComponentComponent } from './anavigation-component.component';

describe('ANavigationComponentComponent', () => {
  let component: ANavigationComponentComponent;
  let fixture: ComponentFixture<ANavigationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ANavigationComponentComponent]
    });
    fixture = TestBed.createComponent(ANavigationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
