import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';
import {
  userInfo,
  userInfoFailure,
  userInfoSuccess,
} from 'src/app/authentication/store/actions';
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
      }),
      map(() => true),
      catchError((error) => {
        this._store.dispatch(userInfoFailure({ error: error.message }));
        this._router.navigate(['auth']);
        return of(false);
      })
    );
  }
}
