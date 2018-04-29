import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // For Authorization of the form submission
import { AlertService } from 'ngx-alerts'; // For displaying alerts
import { Router } from '@angular/router'; // For re-routing to another page

// Below are the imports for the AGM-MapsAPILoader
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  public games: Array<Object>;
  public userLocation: {lat: number, long: number};
  public user: {username: String};

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public icon: String;
  public dir: Object;

  public toString: Function;
  public format: String;
  public tempString: String;

  public isDisabled: Array<boolean>;
  public numbers: Array<number>;

  // The object definitions for the sports_icons
  public basketballIcon: Object;
  public baseballIcon: Object;
  public footballIcon: Object;
  public soccerIcon: Object;
  public handballIcon: Object;

  // The object definitions for the sports_icons
  public BASKETBALL: String;
  public BASEBALL: String;
  public FOOTBALL: String;
  public SOCCER: String;
  public HANDBALL: String;


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
      this.authService.getResult().subscribe(results => {
        this.games = JSON.parse(localStorage.getItem("games"));
        this.userLocation = JSON.parse(localStorage.getItem("userLocation"));
        console.log(this.userLocation);

        //If, the user's location has successfully been retrieved, set google maps defaults
        if (localStorage.userLocation){
          this.zoom = 12;
          this.latitude = this.userLocation.lat;
          this.longitude = this.userLocation.long;
          this.icon = "https://maps.google.com/mapfiles/kml/paddle/blu-circle.png";
          this.dir = undefined;
        }
      },
      err => {
        console.log(err);
        return false;
      });

      // The STRING values for the sports_icons
      this.BASEBALL = "BASEBALL";
      this.BASKETBALL = "BASKETBALL";
      this.FOOTBALL = "FOOTBALL";
      this.HANDBALL = "HANDBALL";
      this.SOCCER = "SOCCER";

      // Handles the format through which the Date and time are displayed
      this.format = "EEEE - MMM dd, yyyy - hh:mm a";

      // Line below initializes the array called "isDisabled"
      this.isDisabled = [];
      this.numbers = [];

      // The URL for the sports_icons
      this.baseballIcon = {
        url: require("../../../../../images/sports_icons/baseball.png"),
        scaledSize: {
          height: 30,
          width: 30
        }
      };

      this.basketballIcon = {
        url: require("../../../../../images/sports_icons/basketbal.png"),
        scaledSize: {
          height: 30,
          width: 30
        }
      };

      this.footballIcon = {
        url: require("../../../../../images/sports_icons/usfootball.png"),
        scaledSize: {
          height: 30,
          width: 30
        }
      };

      this.soccerIcon = {
        url: require("../../../../../images/sports_icons/soccer.png"),
        scaledSize: {
          height: 30,
          width: 30
        }
      };

      this.handballIcon = {
        url: require("../../../../../images/sports_icons/handball.png"),
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

    onDirectionsClick( gameLat, gameLong ){
      // This function reacts to the user clicking the get directions button

      this.dir = {
        origin: { lat: this.latitude, lng: this.longitude },
        destination: { lat: gameLat, lng: gameLong },
        options: {suppressMarkers: true}
      }

    }

    onJoinClick( gameID, index ){
      // This function reacts to the user clicking to join the games

      this.user = JSON.parse(localStorage.getItem("user"));
      this.isDisabled[index] = true;
      this.alertService.success("You have successfully joined the Game!");
      ++this.numbers[index];

      // addPlayer - Code below calls the addPlayer function localted in auth.service.ts
      // this.authService.addPlayer(gameID, this.user.username).subscribe(data => {
      //   if (data.success) {
      //     this.alertService.success("You have successfully joined the Game!");
      //     this.isDisabled[index] = true;
      //   } else {
      //     this.alertService.danger("Sorry, you could not be added to the Game!");
      //     this.alertService.danger(data.msg);
      //   }
      // });
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

  this.toString = function(date: Date) : void {
    this.tempString = "What Waht";
  }
