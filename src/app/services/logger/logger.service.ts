import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private messages:string[] = [] 
  constructor() { }

  log(message:string){
    this.messages.push(message)
  }
}
