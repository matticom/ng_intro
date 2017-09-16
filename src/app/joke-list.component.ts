import {Component} from "@angular/core";
import {JokeService} from "./joke-service";
import {JokeMaxService} from "./joke-max-service";

@Component({
  selector: 'joke-list',
  template: `
<joke-form (jokeCreated)="jokeService.saveJoke($event)"></joke-form>
<joke *ngFor="let j of jokeService.getJokes()" [joke]="j" (jokeDeleted)="jokeService.deleteJoke($event)"></joke>
  `,
  providers: [ JokeService, JokeMaxService ]  // JokeService wird hier bereitgestellt
})

export class JokeListComponent {

  constructor(private jokeService: JokeService) {
  }
}
