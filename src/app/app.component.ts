import * as moment from 'moment/moment';

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { WorkSession } from './workSession';

@Component({
  selector: 'my-app',
  template: `<h1>Start {{start}}</h1>
    <div>Ende {{ende}}</div>
    <div>Duration {{dura}}</div>
    <ws-navbar></ws-navbar>
    <!--<carousel></carousel>-->
    <structural-dirs></structural-dirs>
    <!--<ws-form></ws-form>-->
    <!--<modelDrivenForm></modelDrivenForm>-->
    <!--<reactiveModelForm></reactiveModelForm>-->
    <!--<templateDrivenForm></templateDrivenForm>-->
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
  shrek = new Hero(1, 'Shrek', 'shits green shit', 'Prinz Kacke');
  first = new WorkSession(1, 'erste', moment('2013-02-08 09+07:00'), moment().utc(), moment.duration('1:00'));
  start = this.first.start;
  ende = this.first.end;
  dura = this.first.pause + '';

  ngOnInit(): void {
    // console.log('Der erste Held:' + this.shrek.name);
  }
}
