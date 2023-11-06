import { Component, Input } from '@angular/core';
import { BikeDetailModel } from 'src/app/api/models/bike-model';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css'],
})
export class BikeDetailsComponent {
  @Input() bike?: BikeDetailModel;

  placeholderUrl = 'assets/placeholder.jpg';
}
