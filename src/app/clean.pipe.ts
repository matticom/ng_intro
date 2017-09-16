import {Pipe} from "@angular/core";

@Pipe({
  name: "cleanPipe"
})
export class CleanPipe {
  transform(insertValue: string, badWords: string): string {
    let substitution: string = "$%#@!";
    let badWordArray: string[] = badWords.split(",");
    for(let i = 0; i < badWordArray.length; i++) {
      if (insertValue == badWordArray[i])
        return substitution;
    }
    return insertValue;
  }
}

// benutzt in workSession-form.component.html/ts
