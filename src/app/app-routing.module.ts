import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { bikeResolver } from './api/resolvers/bike-resolver';

import { DetailPageComponent } from './core/layout/detail-page/detail-page.component';
import { ErrorPageComponent } from './core/layout/error-page/error-page.component';
import { MainPageComponent } from './core/layout/main-page/main-page.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', redirectTo: 'bikes', pathMatch: 'full' },
  { path: 'bikes/:id', component: DetailPageComponent, resolve: { data: bikeResolver } },
  { path: 'bikes', component: MainPageComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: environment.enableTracing,
      bindToComponentInputs: true, // TODO; not working, resolve?
    }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
