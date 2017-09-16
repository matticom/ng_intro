import {Component} from "@angular/core";
import {HttpSearchPromiseService} from "./http-search-promise-service";
import {ActivatedRoute, Router} from "@angular/router";
import {RouteUrlSaveService} from "./route-url-save.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'httpPromise',
  templateUrl: './http-promise.component.html'
})
export class HttpPromiseComponent {
  private term: string;
  private loading: boolean = false;
  private searchBtnPressed: boolean = false;
  private actualWrittenWordsInInput: FormControl;
  private searchTitle: string = '';

  constructor(private itunes: HttpSearchPromiseService,
      private route: ActivatedRoute,
      private router: Router,
      private searchParam: RouteUrlSaveService
  ) {
      this.actualWrittenWordsInInput = new FormControl();
      this.actualWrittenWordsInInput
        .valueChanges
        .subscribe(searchTitle => this.searchTitle = searchTitle);
      this.route.params.subscribe(params => {
        console.log(params);
        if (params['term']) {
          this.doSearch(params['term'])
        }
      });
    }

  onSearch(term:string) {
    this.searchBtnPressed = true;
    this.searchParam.addSearchParamObj({term: term});
    this.router.navigate(['search', {term: term}]);
  }

  doSearch(term: string): void {
    this.loading = true;
    this.term = term;
    this.itunes.search(term).then(() => this.loading = false);
  }

  canDeactivate(param: any) {
    console.log(`length ${this.itunes.results.length}   and url param ${JSON.stringify(param)}`);
    console.log(this.searchParam.getSearchParamObj()['term']);
    let retValue = this.searchBtnPressed ||
                this.searchParam.getSearchParamObj()['term'] === this.searchTitle ||
                  this.searchTitle.length == 0;
    this.searchBtnPressed = false;
    return retValue;
  }

}
