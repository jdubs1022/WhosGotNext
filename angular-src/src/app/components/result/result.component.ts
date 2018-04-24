import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // For Authorization of the form submission
import { AlertService } from 'ngx-alerts'; // For displaying alerts
import { Router } from '@angular/router'; // For re-routing to another page

// Below are the imports for the AGM-MapsAPILoader
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  public games: Array<Object>;
  public userLocation: Object;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public icon: String;

  public latitude1: number;
  public longitude1: number;
  public icon1: Object;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private alertService: AlertService, // For displaying alerts
    private router: Router, // For re-routing to another page
    private authService: AuthService, // For Authorization of the form submission
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  ngOnInit() {

    // Code below retrieves items from local storage and parses them back to
    // their orignal types
    // NOTE: In order to find the values of and info about "games" and "userLocation,"
    // go to the search page and run a query
    // JSON.parse(localStorage.getItem("games")); JSON.parse(localStorage.getItem("userLocation"));
    this.authService.getResult().subscribe(results => {
      this.games = results.games;
      this.userLocation = results.userLocation;
    },
    err => {
      console.log(err);
      return false;
    });

    //set google maps defaults
    this.zoom = 4;
    this.latitude = 40;
    this.longitude = -73;
    this.icon = "https://maps.google.com/mapfiles/kml/paddle/blu-circle.png";

    this.latitude1 = 34.8282;
    this.longitude1 = -96.5795;
    this.icon1 = {
      url: require("../../../../../images/sports_icons/baseball.png"),
      scaledSize: {
        height: 30,
        width: 30
      }
    };

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    // this.setCurrentPosition();

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

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  }
