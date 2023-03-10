import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
import { User } from 'src/app/shared/models/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _basePath = enviroment.serverUrl;

  constructor(private _httpClient: HttpClient) {}

  signup(username: string, email: string, password: string): Observable<Token> {
    const body = {
      username,
      email,
      password,
    };
    return this._httpClient.post<Token>(
      `${this._basePath}/users/signup/token`,
      body
    );
  }

  login(email: string, password: string): Observable<Token> {
    const body = {
      email,
      password,
    };
    return this._httpClient.post<Token>(
      `${this._basePath}/users/login/token`,
      body
    );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  getUserInfo(): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this._httpClient.get<User>(`${this._basePath}/users/userinfo`, {
      headers,
    });
  }
}
