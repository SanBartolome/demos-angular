import { Injectable } from '@angular/core';
import { CountriesApi } from '../api/project/countries.api';
import { CountriesStore } from '../stores/countries/countries.store';
import { tap, catchError, finalize } from 'rxjs/operators';
import { CountriesQuery } from '../stores/countries/countries.query';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(
    private countriesApi: CountriesApi,
    private countriesStore: CountriesStore,
    private countriesQuery: CountriesQuery
  ) {}

  loadCountries() {
    const countriesCount = this.countriesQuery.getCount();
    if (countriesCount === 0) {
      this.countriesApi
        .getCountries()
        .pipe(
          tap(results => this.countriesStore.set(results)),
          tap(() => alert('Los países se cargaron correctmente')),
          catchError(err => {
            alert('Los países no se pudieron cargar :(');
            return EMPTY;
          }),
          finalize(() => {})
        )
        .subscribe();
    }
  }
}
