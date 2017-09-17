import * as moment from 'moment/moment';

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { WorkSession } from './workSession';

@Component({
  selector: 'my-app',
  template: `<h1>Start {{start}}</h1>
    <div>Ende {{ende}}</div>
    <div>Duration {{dura}}</div>
  <h1>Start {{start}}</h1>
  <div>Ende {{ende}}</div>
  <div>Duration {{dura}}</div>
    <ws-navbar></ws-navbar>
    <!--<carousel></carousel>-->
    <structural-dirs></structural-dirs>
    <!--<ws-form></ws-form>-->
    <modelDrivenForm></modelDrivenForm>
    <!--<reactiveModelForm></reactiveModelForm>-->
    <templateDrivenForm></templateDrivenForm>
    <!--<httpDemo></httpDemo>-->
    <!--<httpPromise></httpPromise>-->
    <!--<httpObservable></httpObservable>-->
  <route-frame></route-frame>
  
  <!--<div class="row">-->
    <!--<div class="col-xs-6">-->
      <!--<parent><child></child></parent>-->
    <!--</div>-->
    <!--<div class="col-xs-6">-->
      <!--<parent><child></child></parent>-->
    <!--</div>-->
  <!--</div>-->
  <!--<joke-list></joke-list>-->
  `
})
export class AppComponent implements OnInit {
  // name = 'Angular';
  private shrek: Hero = new Hero(1, 'Shrek', 'green', 'Prinz K');
  private first: WorkSession = new WorkSession(1, 'erste', new Date(2013, 2, 28, 9, 29, 31, 303), new Date(),
    3600000);
  private start: Date = this.first.start;
  private ende: Date = this.first.end;
  private dura: number;


  ngOnInit(): void {
    // console.log('Der erste Held:' + this.shrek.name);
    this.dura = new Date(2013, 2, 28, 9, 29, 32, 304).getTime() - this.start.getTime();
  }
}
