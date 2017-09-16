import {Component} from "@angular/core";
import {Jsonp} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'route-albumlist',
  template: `
    <ul class="list-group">
      <li class="list-group-item"
          *ngFor="let album of albums">
        <img src="{{album.artworkUrl60}}">
        <a target="_blank"
           href="{{album.collectionViewUrl}}">{{ album.collectionName }}
        </a>
      </li>
    </ul>
 `
})
export class RouteAlbumlistComponent {
  private albums: any[];

  constructor(private jsonp: Jsonp,
              private route: ActivatedRoute) {
    // sollte eigentlich in einer extra Service
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.albums = res.json().results.slice(1); // Erste Element weggeschnitten, weil nur Artist
          console.log(this.albums);
        });
    });
  }
}
