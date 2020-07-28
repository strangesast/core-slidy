import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
