import { Component } from '@angular/core';
import {} from '@types/googlemaps';

// Component Decorator - Allows for specification of different properties
// that help define the structure of the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Defines where the actual html template will be
  styleUrls: ['./app.component.css'] // Defines the styles that our project will utilize
})

// Lines below are where all the logic reside for this Angular Application
export class AppComponent {
  title = 'app';
}
