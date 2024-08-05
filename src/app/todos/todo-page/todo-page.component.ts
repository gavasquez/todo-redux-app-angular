import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(private store: Store<AppState>){}


  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({completado: this.completado}));
  }

}
