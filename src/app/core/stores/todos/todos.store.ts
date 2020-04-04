import { Injectable } from '@angular/core';
import { EntityStore } from '@datorama/akita';

import { TodosState } from './todos.state';

@Injectable({
  providedIn: 'root'
})
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super({
      ui: {
        pagedList: {
          currentPage: 1,
          search: null,
          pageTodosIds: [],
          pagesNumber: 1
        }
      }
    });
  }
}
