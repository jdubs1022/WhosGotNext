import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { GooglePlaceModule } from "ngx-google-places-autocomplete"; // Import Google-Places Module
import { AgmCoreModule } from '@agm/core'; // Import Angular-Google Maps
import { AgmDirectionModule } from 'agm-direction';  // Import Angular-Google-Maps Directions Moudle


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

// Import BrowserAnimationsModule
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// Import your library
import { AlertModule } from 'ngx-alerts';
import { AuthGuard } from './guards/auth.guard';
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';

// Any routes that need protecting have "canActivate[AuthGuard]"
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'create', component: CreateComponent, canActivate:[AuthGuard]},
  {path:'search', component: SearchComponent, canActivate:[AuthGuard]},
  {path:'result', component: ResultComponent, canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CreateComponent,
    SearchComponent,
    ResultComponent,

  ],
  imports: [
    BrowserModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 3000}),
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqqOtWm-TTatvNnl585mt0V4dN0txIi0M',
      libraries: ["places"]
    }),
    AgmDirectionModule

  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
