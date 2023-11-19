import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationSpec } from '../model/locationSpec.model';
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
  }
  res = (locationSpec: LocationSpec) => {
    this.locationSpec = locationSpec
    console.log(locationSpec)
  }
}
