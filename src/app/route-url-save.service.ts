export class RouteUrlSaveService {

  private search: Object = {term: ''};

  constructor() {
    this.search = {};
  }

  addSearchParamObj(param: Object): void {
    this.search = param;
  }

  getSearchParamObj(): Object {
    return this.search;
  }

}
