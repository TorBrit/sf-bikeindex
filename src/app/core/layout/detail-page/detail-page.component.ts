import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BikeDetailModel } from 'src/app/api/models/bike-model';
import { BikeService } from 'src/app/api/services/bike.service';

  // BIKE DETAILS:
  // - If id has no data or data is not fetched, show error message

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  bikeId?: number; // TODO: Angular 16 bindToComponentInputs
  bike?: BikeDetailModel;

  loadingBike = true;

  constructor(private bikeService: BikeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.bikeId = this.route.snapshot.params['id'] as number; // snapshot suffices; no dynamic param changes

    this.fetchBikeDetails();
  }

  fetchBikeDetails() {
    if (!this.bikeId) return;

    this.bikeService.getBikeDetails$(this.bikeId)
      .subscribe((result) => {
        this.bike = result.bike;
        this.loadingBike = false; // alternative option: pass response entirely as result and read from there
    });
  }
}
