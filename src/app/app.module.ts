import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AppComponent }  from './app.component';
import { WorkSessionFormComponent } from './workSession-form.component';
import { WorkSessionNavbarComponent } from './workSession-navbar.component';
import {CarouselDisplayComponent} from './carousel-display.component';
import {CarouselItemComponent} from './carousel-item.component';
import {CarouselComponent} from './carousel.component';
import {StructuralDirsComponent} from './structural-dirs.component';
import {CardHoverDirective} from './card-hover.directive';
import {RolloverDirective} from "./rollover.directive";
import {CleanPipe} from "./clean.pipe";
import {ModelDrivenFormComponent} from "./model-driven-form.component";
import {ReactiveModelFormComponent} from "./reactive-model-form.component";
import {TemplateDrivenFormComponent} from "./template-driven-form.component";
import {ParentComponent} from "./parent.component";
import {ChildComponent} from "./child.component";
import {SimpleService} from "./simpleService";
import {JokeComponent} from "./joke.component";
import {JokeFormComponent} from "./joke-form.component";
import {JokeListComponent} from "./joke-list.component";
import {HttpModule} from "@angular/http";
import {HttpDemoComponent} from "./http-demo.component";
import {HttpPromiseComponent} from "./http-promise.component";
import {HttpSearchPromiseService} from "./http-search-promise-service";
import {HttpObservableComponent} from "./http-observable.component";
import {HttpSearchObservableService} from "./http-search-observable-service";
import {JsonpModule} from '@angular/http';
import {RouteHeaderComponent} from "./route-header.component";
import {RouteHomeComponent} from "./route-home.component";
import {RouteFrameComponent} from "./route-frame.component";
import {Routes, RouterModule} from "@angular/router";
import {RouteAlbumlistComponent} from "./route-albumlist.component";
import {RouteArtistComponent} from "./route-artist.component";
import {RouteTracklistComponent} from "./route-tracklist.component";
import {RouteGuardAlwaysAuthService} from "./route-guard-always-auth.service";
import {RouteGuardUserService} from "./route-guard-user.service";
import {RouteGuardOnlyLoggedInUserService} from "./route-guard-only-loggedIn-user.service";
import {RouteGuardChildrenAlwaysAuthService} from "./route-guard-children-always-auth.service";
import {RouteGuardChildrenOnlyLoggedInUserService} from "./route-guard-children-only-loggedIn-user.service";
import {RouteGuardUnsearchTermService} from "./route-guard-unsearch-term.service";
import {RouteUrlSaveService} from "./route-url-save.service";
import {RouteVideolistComponent} from "./route-videolist.component";
import { TestDefaultPipe } from './test-default.pipe';
import { TestLoginComponent } from './test-login.component';
import { TestHoverFocusDirective } from './test-hoverfocus.directive';
import { ValidatorsEmailDomainDirective } from './validators-email-domain.directive';


// export const MAX_JOKES_TOKEN = new InjectionToken<number>("Max Jokes");
const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: RouteHomeComponent},
  {path: 'search', component: HttpPromiseComponent,
    canDeactivate: [RouteGuardUnsearchTermService]},
  // {path: 'search/:term', component: HttpPromiseComponent},
  {
    path: 'artist/:artistId',
    component: RouteArtistComponent,
    canActivate: [RouteGuardAlwaysAuthService, RouteGuardOnlyLoggedInUserService],
    canActivateChild: [RouteGuardChildrenAlwaysAuthService],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: RouteTracklistComponent},
      {path: 'albums', component: RouteAlbumlistComponent},
      {path: 'videos', component: RouteVideolistComponent},
    ]
  },
  {path: '**', component: RouteHomeComponent}

];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    AppComponent,
    WorkSessionFormComponent,
    WorkSessionNavbarComponent,
    CarouselDisplayComponent,
    CarouselItemComponent,
    CarouselComponent,
    StructuralDirsComponent,
    CardHoverDirective,
    RolloverDirective,
    CleanPipe,
    ModelDrivenFormComponent,
    ReactiveModelFormComponent,
    TemplateDrivenFormComponent,
    ParentComponent,
    ChildComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent,
    HttpDemoComponent,
    HttpPromiseComponent,
    HttpObservableComponent,
    RouteHeaderComponent,
    RouteHomeComponent,
    RouteFrameComponent,
    RouteAlbumlistComponent,
    RouteArtistComponent,
    RouteTracklistComponent,
    RouteVideolistComponent,
    TestDefaultPipe,
    TestLoginComponent,
    TestHoverFocusDirective,
    ValidatorsEmailDomainDirective
  ],
  providers: [ SimpleService,
              {provide: 'MAX_JOKES_TOKEN', useValue: 3},
              HttpSearchPromiseService,
              HttpSearchObservableService,
              RouteGuardAlwaysAuthService,
              RouteGuardUserService,
              RouteGuardOnlyLoggedInUserService,
              RouteGuardChildrenAlwaysAuthService,
              RouteGuardChildrenOnlyLoggedInUserService,
              RouteGuardUnsearchTermService,
              RouteUrlSaveService,
              {provide: 'RequiredDomain', useValue: 'example.com'}
              ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
