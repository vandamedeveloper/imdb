import { AuthState } from './auth-state.interface';
import * as AuthActions from './actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: AuthState = {
  loadingUser: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(AuthActions.signup, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.signupSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    user,
    error: null,
  })),
  on(AuthActions.signupFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    isLoading: false,
    error: null,
  }))
);
