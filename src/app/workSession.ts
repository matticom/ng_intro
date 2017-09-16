import * as moment from 'moment/moment';
// const moment = require('../../../node_modules/moment/moment.js');

export class WorkSession {
  constructor(
    private _id: number,
    private _project: string,
    private _start: moment.Moment,
    private _end: moment.Moment,
    private _pause: moment.Duration,
    private _work?: string,
  ) {}

  get id(): number {
    return this._id;
  }

  get project(): string {
    return this._project;
  }

  get start(): moment.Moment {
    return this._start;
  }

  get end(): moment.Moment {
    return this._end;
  }

  get pause(): moment.Duration {
    return this._pause;
  }

  get work(): string {
    return this._work;
  }
}
