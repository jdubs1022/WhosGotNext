import { ElementRef, NgZone, Component, OnInit, ViewChild } from '@angular/core';
import { ValidateService } from "../../services/validate.service"; // For validation of the form submission
import { AuthService } from '../../services/auth.service'; // For Authorization of the form submission
import { AlertService } from 'ngx-alerts'; // For displaying alerts
import { Router } from '@angular/router'; // For re-routing to another page

// Imports specifically related to Angular-Google Maps and Places API
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  title: String;
  sport: String;
  date: Date;
  duration: number;
  startTime: String;
  latitude: number;
  longitude: number;
  address: String;

  public searchControl: FormControl; // For the Places-Autocomplete

  // For a better understanding of the Angular-Maps Functionality,
  //Go Here: http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/
  @ViewChild("search")
  public searchElementRef: ElementRef;

// Any time a service or component is used, it needs to be injected into the
// constructor as shown below
  constructor(
      private validateService: ValidateService, // For validation of the form submission
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

          // Reverse Geocoding variables
          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.latitude, this.longitude);
          let request = {  address: "", latLng: latlng  };

          // Reverse Geocoding code to get back address
          geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0] != null) {
                this.ngZone.run(() => { this.address = String(results[0].formatted_address); });
                console.log(this.address);
              } else {
                this.alertService.danger("No address available");
              }
            }
          });
        });
      });
    });

  }

  onCreateSubmit(){

    // Code below logs to output all the values entered by the user
    console.log(this.title);
    console.log(this.sport);
    console.log(this.date);
    console.log(this.duration);
    console.log(this.startTime);
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(this.address);

    // Code belowe creates the game class using the values entered by the user
    const game = {
      title: this.title,
      sport: this.sport,
      date: this.date,
      duration: this.duration,
      startTime: this.startTime,
      latitude: this.latitude,
      longitude: this.longitude,
      address: this.address
    }

    // Code below checks that all the required fields are filled
    if (!this.validateService.validateCreate(game)){
      this.alertService.danger("Please fill in ALL Fields!");
      return false;
    }

    // Create Game - Call the createGame function localted in auth.service.ts
    this.authService.createGame(game).subscribe(data => {
      if (data.success) {
        this.alertService.success("You have successfully created a new Game!");
        this.router.navigate(["/dashboard"]);
      } else {
        this.alertService.danger("Your Game was not created!");
        this.router.navigate(["/create"]);
      }
    });

  }

  // Line below gets today's date
  private todate = new Date();

  // Line below is for the hidden latitude and Longitude inputs on the http create form
  private latH = this.latitude;
  private longH = this.longitude;

  private addressOf = this.address;
}
