import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSpecComponent } from './location-spec.component';

describe('LocationSpecComponent', () => {
  let component: LocationSpecComponent;
  let fixture: ComponentFixture<LocationSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationSpecComponent]
    });
    fixture = TestBed.createComponent(LocationSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
