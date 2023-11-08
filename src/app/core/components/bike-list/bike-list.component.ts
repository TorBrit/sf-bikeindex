import { Component, Input } from '@angular/core';
import { BikeModel } from 'src/app/api/models/bike-model';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css'],
})
export class BikeListComponent {
  @Input() bikes!: BikeModel[]; // bang for TS strictNullCheck
}
