import { RestApi } from '../_base/rest.api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesApi extends RestApi {
  getCountries() {
    return this.get('/paises');
  }
}
