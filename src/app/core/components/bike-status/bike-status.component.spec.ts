import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStatusComponent } from './bike-status.component';

describe('BikeStatusComponent', () => {
  let component: BikeStatusComponent;
  let fixture: ComponentFixture<BikeStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeStatusComponent],
    });
    fixture = TestBed.createComponent(BikeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO tests:
  // should change #statusDot bg color based on status
});
