import { Component} from "@angular/core";
import { SimpleService } from "./simpleService";

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [`
  .child {
    background-color: #239CDE;
    padding: 10px;
  }
 `]
})
export class ChildComponent {
  constructor(private service: SimpleService) { }
}
