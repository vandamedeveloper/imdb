import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie: Movie;
  @Input() isFavorite: boolean;

  @Output() movieLiked: EventEmitter<string> = new EventEmitter<string>();

  likeMovie(movieId: string) {
    this.movieLiked.emit(movieId);
  }
}
