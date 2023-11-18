import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film!: Film[];
  obs!: Observable<Film[]>;
  activatedRoute: any;
  id!: any;
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramId => {
      this.id = paramId['path']

      this.obs = this.http.get<Film[]>(`https://ghibliapi.vercel.app/films${this.id}`)
      this.obs.subscribe(this.res)
    })
  }

  res = (film: Film[]) => {
    this.film = film
    console.log(film)
  }
  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()

  }
}
