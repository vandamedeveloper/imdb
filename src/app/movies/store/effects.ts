import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, mergeMap, of } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import * as MoviesActions from './actions';
@Injectable()
export class MoviesEffects {
  $getMovies = createEffect(() =>
    this._actions$.pipe(
      ofType(MoviesActions.getMovies),
      mergeMap(({ title }) => {
        return this._movieService.getMovies(title).pipe(
          map((movies) => MoviesActions.getMoviesSuccess({ movies: movies })),
          catchError((error) =>
            of(MoviesActions.getMoviesFailure({ error: error.message }))
          ),
          finalize(() => console.log('hey yeah!!'))
        );
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _movieService: MovieService
  ) {}
}
