import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagedResult } from 'src/app/api/models/api-model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pagedResult!: PagedResult; // bang for TS strictNullCheck

  @Output() previousPage: EventEmitter<void> = new EventEmitter();
  @Output() nextPage: EventEmitter<void> = new EventEmitter();
}
