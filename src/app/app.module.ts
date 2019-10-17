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
import { AdminMoviesComponent } from "./admin/admin-movies/admin-movies.component";
import { AdminSeriesComponent } from "./admin/admin-series/admin-series.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    SeriesListComponent,
    SeriesDetailsComponent,
    AdminMoviesComponent,
    AdminSeriesComponent,
    NotFoundPageComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent
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
