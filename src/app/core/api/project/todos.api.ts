import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

import { RestApi } from '../_base/rest.api';
import { Todo } from 'src/app/models/todo.model';
import { TodosMapper } from '../../mappers/todos.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProjectTodosApi extends RestApi {
  createTodo(todo: Todo) {
    return this.post('/todos', TodosMapper.mapToBackend(todo)).pipe(
      map(response => TodosMapper.mapFromBackend(response))
    );
  }

  /**
   *
   * @param filters querystring as object. ie. { name_contains: "din" } (field name contains the word "din")
   */
  findTodos(filters: any) {
    return this.get('/todos', {
      params: new HttpParams({ fromObject: filters })
    }).pipe(
      map((resp: any[]) => resp.map(be => TodosMapper.mapFromBackend(be)))
    );
  }
}
