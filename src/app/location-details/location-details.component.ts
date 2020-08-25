import { Component, OnInit } from '@angular/core';
import { Location } from '../../app/locations.model'
import { ActivatedRoute, Params } from '@angular/router';
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  // location: Location[];
  location: Location[];
  id: number;
  
  constructor(private route: ActivatedRoute, private locationService: LocationService,
) { }

  ngOnInit() {
    
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.location = this.locationService.getLocation(this.id)
        }
      )


  }

}
