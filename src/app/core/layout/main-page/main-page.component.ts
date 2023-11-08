import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { BikeService } from 'src/app/api/services/bike.service';
import { QueryParams } from 'src/app/api/models/query-params';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  @Input() search?: string;
  @Input() page = 1;

  bikes$ = this.bikeService.availableBikes$;

  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private router: Router)
  {
    this.route.queryParams.subscribe((params) => {
      // on navigating back, keep previous city
      if (!params['search']) {
        this.search = this.bikeService.queryParams.location.city;
        return;
      }

      const updatedParams = {
        ...this.bikeService.queryParams,
        pageNumber: params['page'] ?? 1,
        location: {
          city: params['search'],
        },
      };

      this.bikeService.queryParams = updatedParams;
      this.bikeService.fetchBikes();
    });
  }

  ngOnInit(): void {
    this.bikeService.queryParams = {
      ...this.bikeService.queryParams,
      pageNumber: this.page ?? 1,
      location: {
        city: this.search ?? '',
      },
    };
  }

  onClickSearch(location: string) {
    this.updateSearchQuery({ ...this.bikeService.queryParams,
      location: {
        city: location,
      },
    });
  }

  onPrevious() {
    if (!(this.page <= 1)) this.onChangePage(this.page - 1);
  }

  onNext() {
    this.page ++;
    this.onChangePage(this.page ++);
  }

  onChangePage(pageNumber: number) {
    this.updateSearchQuery({
      ...this.bikeService.queryParams, pageNumber: pageNumber || 1,
    });
  }

  private updateSearchQuery(params: QueryParams) {
    const { location, pageNumber } = this.bikeService.queryParams;

    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: {
          search: params.location.city ?? location.city,
          page: params.pageNumber ?? pageNumber,
        },
      }
    );
  }
}
