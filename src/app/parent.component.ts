import { Component} from "@angular/core";
import { SimpleService } from "./simpleService";

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [`
  .parent {
    background-color: #D1E751;
    padding: 10px;
  }
 `],
  // providers: [ SimpleService ]
  viewProviders: [SimpleService ]
})
export class ParentComponent {
  constructor(private service: SimpleService) { }
}
