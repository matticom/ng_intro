import { Component, Output, EventEmitter} from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Joke} from "./joke";

@Component({
  selector: 'joke-form',
  template: `<div class="card card-block">
  <h4 class="card-title">Create Joke</h4>
  <form novalidate
        [formGroup]="form">
    <div class="form-group"
         [ngClass]="{
        'has-danger': setup.invalid && (setup.dirty || setup.touched),
        'has-success': setup.valid && (setup.dirty || setup.touched)
      }">
      <input type="text"
             class="form-control"
             placeholder="Enter the setup"
             formControlName="setup">
      <div class="form-control-feedback"
           *ngIf="setup.errors && (setup.dirty || setup.touched)">
        <p *ngIf="setup.errors.required">Setup is required</p>
      </div>
    </div>
    
    <div class="form-group"
         [ngClass]="{
        'has-danger': punchline.invalid && (punchline.dirty || punchline.touched),
        'has-success': punchline.valid && (punchline.dirty || punchline.touched)
      }">
      <input type="text"
             class="form-control"
             placeholder="Enter the punchline"
             formControlName="punchline">
      <div class="form-control-feedback"
           *ngIf="punchline.errors && (punchline.dirty || punchline.touched)">
        <p *ngIf="punchline.errors.required">Punchline is required</p>
      </div>
    </div>
    <button type="button"
            class="btn btn-primary"
            [disabled]="form.invalid"
            (click)="createJoke(setup.value, punchline.value)">Create
    </button>
  </form>
</div>

  `
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();
  form: FormGroup;
  punchline: FormControl;
  setup: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      punchline: this.punchline,
      setup: this.setup
    });
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
