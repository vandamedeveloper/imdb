import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _authService: AuthService
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
      this._authService.signup(user).subscribe({
        next: (user) => console.log(user),
        error: (error) => console.log(error),
      });
    }
  }
}
