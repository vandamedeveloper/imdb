import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieComponent,
    MoviesListComponent,
    MoviesSearchComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects]),
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
})
export class MoviesModule {}
