import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '../model/location.model';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location!: Location;
  obs!: Observable<Location>;
  activatedRoute: any;
  id!: any;
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obs = this.http.get<Location>('https://rickandmortyapi.com/api/location')
    this.obs.subscribe(this.res)

  }

  res = (location: Location) => {
    this.location = location
    console.log(location)
  }
  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()

  }
}
