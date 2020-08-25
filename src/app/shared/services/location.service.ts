import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Location } from '../../locations.model';
import { Subject, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    // locationsChanged = new Subject<Location[]>();
    // locations: Location[] = [];
    locations: Observable<any[]>
    itemsCollection: AngularFirestoreCollection<Location[]>;

    constructor(public afs: AngularFirestore) {
        this.locations = afs.collection('locations').valueChanges()

    }
    getLocations() {
        return this.locations
    }

    getLocation(index: number){
        console.log(index)
        return this.locations[index]
        // console.log(this.locations)
    }
    

}