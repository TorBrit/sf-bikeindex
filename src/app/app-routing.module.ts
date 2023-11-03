import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { StarComponent } from './core/components/star/star.component';
import { TestComponent } from './core/components/test/test.component';

const routes: Routes = [
  { path: '', component: StarComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
