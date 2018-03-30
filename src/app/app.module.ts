import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginationModule } from './components/pagination/pagination.module';
import { SortModule } from './components/sort/sort.module';
import { MovieTileModule } from './components/movie-tile/movie-tile.module';
import { MovieDbService } from './services/movie-db/movie-db.service';
import { MovieListModule } from './components/movie-list/movie-list.module';
import { AppRoutingModule } from './classes/app-routing.modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PaginationModule,
    SortModule,
    MovieTileModule,
    MovieListModule,
    AppRoutingModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
