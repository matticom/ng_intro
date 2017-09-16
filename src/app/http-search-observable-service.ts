import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpSearchItem} from "./http-search-item";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Jsonp} from '@angular/http';

@Injectable()
export class HttpSearchObservableService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private jsonp:Jsonp) {
  }

  search(term: string): Observable<HttpSearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          console.log(res.json());
          return new HttpSearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      });
  }
}
