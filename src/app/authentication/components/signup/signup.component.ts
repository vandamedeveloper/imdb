import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/types/app-state.interface';
import * as AuthActions from '../../store/actions';
import { isLoadingSelector } from '../../store/selectors';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;
  hide = true;
  userLoading$: Observable<boolean>;

  constructor(private _fBuilder: FormBuilder, private _store: Store<AppState>) {
    this.userLoading$ = this._store.pipe(select(isLoadingSelector));
  }

  ngOnInit(): void {
    this._initializeForm();
  }

  _initializeForm() {
    this.signupForm = this._fBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      const username = this.signupForm.controls['username'].value;
      const email = this.signupForm.controls['email'].value;
      const password = this.signupForm.controls['password'].value;
      //dispatch a signup event on the store
      this._store.dispatch(AuthActions.signup({ username, email, password }));
    }
  }
}
