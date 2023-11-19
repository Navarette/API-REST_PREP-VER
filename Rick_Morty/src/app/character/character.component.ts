import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character!: Character;
  obs!: Observable<Character>;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.obs = this.http.get<Character>('https://rickandmortyapi.com/api/character')
    this.obs.subscribe(this.res)

  }

  res = (character: Character) => {
    this.character = character
    console.log(character)
  }
  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()

  }

  back(): void {
    this.location.back();
  }
}
