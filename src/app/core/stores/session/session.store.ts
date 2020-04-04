import { Store, StoreConfig } from '@datorama/akita';
import { SessionState } from './session.state';
import { Injectable } from '@angular/core';

@StoreConfig({
  name: 'session'
})
@Injectable({
  providedIn: 'root'
})
export class SessionStore extends Store<SessionState> {
  constructor() {
    super({
      loggedUserId: 10,
      isLoadUserDone: false
    });
  }
}
