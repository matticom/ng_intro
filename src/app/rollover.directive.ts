import {Directive, HostListener, ElementRef, HostBinding, Renderer2, Input, OnInit} from "@angular/core";


@Directive({
  selector: "[ccRollover]"
})

export class RolloverDirective implements OnInit {

  @HostBinding('src') private imagePath: string;


  @Input('ccRollover') config = {
    initial:'https://unsplash.it/200/300?image=201',
    over:''
  }

  private initial: boolean = true;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.imagePath = this.config.initial;
  }

  // Deaktiviert für Observable !!!!!

  // @HostListener('mousemove') onMouseMove () {
  //   console.log("mousemovemousemovemousemovemousemovemousemove");
  //   let img = this.el.nativeElement;
  //   if (this.initial) {
  //     this.renderer.setProperty(img, 'src', this.config.initial);
  //     this.initial = false;
  //   } else {
  //     this.renderer.setProperty(img, 'src', this.config.over);
  //     this.initial = true;
  //   }
  // }
}
