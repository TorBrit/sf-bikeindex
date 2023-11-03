import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailPageComponent } from './layout/detail-page/detail-page.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { MainPageComponent } from './layout/main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DetailPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CoreModule { }
