import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movies/movie-list.component";
import { SeriesListComponent } from './series-list/series-list.component';

const routes: Routes = [{ path: "movies", component: MovieListComponent }, {path: "series", component: SeriesListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
