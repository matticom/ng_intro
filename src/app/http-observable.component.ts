import {Component} from "@angular/core";
import {HttpSearchObservableService} from "./http-search-observable-service";
import {HttpSearchItem} from "./http-search-item";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'httpObservable',
  templateUrl: './http-observable.component.html'
})
export class HttpObservableComponent {
  private term: string;
  private loading: boolean = false;
  private results: Observable<HttpSearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: HttpSearchObservableService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( () => this.loading = true)
      .switchMap( term => {
        this.term = term;
        return this.itunes.search(term);
      })
      .do( () => this.loading = false )
  }
}
