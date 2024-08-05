import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Robar escudo capitan america'),
];

export const todoReducer = createReducer(estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {

    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado,
        }
      }
      return todo;
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          texto: texto,
        }
      }
      return todo;
    });
  }),

  on(borrar, (state, {id}) => {
    return state.filter(todo => todo.id !== id);
  }),

  on(toggleAll, (state, {completado}) => {

    return state.map(todo => {
      return {
        ...todo,
        completado: completado,
      }
    })
  }),

  on(limpiarCompletados, (state) => {
    return state.filter( todo => !todo.completado );
  }),
);
