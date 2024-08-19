import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const ForbiddenNameValidator = (regex:RegExp):ValidatorFn=>{
return (control:AbstractControl):ValidationErrors | null=>{
     
     return  regex.test(control.value) ? {"forbidden":{value:control.value}} : null
}
}