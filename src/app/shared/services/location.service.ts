import { Location } from '../../locations.model'

export class LocationService {
      private locations: Location[] = [
        new Location('542 Feathers Hooves Drive, New York', '111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis blanditiis laudantium, earum, odit facere consectetur molestiae nobis ratione possimus a natus mollitia laboriosam! Voluptatem culpa necessitatibus, tenetur placeat eaque est?'),
        new Location('831 Devils Hill Road, Jackson', '222 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis blanditiis laudantium, earum, odit facere consectetur molestiae nobis ratione possimus a natus mollitia laboriosam! Voluptatem culpa necessitatibus, tenetur placeat eaque est?'),
        new Location('2263 Better Street, Kansas City', '3333 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis blanditiis laudantium, earum, odit facere consectetur molestiae nobis ratione possimus a natus mollitia laboriosam! Voluptatem culpa necessitatibus, tenetur placeat eaque est?'),
    ]
    getLocations() {
        return this.locations.slice()
    }

    getlocation(index: number) {
        return this.locations[index];
    }
}