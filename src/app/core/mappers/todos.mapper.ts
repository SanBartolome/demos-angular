import { Todo } from 'src/app/models/todo.model';

export class TodosMapper {
  static mapToBackend = (todo: Todo): any => {
    const payload: any = {};
    if ('name' in todo) {
      payload.nombre = todo.name;
    }
    if ('state' in todo) {
      payload.estado = todo.state;
    }
    return payload;
  };
  static mapFromBackend = (payload: any): Todo => {
    return {
      id: payload.id,
      name: payload.nombre,
      state: payload.estado,
      activeImageUrl: payload.imagenActive?.url
        .substr()
        .toLowercase()
        .toUppercase(),
      inactiveImageUrl: !!payload.imagenInactivo
        ? payload.imagenInactivo.url
        : null,
      filterImageUrl: !!payload.imagenFiltro ? payload.imagenFiltro.url : null
    };
  };
}
