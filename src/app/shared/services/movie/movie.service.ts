import { HttpClient } from '@angular/common/http';
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

  constructor(private _httpClient: HttpClient) {}

  getMovies(movie: string, page?: number): Observable<Movie[]> {
    const movieTitle = movie?.split(' ').join('+');
    let url = `${this._API_URL}${this._API_KEY}&s=${movieTitle}`;

    if (page) {
      url += `&page=${page}`;
    }

    return this._httpClient.get<Movie[]>(url);
  }
}
