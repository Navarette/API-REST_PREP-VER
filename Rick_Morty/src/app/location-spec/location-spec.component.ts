import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationSpec } from '../model/locationSpec.model';
import { CharacterSpec } from '../model/characterSpec.model';
@Component({
  selector: 'app-location-spec',
  templateUrl: './location-spec.component.html',
  styleUrls: ['./location-spec.component.css']
})
export class LocationSpecComponent {
  obs!: Observable<LocationSpec>;
  locationSpec!: LocationSpec;
  activatedRoute: any;
  id!: any;
  obs1!: Observable<CharacterSpec[]>
  character!: CharacterSpec[]
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.route.params.subscribe(paramId => {
      this.id = paramId['path']

    })
    this.obs = this.http.get<LocationSpec>(`https://rickandmortyapi.com/api/location/${this.id}`)
    this.obs.subscribe(this.res)

    this.obs1 = this.http.get<CharacterSpec[]>(`https://rickandmortyapi.com/api/character/${this.id}`)
    this.obs1.subscribe(this.res1)
  }

  res = (locationSpec: LocationSpec) => {
    this.locationSpec = locationSpec
    console.log(locationSpec)
  }

  res1 = (character: CharacterSpec[]) => {
    this.character = character
    console.log(character)
  }

  getLastPart(arg0: string) {
    const list = arg0.split("/")
    return list.pop()

  }
}
