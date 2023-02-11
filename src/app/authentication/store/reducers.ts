import { AuthState } from './auth-state.interface';
import * as AuthActions from './actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: AuthState = {
  loadingUser: false,
  user: null,
  error: null,
  token: localStorage.getItem('token') || null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loadingUser: true })),
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    error: null,
    token,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loadingUser: false,
    error,
  })),
  on(AuthActions.signup, (state) => ({ ...state, loadingUser: true })),
  on(AuthActions.signupSuccess, (state, { token }) => ({
    ...state,
    error: null,
    token,
  })),
  on(AuthActions.signupFailure, (state, { error }) => ({
    ...state,
    loadingUser: false,
    error,
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    loadingUser: false,
    user: null,
    error: null,
    token: null,
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AuthActions.userInfo, (state) => ({ ...state, loadingUser: true })),
  on(AuthActions.userInfoSuccess, (state, { user }) => ({
    ...state,
    loadingUser: false,
    user,
  })),
  on(AuthActions.userInfoFailure, (state, { error }) => ({
    ...state,
    loadingUser: false,
    error,
  }))
);
