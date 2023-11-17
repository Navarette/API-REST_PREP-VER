import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film!: Film[];
  obs!: Observable<Film[]>;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.obs = this.http.get<Film[]>('https://ghibliapi.vercel.app/films')
    this.obs.subscribe(this.faiqualcosa)
  }

  faiqualcosa = (film: Film[]) => {
    this.film = film
    console.log(film)
  }
  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()

  }
}
