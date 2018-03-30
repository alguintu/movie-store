import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { SortModule } from '../sort/sort.module';
import { PaginationModule } from '../pagination/pagination.module';
import { MovieTileModule } from '../movie-tile/movie-tile.module';


@NgModule({
  imports: [ CommonModule, SortModule, PaginationModule, MovieTileModule ],
  exports: [ MovieListComponent ],
  declarations: [ MovieListComponent ]
})
export class MovieListModule { }