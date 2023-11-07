import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BikeService } from 'src/app/api/services/bike.service';
import { QueryParams } from 'src/app/api/models/query-params';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  pageNumber?: number;

  bikes$ = this.bikeService.availableBikes$;

  constructor(private bikeService: BikeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageNumber = (this.route.snapshot.paramMap.get('page') || 1) as number;
  }

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
    // use this.pageNumber here
    this.updateSearchQuery({
      ...this.bikeService.queryParams,
      pageNumber,
    });
  }
}
