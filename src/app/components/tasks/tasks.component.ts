import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { EMPTY, Observable, Subscription, catchError, map, of, throwError } from 'rxjs';
import { TaskService } from '../../services/tasks/task.service';
import { Todo } from '../../models/Todos';
import { LoggerService } from '../../services/logger/logger.service';
import { TaskComponent } from '../task/task.component';
import { MoreoptionsComponent } from '../moreoptions/moreoptions.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskComponent],
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

  deleteTask(t:Todo){
    this.tasksList$ =   this.tasksList$.pipe(
        map(tasks => {
         return tasks.filter(task => task.id != t.id)
        } )
      )
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
