import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';
import { SpecificFilmComponent } from './specific-film/specific-film.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'film', component: FilmComponent },
  { path: 'specfilm/:path', component: SpecificFilmComponent },

  { path: 'people', component: PeopleComponent },
  { path: 'species', component: SpeciesComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
