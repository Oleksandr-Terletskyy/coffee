import { Component, OnInit } from '@angular/core';
import { Location } from '../../app/locations.model'
import { ActivatedRoute, Params } from '@angular/router';
import { LocationService } from '../shared/services/location.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private locationService: LocationService,
  ) { }

  id$ = this.route.params.pipe(
    map(params => {
      return params['id'] as string
    })
  );
  location = this.locationService.locations.pipe(
    combineLatest(this.id$),
    map(([locations, id]) => {
      for (let location of locations) {
        if (id === location.id) {
          return location
        }
      }
      return null
    })
  )
  ngOnInit() {

  }

}
