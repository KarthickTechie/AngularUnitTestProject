import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todos';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  arr = []
  constructor(private http:HttpClient) { }

  fetchData(){
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos',{
     reportProgress:true,
     observe:'body'
    })
                         
   }
 
}
