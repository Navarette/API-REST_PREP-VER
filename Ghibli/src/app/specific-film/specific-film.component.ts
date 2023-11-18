import { Component } from '@angular/core';
import { Film } from '../model/film.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specific-film',
  templateUrl: './specific-film.component.html',
  styleUrls: ['./specific-film.component.css']
})
export class SpecificFilmComponent {
  obs!: Observable<Film[]>;
  film!: Film[];
  activatedRoute: any;
  id!: any;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.route.params.subscribe(paramId => {
      this.id = paramId['path']

    })
    this.obs = this.http.get<Film[]>(`https://ghibliapi.vercel.app/films/${this.id}`)
    this.obs.subscribe(this.res)
  }
  res = (film: Film[]) => {
    this.film = film
    console.log(film)
  }
}
