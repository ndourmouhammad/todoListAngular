import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoValue: string = '';

  todoList: Todo[] = [];
  finishedList: Todo[] = [];

  constructor() { }

  addTodo() {
    if (this.todoValue !== '') {
      this.todoList.push({ 
      content: this.todoValue, 
      id: this.todoList.length + 1,
      value: false 
      });
      this.todoValue = '';
    }
  }
}
