import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { TvShowDetailsComponent } from './pages/tv-show-details/tv-show-details.component';
import { KidsComponent } from './pages/kids/kids.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'kids',component:KidsComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'tv/:id',component:TvShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
