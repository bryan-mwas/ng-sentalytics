import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Tweet } from '../models/tweet';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TweetService {
  private _sentUrl = 'http://127.0.0.1:8000/'

  constructor(private _http: HttpClient, private http: Http) { }

  getTweets(): Observable<Tweet[]> {
    return this._http.get<Tweet[]>(this._sentUrl + 'tweets/');
  }

  analyzeTweets(body) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this._sentUrl + 'classify/', JSON.stringify(body), options);
  }

  getPolarityTweets(): Observable<any[]> {
    return this._http.get<any[]>(this._sentUrl + 'polarity/');
  }

  getTweetThemes(body) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this._sentUrl + 'topics/', JSON.stringify(body), options);
  }
}
