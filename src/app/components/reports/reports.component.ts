import { Component } from '@angular/core';
import { Observable, catchError, empty, merge, of, throwError } from 'rxjs';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {


  testObs =  new Observable((subscriber)=>{
    subscriber.next('Hi...')
    subscriber.next('how are u...')
    subscriber.error('something went wrong')
  })

  constructor(){
  }

  ngOnInit(){
    this.testObs
    .pipe(
      catchError(error => merge(of(error),of('Can I have ur number...')
      ))
      )
    .subscribe({
      next:(data)=>alert(data),
      error:(error)=>alert(error),
      complete:()=>alert(`completed...`)
    })


  }
}
