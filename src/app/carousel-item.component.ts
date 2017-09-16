import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html'
})

export class CarouselItemComponent implements OnInit {
  @Input() imgUrl: string;

  setUrl(): string {
    return this.imgUrl;
  }

  ngOnInit() {

  }

}
