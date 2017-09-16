import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {HttpPromiseComponent} from "./http-promise.component";

export class RouteGuardUnsearchTermService implements CanDeactivate<HttpPromiseComponent> {
  canDeactivate(component: HttpPromiseComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
    console.log("UnsearchedTermGuard");
    console.log(route.params);
    console.log(state.url);
    return component.canDeactivate(route.params) || window.confirm("Are you sure?");
  }
}
