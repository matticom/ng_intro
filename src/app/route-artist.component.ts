import {Component} from "@angular/core";
import {Jsonp} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'route-artist',
  template: `
    <div class="card">
      <div class="card-block">
        <h4>{{artist?.artistName}} <span class="tag tag-default">{{artist?.primaryGenreName}}</span></h4>
        <hr />
        <footer>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link"
                 [routerLinkActive]="['active']"
                 [routerLink]="['./tracks']">Tracks
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 [routerLinkActive]="['active']"
                 [routerLink]="['./albums']">Albums
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 [routerLinkActive]="['active']"
                 [routerLink]="['./videos']">Videos
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>

    <div class="m-t-1">
      <router-outlet></router-outlet>
    </div>
    <!--<h1>Artist</h1>-->
    <!--<p>-->
      <!--<a [routerLink]="['./tracks']">Tracks</a> |-->
      <!--<a [routerLink]="['./albums']">Albums</a> |-->
      <!--&lt;!&ndash;Übung&ndash;&gt;-->
      <!--<a [routerLink]="['./videos']">Videos</a>-->
    <!--</p>-->

    <!--<router-outlet></router-outlet>-->
 `
})
export class RouteArtistComponent {
  private artist: any;

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    // sollte eigentlich in einer extra Service
    this.route.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.artist = res.json().results[0];
          console.log(this.artist);
        });
    });
  }
}
