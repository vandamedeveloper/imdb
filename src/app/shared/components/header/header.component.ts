import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/authentication/store/actions';
import { userSelector } from 'src/app/authentication/store/selectors';
import { AppState } from 'src/app/types/app-state.interface';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$: Observable<User>;

  constructor(private _store: Store<AppState>) {
    this.user$ = this._store.pipe(select(userSelector));
  }

  onLogout() {
    this._store.dispatch(logout());
  }
}
