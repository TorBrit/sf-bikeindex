import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { DetailPageComponent } from './detail-page.component';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPageComponent],
      providers: [
        HttpClient,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              id: 5,
            }),
          },
        }
      ],
      imports: [
        HttpClientTestingModule
      ],
    });
    fixture = TestBed.createComponent(DetailPageComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // should handle subscribe resolve
  // should show not found message if url returns no data
});
