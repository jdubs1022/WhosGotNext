import { ElementRef, NgZone, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // For Authorization of the form submission
import { AlertService } from 'ngx-alerts'; // For displaying alerts
import { Router } from '@angular/router'; // For re-routing to another page

// Imports specifically related to Angular-Google Maps and Places API
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  sport: String;
  date: Date;
  latitude: Number;
  longitude: Number;
  games: Array<object>;

  public searchControl: FormControl; // For the Places-Autocomplete

  // For a better understanding of the Angular-Maps Functionality,
  //Go Here: http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/
  @ViewChild("search")
  public searchElementRef: ElementRef;

  // Any time a service or component is used, it needs to be injected into the
  // constructor as shown below
    constructor(
        private alertService: AlertService, // For displaying alerts
        private router: Router, // For re-routing to another page
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private authService: AuthService // For Authorization of the form submission
    ) { }

  ngOnInit() {

    // Code below is for the Angular-Google Places API

    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // Set latitude and longitude
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });

  }

  onSearchSubmit(){

    console.log(this.sport);
    console.log(this.date);
    console.log(this.latitude);
    console.log(this.longitude);

    const query = {
      sport: this.sport,
      date: this.date,
      latitude: this.latitude,
      longitude: this.longitude
    }

    // Calls the backend authentication function for Search Functionality
    this.authService.authenticateSearch(query).subscribe(data => {
      console.log("WHATTTTT?");
      console.log(data);
      if (data.success) {
        this.authService.storeGameData(data.results.games);
        this.authService.storeUserLocation(data.results.userLocation);
        this.alertService.success(data.msg);
        console.log(data.msg);
        this.router.navigate(["/result"]);
      } else {
        this.alertService.danger(data.msg);
        console.log(data.msg);
        this.router.navigate(["/search"]);
      }
    });

  }

  // Line below gets today's date
  private todate = new Date();

  // Line below is for the hidden latitude and Longitude
  private latH = this.latitude;
  private longH = this.longitude;
}
