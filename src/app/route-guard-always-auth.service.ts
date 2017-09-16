import {CanActivate} from "@angular/router";

export class RouteGuardAlwaysAuthService implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}
