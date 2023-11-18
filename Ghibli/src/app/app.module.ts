import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './film/film.component';
import { SpeciesComponent } from './species/species.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { SpecificFilmComponent } from './specific-film/specific-film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    SpeciesComponent,
    PeopleComponent,
    HomeComponent,
    SpecificFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
