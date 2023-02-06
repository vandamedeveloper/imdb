import { createReducer, on } from '@ngrx/store';
import { MovieState } from './movie-state.interface';

import * as MoviesActions from './actions';

export const initialState: MovieState = {
  loadingMovies: false,
  movies: [],
  error: null,
};

export const reducers = createReducer(
  initialState,

  on(MoviesActions.getMovies, (state) => ({
    ...state,
    loadingMovies: true,
  }))
);
