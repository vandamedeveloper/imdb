import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/types/app-state.interface';

export const selectFeature = (state: AppState) => state.movies; //GET MOVIES SLICE FROM GLOBAL STATE

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.loadingMovies
);
export const moviesSelector = createSelector(
  selectFeature,
  (state) => state.movies
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

export const movieSearchedSelector = createSelector(
  selectFeature,
  (state) => state.movieSearched
);

export const favoritesSelector = createSelector(
  selectFeature,
  (state) => state.likedMovies
);
