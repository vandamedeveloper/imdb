import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';
import {
  logout,
  userInfoFailure,
  userInfoSuccess,
} from 'src/app/authentication/store/actions';
import { userSelector } from 'src/app/authentication/store/selectors';
import { AppState } from 'src/app/types/app-state.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _store: Store<AppState>,
    private _router: Router,
    private _authSerivce: AuthService
  ) {}

  canActivate(): Observable<boolean> {
    return this._authSerivce.getUserInfo().pipe(
      tap((user) => {
        this._store.dispatch(userInfoSuccess({ user }));
        return true;
      }),
      map(() => true),
      catchError((error) => {
        this._store.dispatch(userInfoFailure({ error: error.message }));
        this._store.dispatch(logout());
        this._router.navigate(['auth']);
        return of(false);
      })
    );
  }
}
