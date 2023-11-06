import { Component, Input } from '@angular/core';

import { BikeService } from 'src/app/api/services/bike.service';
import { QueryParams } from 'src/app/api/models/query-params';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  @Input() cityInput = '';

  bikes$ = this.bikeService.availableBikes$;

  constructor(private bikeService: BikeService) {}

  private updateSearchQuery(params: QueryParams) {
    this.bikeService.queryParams = {
      ...this.bikeService.queryParams,
      ...params,
    };

    this.bikeService._bikesSubject$.next();
  }

  onClickSearch() {
    this.updateSearchQuery({
      ...this.bikeService.queryParams,
      location: {
        city: 'Amsterdam',
      },
    });
  }

  onChangePage(pageNumber: number) {
    this.updateSearchQuery({
      ...this.bikeService.queryParams,
      pageNumber,
    });
  }
}
