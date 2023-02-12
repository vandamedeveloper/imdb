import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/shared/models/movie/movie.interface';

export const getMovies = createAction(
  '[MOVIES] Get Movies',
  props<{ title: string }>()
);

export const getMoviePage = createAction(
  '[MOVIES] Get Movie Page',
  props<{ title: string; page: number }>()
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

export const likeMovie = createAction(
  '[MOVIES] Like Movie',
  props<{ movieId: string }>()
);
export const likeMovieSuccess = createAction(
  '[MOVIES] Like Movie Success',
  props<{ movie: Movie }>()
);
export const likeMovieFailure = createAction(
  '[MOVIES] Like Movie Failure',
  props<{ error: string }>()
);
