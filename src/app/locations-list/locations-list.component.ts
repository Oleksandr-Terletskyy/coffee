import { Component, OnInit } from '@angular/core';
import { Location } from '../../app/locations.model'
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  locations: Location[] = []

  constructor(public locationService: LocationService) { }


  ngOnInit() {
  }






}
