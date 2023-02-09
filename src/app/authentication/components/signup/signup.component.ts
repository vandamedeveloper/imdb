import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user/user';
import { AuthService } from '../../services/auth.service';

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
    private _authService: AuthService,
    private _router: Router
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

      const user: User = {
        username,
        email,
        password,
      };
      this._authService.signup(username, email, password).subscribe({
        next: (user) => {
          //TODO: ADD USER TO AUTH STORE SLICE
          //REDIRECT USER TO MAIN PAGE
          this._router.navigate(['']);
        },
        error: (error) => console.log(error),
      });
    }
  }
}
