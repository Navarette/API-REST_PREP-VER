import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificFilmComponent } from './specific-film.component';

describe('SpecificFilmComponent', () => {
  let component: SpecificFilmComponent;
  let fixture: ComponentFixture<SpecificFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificFilmComponent]
    });
    fixture = TestBed.createComponent(SpecificFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
