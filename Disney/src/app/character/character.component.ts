import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  type!: any;
  obs!: Observable<any>;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.obs = this.http.get<any>('https://pokeapi.co/api/v2/type')
    this.obs.subscribe(this.faiqualcosa)
  }

  faiqualcosa = (type: any) => {
    this.type = type
    console.log(type)
  }
  getLastPart(arg0:string){
    return arg0.split("/")[6]

  }
}
