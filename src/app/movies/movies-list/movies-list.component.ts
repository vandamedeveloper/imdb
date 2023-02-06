import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  constructor(private _movieService: MovieService) {}

  ngOnInit() {}
}
