/// <reference path="../../typings/index.d.ts"/>

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/observable/fromEvent";
import "rxjs/Rx";


@Component({
  selector: 'structural-dirs',
  templateUrl: './structural-dirs.component.html'
})

export class StructuralDirsComponent implements OnInit {
  @ViewChild('mouseDetectingElement', {read: ElementRef}) imgEl: ElementRef; //Ref siehe Template unten
  mouseMovesBla: Observable<MouseEvent>; // mouseMoves$
  tooglePicFlag: boolean = true;

  private articleList: any[] = [
    {
      "head": "Title 1",
      "contentText": `Das ist ein Text
      voll gut dieser bla bla
      bla`,
      "date": new Date("03/25/2015").toDateString(),
      "pic": ""
    },
    {
      "head": "Title 2",
      "contentText": `Das ist ein Text
      mit einem BILD bla bla
      woooooooooooooow`,
      "date": new Date("09/14/2017").toDateString(),
      "pic": "https://unsplash.it/200?image=0"
    },
    {
      "head": "Title 3",
      "contentText": `Das ist ein Text
      ohne Bild
      schade`,
      "date": new Date("02/22/2019").toDateString(),
      "pic": ""
    }
  ];

  constructor(private renderer: Renderer2) {

  }

// Observable:

  ngOnInit() {
    // kann in Init gemacht werden, da sich die Elementreferenz nicht auf eine Component bezieht <img>
    this.mouseMovesBla = Observable.fromEvent(this.imgEl.nativeElement, 'mouseover')
      .debounceTime(500) // wenn innerhalb von halber Sek mehrere Events kommen wartet er
      // bis der zwischen 2 Events mehr als 0.5 sek vergangen sind und nimmt letzten Wert
      .distinctUntilChanged((firstTime: MouseEvent, secondTime: MouseEvent) =>
                              firstTime.clientX === secondTime.clientX);
      // Events müssen sich unterscheiden, mit cmp Funktion
    this.mouseMovesBla.subscribe( event => {
          console.log(event);
          this.tooglePic()
        }
      );
  }

  tooglePic() {
    if (this.tooglePicFlag) {
      this.renderer.setProperty(this.imgEl.nativeElement, 'src', 'https://unsplash.it/200/300?image=201');
      this.tooglePicFlag = false;
    } else {
      this.renderer.setProperty(this.imgEl.nativeElement, 'src', 'https://unsplash.it/200/300?image=202');
      this.tooglePicFlag = true;
    }

  }

}

