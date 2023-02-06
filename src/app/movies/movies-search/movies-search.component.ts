import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss'],
})
export class MoviesSearchComponent implements OnInit {
  form: FormGroup;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _fBuilder: FormBuilder) {}

  ngOnInit() {
    this._initializeForm();
  }

  _initializeForm() {
    this.form = this._fBuilder.group({
      movie: [null, Validators.required],
    });
  }

  searchForMovie() {
    if (this.form.valid) {
      const movie = this.form.controls['movie'].value;
      this.onSearch.emit(movie);
    }
  }
}
