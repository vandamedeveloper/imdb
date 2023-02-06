import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent {
  constructor(private _movieService: MovieService) {}

  searchMovie(movie: string) {
    // TODO:  CONNECT THIS TO THE STORE FOR SETTING PARAM 'CURRENT_MOVIES FROM [] TO THE AMOUNT OF MOVIES RECIEVED FROM THE ENDPOINT CALL

    this._movieService.getMovies(movie).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
