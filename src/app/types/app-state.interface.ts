import { AuthState } from '../authentication/store/auth-state.interface';
import { MovieState } from '../movies/store/movie-state.interface';

export interface AppState {
  movies: MovieState;
  auth: AuthState;
}
