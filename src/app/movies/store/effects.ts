import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie/movie.interface';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import * as MoviesActions from './actions';
@Injectable()
export class MoviesEffects {
  $getMovies = createEffect(() =>
    this._actions$.pipe(
      ofType(MoviesActions.getMovies),
      mergeMap(({ title }) => {
        return this._movieService.getMovies(title).pipe(
          map((movies: Movie[]) => {
            if (
              movies['Search'] == undefined ||
              movies['Search'].length === 0
            ) {
              return MoviesActions.getMoviesFailure({
                error: 'No movies found with this title.',
              });
            } else {
              return MoviesActions.getMoviesSuccess({
                movies: movies,
              });
            }
          }),
          catchError((error) =>
            of(
              MoviesActions.getMoviesFailure({
                error: 'Ooups! An error occurred. Try again later..',
              })
            )
          )
        );
      })
    )
  );

  $getMoviePage = createEffect(() =>
    this._actions$.pipe(
      ofType(MoviesActions.getMoviePage),
      mergeMap(({ title, page }) => {
        return this._movieService.getMovies(title, page).pipe(
          map((movies: Movie[]) => {
            if (
              movies['Search'] == undefined ||
              movies['Search'].length === 0
            ) {
              return MoviesActions.getMoviesFailure({
                error: 'No movies found with this title.',
              });
            } else {
              return MoviesActions.getMoviesSuccess({
                movies: movies,
              });
            }
          }),
          catchError((error) =>
            of(
              MoviesActions.getMoviesFailure({
                error: 'Ooups! An error occurred. Try again later..',
              })
            )
          )
        );
      })
    )
  );

  likeMovie$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MoviesActions.likeMovie),
      switchMap(({ movieId }) => {
        return this._movieService.likeMovie(movieId).pipe(
          map((movie: Movie) => {
            return MoviesActions.likeMovieSuccess({
              movie: movie,
            });
          }),
          catchError((error) =>
            of(
              MoviesActions.likeMovieFailure({
                error:
                  'Ooups! An error occurred. Try again later..' + error.message,
              })
            )
          )
        );
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _movieService: MovieService
  ) {}
}
