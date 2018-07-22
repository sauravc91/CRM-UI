import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../components/app/app.component';
import { AppRoutingModule } from './routing.module';
import { AppBootstrapModule } from './bootstrap.module';
import { Pg1Component } from '../components/pg1/pg1.component';

@NgModule({
  declarations: [
    AppComponent,
    Pg1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }