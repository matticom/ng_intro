// import * as moment from 'moment/moment';
// const moment = require('../../../node_modules/moment/moment.js');

export class WorkSession {
  constructor(
    private _id: number,
    private _project: string,
    private _start: Date,
    private _end: Date,
    private _pause: number,
    private _work?: string,
  ) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get project(): string {
    return this._project;
  }

  set project(value: string) {
    this._project = value;
  }

  get start(): Date {
    return this._start;
  }

  set start(value: Date) {
    this._start = value;
  }

  get end(): Date {
    return this._end;
  }

  set end(value: Date) {
    this._end = value;
  }

  get pause(): number {
    return this._pause;
  }

  set pause(value: number) {
    this._pause = value;
  }

  get work(): string {
    return this._work;
  }

  set work(value: string) {
    this._work = value;
  }
}
