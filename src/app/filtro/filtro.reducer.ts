import { createReducer, on, Action} from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initalState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos, Action>(initalState,
  on(setFiltro, (state, {filtro}) => filtro),
);
