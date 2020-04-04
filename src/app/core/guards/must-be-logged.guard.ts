import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionQuery } from '../stores/session/session.query';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MustBeLoggedGuard implements CanActivate, CanLoad {
  constructor(private sessionQuery: SessionQuery) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    // TODO validate if login is in store or is in localStorage
    return this.sessionQuery.loggedUserId$.pipe(
      first(),
      map(loggedUserId => !!loggedUserId)
    );
  }
  canLoad(): boolean | Promise<boolean> | Observable<boolean> {
    // TODO validate if login is in store or is in localStorage
    return this.sessionQuery.loggedUserId$.pipe(
      first(),
      map(loggedUserId => !!loggedUserId)
    );
  }
}
