import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from "@ngrx/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),//could pass in a reducer in the root state
    StoreDevtoolsModule.instrument(), 
    HttpClientModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
