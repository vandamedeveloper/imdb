import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieComponent,
    MoviesListComponent,
    MoviesSearchComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
