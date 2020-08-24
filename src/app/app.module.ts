import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MainInfoComponent } from './main-info/main-info.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationItemComponent } from './location-item/location-item.component';
import { LocationStartComponent } from './location-start/location-start.component'
import { LocationService } from './shared/services/location.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInfoComponent,
    LocationsComponent,
    LocationsListComponent,
    LocationDetailsComponent,
    LocationItemComponent,
    LocationStartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
