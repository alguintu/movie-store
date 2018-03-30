import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'movie-tile',
    templateUrl: 'movie-tile.component.html',
})
export class MovieTileComponent {
    date =  new Date();

    @Input()
    movie: IMovie;
}