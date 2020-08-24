import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../locations.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    locationsChanged = new Subject<Location[]>();

    locations: Location[] = []
    constructor(private http: HttpClient) {
    }

    getLocations() {
        return this.locations.slice();
    }

    getlocation(index: number) {
        return this.locations[index];
    }
    fetchLocations() {
        this.http.get<Location[]>('https://coffee-66be5.firebaseio.com/locations.json')
            .subscribe(locations => {
                this.setLocations(locations)
            })
        return this.locations.slice();
    }
    setLocations(locations: Location[]) {
        this.locations = locations;
        this.locationsChanged.next(this.locations.slice())

    }
}