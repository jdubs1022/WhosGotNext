// The ts file makes all the requests to our backend api

import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  games: any;
  userLocation: any;

  constructor( private http: Http ) { }

  // Function below reaches into our backend API and makes the post request to register
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:5000/users/register', user, {headers: headers}).map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:5000/users/authenticate', user, {headers: headers}).map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:5000/users/profile', {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Function below fetches token from local-storage so that it
  // may be used in the header of restricted pages
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    this.games = null;
    this.userLocation = null;
    localStorage.clear();
  }

  // Function below reaches into our backend API and makes the post request to create
  createGame( game ){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/games/create', game, {headers: headers}).map(res => res.json());
  }

  addPlayer( gameID, username ){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    // Set the query parameters
    let params = new URLSearchParams();
    params.append("gameID", gameID);
    params.append("username", username);
    let options = new RequestOptions({headers: headers, params: params});

    return this.http.put('http://localhost:5000/games/add', {headers: headers}).map(res => res.json());
  }

  // Function below reaches into our backend API and makes the post request to search
  authenticateSearch( results ){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/games/search', results, {headers: headers}).map(res => res.json());
  }

  // Function below stores to local-storage, the array of games that is passed-in
  storeGameData( games ) {
    localStorage.setItem("games", JSON.stringify(games));
    this.games = games;
  }

  // Function below stores to local-storage, the object of containing the
  // user's entered location after a search
  storeUserLocation( userLocation ) {
    localStorage.setItem("userLocation", JSON.stringify(userLocation));
    this.userLocation = userLocation;
  }

  // Function below handles getting all the games that result from the search page
  getResult() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:5000/games/result', {headers: headers}).map(res => res.json());
  }

}
