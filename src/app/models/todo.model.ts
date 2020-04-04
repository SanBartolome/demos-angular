import { ID } from '@datorama/akita';
import { User } from './user.model';
import { Country } from './country.model';

export enum TodoState {
  Pending = 'PENDIENTE',
  Doing = 'EN_PROGRESO',
  Done = 'HECHO'
}

export interface Todo {
  id?: ID;
  name?: string;
  state?: TodoState;
  user?: User;
  activeImageUrl?: string;
  inactiveImageUrl?: string;
  filterImageUrl?: string;
  country?: Country;
}
