import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},{
  path: 'home', component: HomeComponent
},{
  path: 'random', component: RandomComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
