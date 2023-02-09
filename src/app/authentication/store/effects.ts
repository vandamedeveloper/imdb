import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from 'src/app/shared/models/user/user';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './actions';
@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions, private _authService: AuthService) {}

  signup$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.signup),
      switchMap(({ username, email, password }) =>
        this._authService.signup(username, email, password).pipe(
          map((user: User) => {
            console.log(user);
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error) =>
            of(AuthActions.loginFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
