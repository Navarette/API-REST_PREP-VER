import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/film.model';
import { People } from '../model/people.model';
import { Species } from '../model/species.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // film!: Film[]
  // people!: People[]
  // species!: Species[]

  // obsFilm!: Observable<Film[]>
  // obsPeople!: Observable<People[]>
  // obsSpecies!: Observable<Species[]>

  constructor(public http: HttpClient) { }

  // ngOnInit(): void {

  //   this.obsFilm = this.http.get<Film[]>('https://ghibliapi.vercel.app/films')
  //   this.obsFilm.subscribe(this.F_film)

  //   // this.obsFilm = this.http.get<Film[]>('https://ghibliapi.vercel.app/films')
  //   // this.obsFilm.subscribe(this.F_film)
  // }

  // F_film = (film: Film[]) => {
  //   this.film = film
  //   console.log(film)
  // }
}
