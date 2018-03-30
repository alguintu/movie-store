import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { SortComponent } from '../sort/sort.component';
import { IMovie, IPagedResults } from '../../interfaces/movie.interface';
import { MovieDbService } from '../../services/movie-db/movie-db.service';

@Component({
    moduleId: module.id,
    selector: 'movie-list',
    templateUrl: 'movie-list.component.html'
})

export class MovieListComponent implements OnInit {
    movies: IMovie[];
    type: string;
    totalRecords: number = 0;
    pageSize: number = 20;

    constructor(private route: ActivatedRoute, private movieDbServices: MovieDbService) {
    }
    
    ngOnInit() {
        this.type = 'popular';
        this.getMoviesPage(1);
    }

    getMoviesPage(page: number) {
        this.movieDbServices.getMoviesByType(this.type, page.toString())
            .subscribe((response: IPagedResults<IMovie[]>) => {
                this.movies = response.results;
                if (this.totalRecords === 0) {
                    this.totalRecords = response.totalRecords;
               }
        });
    }

    pageChanged(page: number) {
        this.getMoviesPage(page);
    }
}