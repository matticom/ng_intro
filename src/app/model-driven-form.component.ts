import { Component, OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'modelDrivenForm',
  templateUrl: './model-driven-form.component.html'
})

export class ModelDrivenFormComponent implements OnInit {

  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createFormControls(): void {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.minLength(8),
      Validators.required]);
    this.language = new FormControl('', Validators.required);
  }

  private createForm(): void {
    this.myform = new FormGroup({
      personName: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log(`Form Submitted! Firstname: ${this.firstName.value} Lastname: ${this.lastName.value}`);
    } else {
      console.log("Form wasn't submitted, because isn't valid")
    }
  }

  onReset() {
    this.myform.reset();
  }

}


