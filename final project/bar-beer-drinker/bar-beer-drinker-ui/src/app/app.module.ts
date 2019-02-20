import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import{DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { DrinkerComponent } from './drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { HomeComponent } from './home/home.component';
import { ModificationsComponent } from './modifications/modifications.component';

@NgModule({
  declarations: [
    
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeersComponent,
    BeerDetailsComponent,
    DrinkerComponent,
    DrinkerDetailsComponent,
    HomeComponent,
    ModificationsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    TabViewModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
