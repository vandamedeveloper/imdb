import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/types/app-state.interface';

export const selectAuthFeature = (state: AppState) => state.auth; //GET AUTH SLICE FROM GLOBAL STATE

export const userSelector = createSelector(
  selectAuthFeature,
  (state) => state.user
);
export const isLoadingSelector = createSelector(
  selectAuthFeature,
  (state) => state.loadingUser
);
export const errorSelector = createSelector(
  selectAuthFeature,
  (state) => state.error
);

export const tokenSelector = createSelector(
  selectAuthFeature,
  (state) => state.token
);
