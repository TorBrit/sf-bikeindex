import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BikeDetailModel } from 'src/app/api/models/bike-model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  bike?: BikeDetailModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.bike = data['data']['bike']; // resolve routeData unpacking later
    });
  }
}
