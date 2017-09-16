import {CanActivate} from "@angular/router";
import {RouteGuardUserService} from "./route-guard-user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RouteGuardOnlyLoggedInUserService implements CanActivate{
  constructor(private userService: RouteGuardUserService) {};

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
