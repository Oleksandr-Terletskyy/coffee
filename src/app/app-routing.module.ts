import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationStartComponent } from './location-start/location-start.component';


const routes: Routes = [
  { path: '', redirectTo: '/main-info', pathMatch: 'full' },
  { path: 'main-info', component: MainInfoComponent },
  {
    path: 'locations', component: LocationsComponent, children: [
      { path: '', component: LocationStartComponent },
      { path: ':id', component: LocationDetailsComponent },
    ]
  },
  { path: '**', redirectTo: '/main-info', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
