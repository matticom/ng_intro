import {Component} from "@angular/core";
import {RouteUrlSaveService} from "./route-url-save.service";

@Component({
      selector: 'route-header',
  template: `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand"
         [routerLink]="['home']">iTunes Search App
      </a>
      <ul class="nav navbar-nav">
        <li class="nav-item"
            [routerLinkActive]="['active']">
          <a class="nav-link"
             [routerLink]="['home']">Home
          </a>
        </li>
        <li class="nav-item"
            [routerLinkActive]="['active']">
          <a class="nav-link"
             [routerLink]="['search', searchParam.getSearchParamObj()]">Search {{searchParam.getSearchParamObj() | json}}
          </a>
        </li>
      </ul>
    </nav>
        `
})
export class RouteHeaderComponent{

  constructor(private searchParam: RouteUrlSaveService) {

  }
}
