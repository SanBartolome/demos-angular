import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const { maps } = environment.google;

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesApi {
  constructor(private _http: HttpClient) {}

  getNearPlaces(latitude: number, longitude: number) {
    const query = {
      API_KEY: maps.apiKey,
      latitude: String(latitude),
      longitude: String(longitude)
    };
    return this._http.get(`URL_TO_GOOGLE_PLACES_API`, {
      params: new HttpParams({ fromObject: query })
    });
  }
}
