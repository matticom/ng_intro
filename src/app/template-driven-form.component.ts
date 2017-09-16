import { Component, ViewChild} from "@angular/core";
import {Signup} from "./signup";

@Component({
  selector: 'templateDrivenForm',
  templateUrl: './template-driven-form.component.html'
})

export class TemplateDrivenFormComponent {

  model: Signup = new Signup();
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}


