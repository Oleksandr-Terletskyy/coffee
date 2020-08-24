import { Component, OnInit } from '@angular/core';
import { Location } from '../../app/locations.model'
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  providers:[LocationService]
})
export class LocationsComponent implements OnInit {
  selectedLocation: Location;
  

  constructor( private LocationService:LocationService) { }

  ngOnInit() {
   
  }

}
