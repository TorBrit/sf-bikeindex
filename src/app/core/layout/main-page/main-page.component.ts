import { Component } from '@angular/core';

import { BikeService } from 'src/app/api/services/bike.service';
import { QueryParams } from 'src/app/api/models/query-params';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  bikes$ = this.bikeService.availableBikes$;

  constructor(private bikeService: BikeService) {}

  private updateSearchQuery(params: QueryParams) {
    this.bikeService.queryParams = {
      ...this.bikeService.queryParams,
      ...params,
    };

    this.bikeService.bikesSubject$.next();
  }

  onClickSearch(location: string) {
    this.updateSearchQuery({
      ...this.bikeService.queryParams,
      location: {
        city: location,
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
