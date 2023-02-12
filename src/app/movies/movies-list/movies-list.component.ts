import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie/movie.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: Movie[];
  @Input() favorites: Movie[];
  @Output() onMovieLiked: EventEmitter<string> = new EventEmitter<string>();

  movieLiked(movieId: string) {
    this.onMovieLiked.emit(movieId);
  }

  isFavorite(id) {
    let isFavorite = false;
    this.favorites.map((movieId) => {
      if (movieId == id) {
        isFavorite = true;
      }
    });
    return isFavorite;
  }
}
