import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { TodosState } from './todos.state';
import { TodosStore } from './todos.store';
import { SessionQuery } from '../session/session.query';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  constructor(store: TodosStore, private _sessionQuery: SessionQuery) {
    super(store);
  }

  /**
   * Selector para obtener los todos del usuario logeado
   */
  loggedUserTodos$ = this._sessionQuery
    .select(state => state.loggedUserId)
    .pipe(
      switchMap(userId =>
        this.selectAll({
          filterBy: e => e.user.id === userId
        })
      )
    );
}
