/// <reference path="../../typings/index.d.ts"/>

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment/moment';
import { WorkSession } from './workSession';
// import * as $ from 'jquery';

@Component({
  selector: 'ws-form',
  templateUrl: './workSession-form.component.html'
})

export class WorkSessionFormComponent implements OnInit {

  public projects: Array<string>;
  public model: WorkSession;

  @ViewChild('btn') btnRef:ElementRef;

  somedate: moment.Moment;
  expand = false;
  dropdownStatus = 'dropdown';
  submitted = false;
  today: Date = new Date();
  mm: number;
  yyyy: number;
  time24: number;
  private dd: number;

  constructor() { this.changeClass(); }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit() {
    let a;
    this.submitted = true;
  }

  changeClass(): void {
    this.projects = ['project1', 'project2',
      'project3', 'project4'];
    this.model = new WorkSession(1, this.projects[0], moment('2013-02-08 09+07:00'), moment().utc(), moment.duration('1:00'), 'hell');
  }

  clkBtn(): void {

    // $(this.btnRef.nativeElement)
    //   .click(function(){
    //   alert("The paragraph was clicked.");
    // });
    $(this.btnRef.nativeElement)
      .removeClass("btn btn-success")
      .addClass("btn-default");


  }

  ngOnInit(): void {
    $(this.btnRef.nativeElement)
      .click(function(){
        alert("Text: " + $(this.btnRef.nativeElement).html());
      });
    this.somedate = moment('2013-02-08 09+07:00');
    console.log('Moment Date:' + this.somedate.toISOString());
    this.today = new Date();
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth() + 1;
    this.yyyy = this.today.getFullYear();
    this.time24 = this.today.getTime();
    document.getElementById("test").innerHTML = this.projects.constructor.toString();
    console.log('JS Time:' + this.time24);
  }

  private toggleDropDown(): void {
      if (this.expand) {
          this.dropdownStatus = 'dropdown';
      } else {
          this.dropdownStatus = 'dropdown open';
      }
      this.expand = !this.expand;
  }


}

