import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorEmail(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } => {

    var emailRegex = new RegExp("^[a-zA-Z0-9_]+([-+.'][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([-.][a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}");
    console.log(control.value);
    const validateEmail = emailRegex.test(control.value);
    return validateEmail ? null : { 'validatorEmail': { value: control.value } };
  };
}

@Directive({
  selector: '[ValidateEmail]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateEmailDirective, multi: true }

  ]
})


export class ValidateEmailDirective implements Validator {


  validate(control: AbstractControl): { [key: string]: any; } {
    return validatorEmail()(control);
  }


}
