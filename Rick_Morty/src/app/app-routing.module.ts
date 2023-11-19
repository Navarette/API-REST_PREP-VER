import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';
import { CharacterSpecComponent } from './character-spec/character-spec.component';
import { LocationSpecComponent } from './location-spec/location-spec.component';
import { EpisodeSpecComponent } from './episode-spec/episode-spec.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'character', component: CharacterComponent },
  { path: 'characterSpec/:path', component: CharacterSpecComponent },

  { path: 'location', component: LocationComponent },
  { path: 'locationSpec/:path', component: LocationSpecComponent },

  { path: 'episode', component: EpisodeComponent },
  { path: 'episodeSpec/:path', component: EpisodeSpecComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
