import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorName(): ValidatorFn {
 
  return (control: AbstractControl): { [key: string]: any } => {
   
    var nameRegex = new RegExp("^([a-zA-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ -]{1,75})$");
    console.log(control.value);
    const validateName = nameRegex.test(control.value);
    return validateName ? null :  { 'validatorName': { value: control.value } };
  };
}

@Directive({
  selector: '[ValidateName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateNameDirective, multi: true }
   
  ]
})


export class ValidateNameDirective implements Validator {


  validate(control: AbstractControl): { [key: string]: any; } {
    return validatorName()(control);
  }

  
}


