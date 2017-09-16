import { Component } from '@angular/core';

@Component({
  selector: 'ws-navbar',
  templateUrl: './workSession-navbar.component.html'
})

export class WorkSessionNavbarComponent {

  expand: boolean = false;
  dropdownStatus: string = 'dropdown';

  toggleDropDown(): void {
    if (this.expand) {
      this.dropdownStatus = 'dropdown';
    } else {
      this.dropdownStatus = 'dropdown open';
    }
    this.expand = !this.expand;
  }

}
