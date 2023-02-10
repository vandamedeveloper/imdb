import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/authentication/store/actions';
import { AppState } from 'src/app/types/app-state.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _store: Store<AppState>) {}

  onLogout() {
    this._store.dispatch(logout());
  }
}
