import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todos';
import { map, tap } from 'rxjs';
import { Colors } from '../../Utils/Colors';

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

   fetchChartsData(reportType:string,isStyle:boolean,parentId?:number){
    return this.http.get(`../assets/data/${reportType}leadsummary.json`)
    .pipe(
      tap(data=>console.log(data)),
      map((res:any)=>{

        return res.data.map((v:any,index:number)=>{
          let i = index > Colors.length  ? index - Colors.length : index 
          const r = +Math.random().toFixed(1)*10
          console.log(r)
          i+=r
          const color = isStyle ? Colors[r]:''
          return [v.name,v.value,color]
           
        })
      })
     
    )

      
    
   }
 
  }
