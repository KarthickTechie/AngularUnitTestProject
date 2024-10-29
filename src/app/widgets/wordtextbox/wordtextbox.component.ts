import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wordtextbox', 
  standalone: true,
  imports: [],
  templateUrl: './wordtextbox.component.html',
  styleUrl: './wordtextbox.component.scss'
})
export class WordtextboxComponent {
   
    wordOnlyTextbox !: HTMLInputElement ;
    textvalid = false
    constructor(){
      console.log(`WordtextboxComponent :: constructor`)
    }

    ngAfterViewInit(){
      const txtbox = document.getElementById("onlyword-textbox")
      console.log(txtbox)
      if(txtbox){
        console.log(txtbox)
        this.wordOnlyTextbox = txtbox as HTMLInputElement
        
      }

    }

    addUser(){
      if(this.textvalid){
          alert(`User Added Successfully`)
      }else{
        alert(`only alphabets , numbers and underscore is allowed...`)
      }
    }

    onInput(e:any){
        const val:string = e.target.value as string
        const wordonlyregex = /\W/g;
        if(!val.match(wordonlyregex)){
            this.textvalid = true
        }else{
          this.textvalid = false
        }
    }

/*
*/

}
