import {FormControl} from "@angular/forms";

export class CodeCraftValidators {
  static emailDomain(requiredDomain) {
    return function (control: FormControl) {
      let email = control.value;
      if (email && email.indexOf("@") != -1) {
        let [_, domain] = email.split("@");
        if (domain !== requiredDomain) {
          return {
            emailDomain: {
              valid: false,
              parsedDomain: domain,
              requiredDomain: requiredDomain
            }
          }
        }
      }
      return null;
    }
  }
}
