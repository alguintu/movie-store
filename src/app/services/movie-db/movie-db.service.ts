import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Response } from '@angular/http';
import { MDBApiKey, MDBApiUrl } from './movie-db.config';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import { IMovie } from '../../interfaces/movie.interface';

@Injectable()
export class MovieDbService {

  private apiKey = MDBApiKey;
  private apiUrl = MDBApiUrl;
  private movieUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: Http) { }

  getConfig() {
    const { apiKey, apiUrl } = this;
    return { apiKey, apiUrl };
  }

  getMoviesByType(type: string, page: string){
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    search.set('sort_by', 'popularity.desc');
    search.set('page', page);

    return this.http.get(this.movieUrl + 'movie/' + type, {search})
            .map((res: Response) => {
                let movies  = res.json().results;
                let totalRecords = res.json().total_results;
                return {
                  results: movies,
                  totalRecords: totalRecords
                };
            })
            .catch(this.handleError);
  }  

  handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
}  

}
