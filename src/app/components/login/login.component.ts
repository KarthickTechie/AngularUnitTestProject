import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../Utils/CustomValidators';
import { DynamicCardsData, DynamicFieldsData, NgxSuperDashboardModule } from 'ngx-super-dashboard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,NgxSuperDashboardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  countCardsListData: DynamicCardsData[] = [
    { title: "Total Proposals", value: 700 },
    { title: "On Process", value: 230 },
    { title: "Sanctioned", value: 300 },
    { title: "Rejected", value: 254 },
    { title: "Opened prending for > 30 days", value: 143 },
    { title: "Disbursed", value: 120 },
  ];

  dynamicSearchFormFields: DynamicFieldsData[] = [
    { lable: "Zone", formControlKey: "zone", lovDataList: [] },
    { lable: "Branch", formControlKey: "branch", lovDataList: [] },
    { lable: "Teams", formControlKey: "teams", lovDataList: [] },
    { lable: "Product", formControlKey: "product", lovDataList: [] },
    { lable: "Start Date", formControlKey: "startDate", type: "date" },
    { lable: "End Date", formControlKey: "endDate", type: "date" },
  ];
  
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

OnSelected(e:any){

}

OnSearchSubmit(e:any){
  
}
}
