import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../Utils/CustomValidators';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,MatSlideToggleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  constructor(private fb:FormBuilder){
  }

  

  signupFormGroup = this.fb.group({
    'name' : ['admin',[Validators.required]],
'password':['',[Validators.required,Validators.minLength(8)]],
'email':[''],
'phone':['']
})


signupFormArray:FormGroup[]= [this.signupFormGroup,this.signupFormGroup]


  username = new FormControl('',[Validators.required,Validators.minLength(5),
    Validators.maxLength(12),
    ForbiddenNameValidator(/admin/gi)])

    customerName = ""

//  signupFormGroup = new FormGroup({
//   'name' : new FormControl('',[Validators.required]),
//   'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
//   'email':new FormControl(''),
//   'phone':new FormControl('')
//  })   


 get name(){
  return this.signupFormGroup.controls['name']
 }
  
get password(){
  return this.signupFormGroup.controls['password']

}

save(){
  console.log(this.signupFormGroup.value)
}

update(){
  this.signupFormGroup.patchValue({
    name:'karthick',
    phone:'12134525'
  })
}


saveCustomer(){
  alert(this.customerName)
}

}
