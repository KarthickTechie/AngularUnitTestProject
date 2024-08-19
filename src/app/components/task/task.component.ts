import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() todo!:Todo;
  @Output() onDeleteTask = new EventEmitter<Todo>();

  deletetask(todo:Todo){
      this.onDeleteTask.emit(todo)
  }
}
