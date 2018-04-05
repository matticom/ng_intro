import {Directive, Inject, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidatorFn, Validators} from "@angular/forms";
import {CodeCraftValidators} from "./validator-email-domain";

@Directive({
  selector: '[emailDomain][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorsEmailDomainDirective,
      multi: true
    }
  ]
})
export class ValidatorsEmailDomainDirective {
  @Input('emailDomain') emailDomain: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(): void {
    if (this.emailDomain) {
      this.valFn = CodeCraftValidators.emailDomain(this.emailDomain)
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: FormControl) {
    return this.valFn(control);
  }
}
