import { QueryEntity } from '@datorama/akita';
import { CountriesState } from './countries.state';
import { Injectable } from '@angular/core';
import { CountriesStore } from './countries.store';

@Injectable({
  providedIn: 'root'
})
export class CountriesQuery extends QueryEntity<CountriesState> {
  countries$ = this.selectAll();
  getCountries() {
    this.getAll();
  }

  constructor(store: CountriesStore) {
    super(store);
  }
}
