import { BehaviorSubject, of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MainPageComponent } from './main-page.component';
import { QueryParams } from 'src/app/api/models/query-params';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  const mockParams = new BehaviorSubject<QueryParams>({
    location: {
      city: 'Delft',
    },
    pageNumber: 1,
    pageSize: 10,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [
        HttpClient,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              search: mockParams.value.location.city,
              page: mockParams.value.pageNumber,
            }),
          },
        }
      ],
      imports: [
        HttpClientTestingModule
      ],
    });
    fixture = TestBed.createComponent(MainPageComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prefill initial data from queryparams in relevant components', () => {
    const ac: ActivatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    ac.queryParams.subscribe((v) => {
      expect(v).toEqual({ search: 'Delft', page: 1 });
    });

    const inputField = fixture.nativeElement.querySelector('#city-input'); // TODO
    console.info(inputField);
    expect(component).toBeTruthy();
  });

  // TODO it's:
  // should update query params when search input changes
});
