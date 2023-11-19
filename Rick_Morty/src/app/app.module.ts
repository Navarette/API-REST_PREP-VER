import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent
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
