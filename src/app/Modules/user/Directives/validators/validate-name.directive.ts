import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorName(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any } => {

    return { 'validatorName': { valid: false } };
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


