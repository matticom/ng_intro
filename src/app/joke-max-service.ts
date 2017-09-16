import {Inject, Injectable, InjectionToken} from "@angular/core";
// import {MAX_JOKES_TOKEN} from "./app.module";

export class JokeMaxService {
  private jokes: number;

  constructor(@Inject('MAX_JOKES_TOKEN') private maxNumberOfJokes: number) {
    // wird global Injected
    this.jokes = 3;
  }

  public countIncrease(): boolean {
    if (this.jokes < this.maxNumberOfJokes) {
      this.jokes++;
      return true;
    } else {
      return false;
    }
  }

  public countDecrease(): boolean {
    if (this.jokes < 1) {
      return false;
    } else {
      this.jokes--;
      return true;
    }
  }
}
