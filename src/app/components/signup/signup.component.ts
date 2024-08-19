import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../Utils/CustomValidators';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  companyname = ""
  selectedCar = ""
  cars = [{id:1,value:'BMW'},{id:2,value:'AUDI'},{id:3,value:'Lambogini'},]

  constructor(private fb:FormBuilder){

    
  }
  signupForm = this.fb.group({
    username : ['',
    [Validators.required,Validators.minLength(4),ForbiddenNameValidator(/bob/i)]],
    password:[''],
    address: this.fb.group({
      state:[''],
      city:[''],
      pincode:['']
    }),
    aliases:this.fb.array([
      this.fb.control('')
    ])
  })

  get aliases(){
    return this.signupForm.get('aliases') as FormArray
  }

  save(){
    console.log(this.signupForm.value)
  }

  updateForm(){
    this.signupForm.patchValue({
      username:'Kevin',
      address:{
        state:'TamilNadu',
        city:'chennai'
      }
    })
  }

  addControl(){
     this.aliases.push(this.fb.control(''))
  }

  get username(){
    return this.signupForm.get('username')
  }

  carChanged(){
    alert(this.selectedCar)
  }

 
  
}
