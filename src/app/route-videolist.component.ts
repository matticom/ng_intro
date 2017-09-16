import {Component} from "@angular/core";
import {Jsonp} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'route-videolist',
  template: `
    <ul class="list-group">
      <li class="list-group-item"
          *ngFor="let video of videos">
        <img src="{{video.artworkUrl60}}">
        <a target="_blank"
           href="{{video.previewUrl}}">{{ video.trackName }}
        </a>
      </li>
    </ul>
 `
})
export class RouteVideolistComponent {
  private videos: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    // sollte eigentlich in einer extra Service
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.videos = res.json().results.slice(1);
        });
    });
  }
}
