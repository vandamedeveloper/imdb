import { Movie } from 'src/app/shared/models/movie/movie.interface';

export interface MovieState {
  loadingMovies: boolean;
  movies: Movie[];
  movieSearched: boolean;
  error: string | null;
  likedMovies: Movie[];
}
