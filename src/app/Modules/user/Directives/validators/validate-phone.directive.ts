import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorPhone(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } => {

    var phoneRegex = new RegExp("^0[0-9]( |-)?([0-9]{2}( |-)?){4}$");
    console.log(control.value);
    console.log(phoneRegex);
    const validatePhone = phoneRegex.test(control.value);
    console.log(validatePhone);
    return validatePhone ? null : { 'validatorPhone': { value: control.value } };
  };
}

@Directive({
  selector: '[ValidatePhone]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidatePhoneDirective, multi: true }

  ]
})


export class ValidatePhoneDirective implements Validator {


  validate(control: AbstractControl): { [key: string]: any; } {
    return validatorPhone()(control);
  }


}
