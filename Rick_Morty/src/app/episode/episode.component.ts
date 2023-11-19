import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode } from '../model/episode.model';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episode!: Episode;
  obs!: Observable<Episode>;
  activatedRoute: any;
  id!: any;
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obs = this.http.get<Episode>('https://rickandmortyapi.com/api/episode')
    this.obs.subscribe(this.res)

  }

  res = (episode: Episode) => {
    this.episode = episode
    console.log(episode)
  }
  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()

  }
}
