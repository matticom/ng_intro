import {CanActivateChild} from "@angular/router";

export class RouteGuardChildrenAlwaysAuthService implements CanActivateChild {
  canActivateChild() {
    console.log("AlwaysAuthChildrenGuardChildren");
    return true;
  }
}
