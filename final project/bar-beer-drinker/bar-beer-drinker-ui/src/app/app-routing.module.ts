import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import {BeerDetailsComponent} from './beer-details/beer-details.component';
import {BeersComponent} from './beers/beers.component'; 
import { DrinkerComponent } from './drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import {HomeComponent} from './home/home.component';
import { ModificationsComponent } from './modifications/modifications.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'static',
    pathMatch: 'full',
    component: HomeComponent

  },
  {
      path: 'bars',
      pathMatch: 'full',
      component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path :'beers' , 
    pathMatch: 'full' ,
    component: BeersComponent
  },
  {
    path: 'beers/:beer' ,
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkerComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'modifications' ,
    pathMatch: 'full',
    component: ModificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
