import { Component, Input } from '@angular/core';
import { BikeStatus } from 'src/app/api/models/bike-model';

@Component({
  selector: 'app-bike-status',
  templateUrl: './bike-status.component.html',
  styleUrls: ['./bike-status.component.css'],
})
export class BikeStatusComponent {
  @Input() status: BikeStatus = 'with owner';
}
