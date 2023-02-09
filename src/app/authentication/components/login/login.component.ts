import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types/app-state.interface';
import * as AuthActions from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private _fBuilder: FormBuilder,
    private _store: Store<AppState>
  ) {}

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
      console.log('valid');
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;
      //dispatch a login event on the store
      this._store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
