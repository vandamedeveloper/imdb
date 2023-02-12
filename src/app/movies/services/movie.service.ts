import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
import { Movie } from 'src/app/shared/models/movie/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _basePath = enviroment.serverUrl;

  constructor(private _httpClient: HttpClient) {}

  likeMovie(movieId: string): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    const body = {
      movieId,
    };
    return this._httpClient.post<Movie>(`${this._basePath}/movies/like`, body, {
      headers,
    });
  }
}
