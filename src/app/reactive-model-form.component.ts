import { Component, OnInit} from "@angular/core";
import { FormControl} from '@angular/forms';


@Component({
  selector: 'reactiveModelForm',
  templateUrl: './reactive-model-form.component.html'
})

export class ReactiveModelFormComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term)
      });
  }
}


