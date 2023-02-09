import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
import { User } from 'src/app/shared/models/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private basePath = enviroment.serverUrl;

  constructor(private _httpClient: HttpClient) {}

  signup(username: string, email: string, password: string): Observable<User> {
    const body = {
      username,
      email,
      password,
    };
    return this._httpClient.post<User>(`${this.basePath}/users/signup`, body);
  }

  login(email: string, password: string): Observable<User> {
    const body = {
      email,
      password,
    };
    return this._httpClient.post<User>(`${this.basePath}/users/login`, body);
  }
}
