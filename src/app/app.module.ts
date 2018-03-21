import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { GiphService } from './shared/giph.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GiphService,GiphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
