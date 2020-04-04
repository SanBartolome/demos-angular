import { EntityState } from '@datorama/akita';
import { Country } from 'src/app/models/country.model';

export interface CountriesState extends EntityState<Country> {}
