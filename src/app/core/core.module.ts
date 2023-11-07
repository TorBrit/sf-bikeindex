import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailPageComponent } from './layout/detail-page/detail-page.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { MainPageComponent } from './layout/main-page/main-page.component';

import { BikeDetailsComponent } from './components/bike-details/bike-details.component';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeStatusComponent } from './components/bike-status/bike-status.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DetailPageComponent,
    ErrorPageComponent,
    BikeDetailsComponent,
    BikeListComponent,
    BikeStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class CoreModule { }
