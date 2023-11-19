import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeSpecComponent } from './episode-spec.component';

describe('EpisodeSpecComponent', () => {
  let component: EpisodeSpecComponent;
  let fixture: ComponentFixture<EpisodeSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeSpecComponent]
    });
    fixture = TestBed.createComponent(EpisodeSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
