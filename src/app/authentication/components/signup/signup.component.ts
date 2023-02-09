import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user/user';
import { AppState } from 'src/app/types/app-state.interface';
import * as AuthActions from '../../store/actions';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private _fBuilder: FormBuilder,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this._initializeForm();
  }

  _initializeForm() {
    this.loginForm = this._fBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSignup() {
    if (this.loginForm.valid) {
      console.log('valid');
      const username = this.loginForm.controls['username'].value;
      const email = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['username'].value;
      //dispatch a signup event on the store
      this._store.dispatch(AuthActions.signup({ username, email, password }));
    }
  }
}
