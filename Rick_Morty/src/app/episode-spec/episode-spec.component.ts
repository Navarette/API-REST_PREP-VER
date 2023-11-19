import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EpisodeSpec } from '../model/episodeSpec.model';
@Component({
  selector: 'app-episode-spec',
  templateUrl: './episode-spec.component.html',
  styleUrls: ['./episode-spec.component.css']
})
export class EpisodeSpecComponent {
  obs!: Observable<EpisodeSpec>;
  episodeSpec!: EpisodeSpec;
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
    this.obs = this.http.get<EpisodeSpec>(`https://rickandmortyapi.com/api/episode/${this.id}`)
    this.obs.subscribe(this.res)
  }
  res = (episodeSpec: EpisodeSpec) => {
    this.episodeSpec = episodeSpec
    console.log(episodeSpec)
  }
}
