import { Query } from '@datorama/akita';
import { SessionState } from './session.state';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  loggedUserId$ = this.select(state => state.loggedUserId);

  constructor(store: SessionStore) {
    super(store);
  }
}
