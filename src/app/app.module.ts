import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MoviesModule } from "./movies/movies.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { SeriesListComponent } from "./series-list/series-list.component";
import { SeriesDetailsComponent } from "./series-details/series-details.component";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    SeriesListComponent,
    SeriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
