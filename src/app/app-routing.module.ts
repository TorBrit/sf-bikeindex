import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DetailPageComponent } from './core/layout/detail-page/detail-page.component';
import { ErrorPageComponent } from './core/layout/error-page/error-page.component';
import { MainPageComponent } from './core/layout/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'details', component: DetailPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
