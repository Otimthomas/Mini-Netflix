import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movies/movie-list.component";
import { SeriesListComponent } from "./series-list/series-list.component";
import { AdminMoviesComponent } from "./admin/admin-movies/admin-movies.component";
import { AdminSeriesComponent } from "./admin/admin-series/admin-series.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: "movies", component: MovieListComponent },
  { path: "series", component: SeriesListComponent },
  { path: "admin/movies", component: AdminMoviesComponent },
  { path: "admin/series", component: AdminSeriesComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
