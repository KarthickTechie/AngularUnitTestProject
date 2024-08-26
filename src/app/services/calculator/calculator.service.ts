import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // constructor(private loggerService:LoggerService){

  // }
  // add(n1:number,n2:number){
  //   const result = n1+n2
  //   this.loggerService.log(`Add operation called`)
  //   return result
  // }

  // substract(n1:number,n2:number){
  //   const result = n1-n2
  //   this.loggerService.log(`substract operation called`)

  //   return result

  // }

  constructor(){

  }

  add(n1:number,n2:number){
    return n1+n2
  }

  upperCase(value:string){
    return value.toUpperCase()
  }

  addIdProp(val:User,id:number){
    // const x:any = val
    // x.id = id
    // return x
     return {...val,id} 
  }


}

export interface User{
  name:string;
  userId:number;
}