import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterSpec } from '../model/characterSpec.model';
@Component({
  selector: 'app-character-spec',
  templateUrl: './character-spec.component.html',
  styleUrls: ['./character-spec.component.css']
})
export class CharacterSpecComponent {
  obs!: Observable<CharacterSpec>;
  characterSpec!: CharacterSpec;
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
    this.obs = this.http.get<CharacterSpec>(`https://rickandmortyapi.com/api/character/${this.id}`)
    this.obs.subscribe(this.res)
  }
  res = (characterSpec: CharacterSpec) => {
    this.characterSpec = characterSpec
    console.log(characterSpec)
  }
}
