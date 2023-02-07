import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie/movie.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: Movie[];
}
