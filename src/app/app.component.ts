import { Component, OnInit } from '@angular/core';
import { MovieDbService } from './services/movie-db/movie-db.service';
import { MovieListComponent } from './components/movie-list/movie-list.component'

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}
