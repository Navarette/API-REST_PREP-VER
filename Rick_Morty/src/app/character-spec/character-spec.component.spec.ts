import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSpecComponent } from './character-spec.component';

describe('CharacterSpecComponent', () => {
  let component: CharacterSpecComponent;
  let fixture: ComponentFixture<CharacterSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSpecComponent]
    });
    fixture = TestBed.createComponent(CharacterSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
