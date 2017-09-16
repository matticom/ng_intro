import {Joke} from "./joke";
import {Inject} from "@angular/core";
import {JokeMaxService} from "./joke-max-service";

export class JokeService {
  private jokes: Joke[];

  constructor(@Inject(JokeMaxService) private maxJokeService: JokeMaxService) {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  public saveJoke(joke: Joke): void {
    if (this.maxJokeService.countIncrease()) {
      this.jokes.unshift(joke);
    }
  }

  public deleteJoke(joke: Joke): void {
    if (this.maxJokeService.countDecrease()) {
      let indexToDelete = this.jokes.indexOf(joke);
      if (indexToDelete !== -1) {
        this.jokes.splice(indexToDelete, 1);
      }
    }
  }

  public getJokes(): Joke[] {
    return this.jokes;
  }
}
