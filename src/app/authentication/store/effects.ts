import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user/user';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './actions';
@Injectable()
export class AuthEffects {
  signupFailURL: string = 'auth/signup';
  loginFailURL: string = 'auth/login';

  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _router: Router
  ) {}

  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this._authService.login(email, password).pipe(
          tap(() => this._router.navigate([''])),
          map((result) => {
            const token: string = result['token'];
            this._authService.setToken(token);
            return AuthActions.loginSuccess({ token });
          }),
          catchError((error) => {
            this._router.navigate([this.loginFailURL]);
            return of(AuthActions.loginFailure({ error: error.message }));
          })
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.signup),
      switchMap(({ username, email, password }) =>
        this._authService.signup(username, email, password).pipe(
          tap(() => this._router.navigate([''])),
          map((result) => {
            const token: string = result['token'];
            this._authService.setToken(token);
            return AuthActions.signupSuccess({ token });
          }),
          catchError((error) => {
            this._router.navigate([this.signupFailURL]);
            return of(AuthActions.signupFailure({ error: error.message }));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this._authService.removeToken();
        this._router.navigate(['auth']);
      }),
      map(() => {
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => {
        return of(AuthActions.logoutFailure({ error: error.message }));
      })
    )
  );
}
