import { Injectable } from '@angular/core';
import { ProjectTodosApi } from '../api/project/todos.api';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private _projectTodosApi: ProjectTodosApi) {}

  create(todo: Todo) {}
}
