import {Component} from "@angular/core";

@Component({
  selector: 'route-frame',
  template: `
    <div class="m-t-1">
	<route-header></route-header>
    </div>
	<div class="m-t-1">
    <router-outlet></router-outlet>
  </div>
 `
})
export class RouteFrameComponent{

}
