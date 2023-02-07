import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie/movie.interface';
import { AppState } from 'src/app/types/app-state.interface';
import * as MoviesActions from '../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  movieSearchedSelector,
  moviesSelector,
} from '../store/selectors';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent {
  moviesLoading$: Observable<boolean>;
  movies$: Observable<Movie[]>;
  movieSearched$: Observable<boolean>;
  error$: Observable<string | null>;
  constructor(private _store: Store<AppState>) {
    this.moviesLoading$ = this._store.pipe(select(isLoadingSelector));
    this.movies$ = this._store.pipe(select(moviesSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.movieSearched$ = this._store.pipe(select(movieSearchedSelector));
  }

  searchMovie(movie: string) {
    this._store.dispatch(MoviesActions.getMovies({ title: movie }));
  }

  loadPage(page: number) {}
}
