import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: GoogleMap;
  constructor(public navCtrl: NavController,private backgroundGeolocation: BackgroundGeolocation) {
    this.loadMap();
  }
  loadMap() {
   // This code is necessary for browser
   Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyC_8QhTAOkJO5MpOIDbqlEvk4wFjYd4myQ',
    'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyC_8QhTAOkJO5MpOIDbqlEvk4wFjYd4myQ'
  });

    this.backgroundGeolocation.getCurrentLocation().then((location) => {

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: location.latitude,
            lng: location.longitude
          },
          zoom: 18,
          tilt: 30
        }
      };
      this.map = GoogleMaps.create('map', mapOptions);
    }).catch((error)=>{
      console.log(error);
    });

  }

}
