import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './models/todo';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
