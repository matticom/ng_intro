import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef, Renderer2, Input
} from '@angular/core';

@Directive({
  selector: "[ccCardHover]"
})
export class CardHoverDirective {
  @HostBinding('class.w3-center') private ishovering: boolean;

  @Input('ccCardHover') config: {
    querySelector1: '.card-text',
    querySelector2: '.card-text'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') bla() {
    let part1 = this.el.nativeElement.querySelector(this.config.querySelector1);
    this.renderer.setStyle(part1, 'display', 'block');
    let part2 = this.el.nativeElement.querySelector(this.config.querySelector2);
    this.renderer.setStyle(part2, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part1 = this.el.nativeElement.querySelector(this.config.querySelector1);
    this.renderer.setStyle(part1, 'display', 'none');
    let part2 = this.el.nativeElement.querySelector(this.config.querySelector2);
    this.renderer.setStyle(part2, 'display', 'none');
    this.ishovering = false;
  }
}
