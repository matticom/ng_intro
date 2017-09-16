import {Component} from "@angular/core";
import {Jsonp} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'route-tracklist',
  template: `
    <ul class="list-group">
      <li class="list-group-item"
          *ngFor="let track of tracks">
        <img src="{{track.artworkUrl30}}">
        <a target="_blank"
           href="{{track.trackViewUrl}}">{{ track.trackName }}
        </a>
      </li>
    </ul>
 `
})
export class RouteTracklistComponent {
  private tracks: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    // sollte eigentlich in einer extra Service
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.tracks = res.json().results.slice(1);
        });
    });
  }
}
