import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'character', component: CharacterComponent },

  { path: 'location', component: LocationComponent },

  { path: 'episode', component: EpisodeComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
