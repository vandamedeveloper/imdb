import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/types/app-state.interface';
import * as AuthActions from '../../store/actions';
import { isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  userLoading$: Observable<boolean>;

  constructor(private _fBuilder: FormBuilder, private _store: Store<AppState>) {
    this.userLoading$ = this._store.pipe(select(isLoadingSelector));
  }

  ngOnInit(): void {
    this._initializeForm();
  }

  _initializeForm() {
    this.loginForm = this._fBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      //dispatch a login event on the store
      this._store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
