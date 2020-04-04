import { EntityStore, StoreConfig } from '@datorama/akita';
import { CountriesState } from './countries.state';
import { Injectable } from '@angular/core';

@StoreConfig({
  name: 'countries'
})
@Injectable({
  providedIn: 'root'
})
export class CountriesStore extends EntityStore<CountriesState> {
  constructor() {
    super();
  }
}
