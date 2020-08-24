import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStartComponent } from './location-start.component';

describe('LocationStartComponent', () => {
  let component: LocationStartComponent;
  let fixture: ComponentFixture<LocationStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
