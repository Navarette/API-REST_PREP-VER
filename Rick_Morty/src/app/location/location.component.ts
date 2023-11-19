import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location1 } from '../model/location.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location1!: Location1;
  obs!: Observable<Location1>;
  activatedRoute: any;
  id!: any;
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.obs = this.http.get<Location1>('https://rickandmortyapi.com/api/location')
    this.obs.subscribe(this.res)

  }

  res = (location1: Location1) => {
    this.location1 = location1
    console.log(location1)
  }
  getLastPart(arg0: string) {
    const list = arg0.split("/")
    return list.pop()

  }
  back(): void {
    this.location.back();
  }
}
