import { TodosQuery } from 'src/app/core/stores/todos/todos.query';
import { CountriesQuery } from 'src/app/core/stores/countries/countries.query';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo.model';

export class DashboardQuery {
  constructor(
    private todosQuery: TodosQuery,
    private countriesQuery: CountriesQuery
  ) {}

  todosByCountry$: Observable<{ [key: string]: Todo[] }> = combineLatest([
    this.todosQuery.selectAll(),
    this.countriesQuery.countries$
  ]).pipe(
    tap(console.log),
    map(([todos, countries]) => {
      const countriesMap = countries.reduce((mapObject, country) => {
        mapObject[country.name] = [];
        return mapObject;
      }, {} as { [key: string]: Todo[] });
      // { "alemania": [], "peru": [] }
      todos.forEach(todo => {
        countriesMap[todo.name] = [...countriesMap[todo.name], todo];
      });
      // { "alemania": [Todo, Todo, Todo], "peru": [todo] }
      return countriesMap;
    })
  );
}
