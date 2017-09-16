import {AfterViewInit, Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'carousel-display',
  templateUrl: './carousel-display.component.html'
})

export class CarouselDisplayComponent implements AfterViewInit, OnChanges {

  @Input() delay: number = 2000;
  private imgList: string[];
  private stackImgList: string[] = [];
  picTimer: any;
  counter: number = 0;
  forward: boolean = true;
  changeCounter: number = 0;
  off: boolean = false;
  clockTimer: any;
  tm: string = "";

  constructor() {
    this.imgList = ["https://unsplash.it/200?image=0", "https://unsplash.it/200?image=100", "https://unsplash.it/200?image=200"];
  }

  shiftImgs(): void {
    this.counter++;
    console.log(`-----> neuer Zyklus ------>  shift Methode ${this.counter}`);
    if (this.counter <= 3 && this.forward) {
      console.log(`this.counter <= 3 && this.forward ${this.counter} ${this.forward}`);
      this.stackImgList.push(this.imgList.pop());
    }
    if (this.counter === 4 && this.forward) {
      console.log(`this.counter == 4 && this.forward ${this.counter} ${this.forward}
      ---> Wechsel rückwärts`);
      this.counter = 0;
      this.forward = false;
      return;
    }
    if (this.counter <= 3 && !this.forward) {
      console.log(`(this.counter <= 3 && !this.forward ${this.counter} ${this.forward}`);
      this.imgList.push(this.stackImgList.pop());
    }
    if (this.counter === 4 && !this.forward) {
      console.log(`this.counter == 4 && !this.forward ${this.counter} ${this.forward}
      ---> Wechsel vorwärts`);
      this.counter = 0;
      this.forward = true;
      return;
    }
  }

  ngAfterViewInit() {
    // clearInterval(this.timer);
    // this.timer = setInterval(this.shiftImgs(), this.delay);
    console.log("AfterViewInit");
  }

  ngOnChanges() {
    if (!this.off) {
      if (this.picTimer !== undefined) {
        clearInterval(this.picTimer);
        console.log(`Timer war nicht undefined !!!!!!!!!!!!!!!!!!!!!!`);
      }
      this.picTimer = setInterval(() => {this.shiftImgs();}, this.delay);
      console.log(`OnChange Event: ${++this.changeCounter}     ${++this.picTimer}`);
    }
  }

  manuelClearing() {
    clearInterval(this.clockTimer);
    clearInterval(this.picTimer);
    this.off = true;
  }

  manuelStarting() {
    this.clockTimer = setInterval(() => {
      this.tm = new Date().toLocaleTimeString();
    }, this.delay);
    this.off = false;
    this.ngOnChanges();
  }

  // timerLogic(): void {
  //   this.timer = setInterval(() => {this.setTimer()}, 1000);
  // }
  //
  // clearTimer(): void {
  //   clearInterval(this.timer);
  // }
  //
  // setTimer(): string {
  //   return new Date().toLocaleTimeString();
  // }
}
