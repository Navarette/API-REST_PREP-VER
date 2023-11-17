import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character!: Character;
  obs!: Observable<Character>;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.obs = this.http.get<Character>('https://api.disneyapi.dev/character')
    this.obs.subscribe(this.faiqualcosa)
  }

  faiqualcosa = (character: Character) => {
    this.character = character
    this.character.data = this.character.data.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    })
  }
  

}
