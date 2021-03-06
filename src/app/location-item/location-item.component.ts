import { Component, OnInit, Input } from '@angular/core';

import { Location } from '../../app/locations.model'
@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.scss']
})
export class LocationItemComponent implements OnInit {
  @Input() location: Location
  @Input() index: number
  constructor() { }

  ngOnInit() {
  }

}
