import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { EMPTY, Observable, Subscription, catchError, of, throwError } from 'rxjs';
import { TaskService } from '../../services/tasks/task.service';
import { Todo } from '../../models/Todos';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {


  tasksList$!:Observable<Todo[]>;
  constructor(private taskService:TaskService,private loggerService:LoggerService){
  }

  ngOnInit(){
    this.loadData()
  }


  loadData(){
   this.loggerService.log('todo service called')
   this.tasksList$ = this.taskService.fetchData().pipe(
    catchError(err=>{
    this.handleError(err)
    return of([])
  }))
  }

  

  handleError(error:HttpErrorResponse){
    alert(JSON.stringify(error.message))
    
  }
  ngOnDestroy(){
    console.log(`ngOnDestroy `)
  }
}
