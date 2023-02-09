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

  signup(user: User): Observable<User> {
    return this._httpClient.post(`${this.basePath}/users/signup`, user);
  }
}
