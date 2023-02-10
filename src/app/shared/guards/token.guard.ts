import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { tokenSelector } from 'src/app/authentication/store/selectors';
import { AppState } from 'src/app/types/app-state.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private _store: Store<AppState>, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._store.pipe(
      select(tokenSelector),
      map((token) => {
        if (token != null) {
          return true;
        } else {
          this._router.navigate(['auth']);
          return false;
        }
      }),
      take(1)
    );
  }
}
