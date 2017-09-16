import {CanActivateChild} from "@angular/router";
import {RouteGuardUserService} from "./route-guard-user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RouteGuardChildrenOnlyLoggedInUserService implements CanActivateChild{
  constructor(private userService: RouteGuardUserService) {};

  canActivateChild() {
    console.log("OnlyLoggedInUsersChildren");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page Children");
      return false;
    }
  }
}
