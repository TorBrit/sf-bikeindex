import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDetailsComponent } from './bike-details.component';
import { BikeStatusComponent } from '../bike-status/bike-status.component';
import { bikesMockData } from 'src/app/api/services/bike.service.spec.data';

describe('BikeDetailsComponent', () => {
  let component: BikeDetailsComponent;
  let fixture: ComponentFixture<BikeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeDetailsComponent, BikeStatusComponent],
    });
    fixture = TestBed.createComponent(BikeDetailsComponent);
    component = fixture.componentInstance;

    component.bike = bikesMockData[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
