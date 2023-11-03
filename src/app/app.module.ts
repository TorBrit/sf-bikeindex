import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StarComponent } from './core/components/star/star.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
