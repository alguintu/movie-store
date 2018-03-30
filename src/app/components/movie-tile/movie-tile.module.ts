import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieTileComponent } from './movie-tile.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ MovieTileComponent ],
  declarations: [ MovieTileComponent ]
})
export class MovieTileModule { }