import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/shared/models/movie/movie.interface';

export const getMovies = createAction(
  '[MOVIES] Get Movies',
  props<{ title: string }>()
);

// failure vs success actions
export const getMoviesSuccess = createAction(
  '[MOVIES] Get Movies Success',
  props<{ movies: Movie[] }>()
);
export const getMoviesFailure = createAction(
  '[MOVIES] Get Movies Failure',
  props<{ error: string }>()
);
