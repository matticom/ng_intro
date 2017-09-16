import {Injectable} from "@angular/core";
import {Http } from "@angular/http";
import {HttpSearchItem} from "./http-search-item";
import {Jsonp} from '@angular/http';

@Injectable()
export class HttpSearchPromiseService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: HttpSearchItem[];

  constructor(private jsonp:Jsonp) {
    this.results = [];
  }

  search(term:string) {

    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res.json().results.map(item => {
              return new HttpSearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            console.log(res.json());
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
