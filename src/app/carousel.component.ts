import {AfterViewInit, Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {

  delay: number = 2000;

  changeDelay(value: number): void {
    this.delay = value;
    console.log(`Delay auf ${this.delay} gestellt`);
  }

}
