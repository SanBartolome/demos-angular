import { EntityState, ID } from '@datorama/akita';
import { Todo } from 'src/app/models/todo.model';

export interface TodosState extends EntityState<Todo> {
  ui: {
    pagedList?: {
      currentPage?: number;
      pagesNumber?: number;
      search?: string;
      pageTodosIds: ID[];
    };
  };
}
