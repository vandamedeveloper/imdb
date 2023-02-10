import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user/user';

//LOGIN
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token: string }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// RECOVER USER INFO

//LOGIN
export const userInfo = createAction('[Auth] UserInfo');
export const userInfoSuccess = createAction(
  '[Auth] UserInfo Success',
  props<{ user: User }>()
);
export const userInfoFailure = createAction(
  '[Auth] UserInfo Failure',
  props<{ error: string }>()
);

//SIGNUP
export const signup = createAction(
  '[Auth] Signup',
  props<{ username: string; email: string; password: string }>()
);

export const signupSuccess = createAction(
  '[Auth] Signup Success',
  props<{ user: User; token: string }>()
);

export const signupFailure = createAction(
  '[Auth] Signup Failure',
  props<{ error: string }>()
);

//LOGOUT
export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);
