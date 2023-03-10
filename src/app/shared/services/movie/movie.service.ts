import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, map, Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
import { Movie } from '../../models/movie/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _API_KEY = enviroment.apiKey;
  private _API_URL = enviroment.apiUrl;
  private _basePath = enviroment.serverUrl;

  constructor(private _httpClient: HttpClient) {}

  getMovies(movie: string, page?: number): Observable<Movie[]> {
    const movieTitle = movie?.trim().split(' ').join('+');
    let url = `${this._API_URL}${this._API_KEY}&s=${movieTitle}`;

    if (page) {
      url += `&page=${page}`;
    }

    return this._httpClient.get<Movie[]>(url);
  }

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
