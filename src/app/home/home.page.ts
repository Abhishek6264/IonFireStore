import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';


export class Movie {
  $key: string;
  name: string;
  actor: string;
  year: number;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Movies: Movie[];
  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieService.getMovieList().subscribe((res) => {
      this.Movies = res.map((t) => ({
          id: t.payload.doc.id,
          ...t.payload.doc.data() as  Movie
        }));
    });
  }
  fetchMovies() {
    this.movieService.getMovieList()
    .subscribe((data) => {
      console.log(data);
    });
  }
  removeMovie(id: string){
    console.log(id);
    this.movieService.deleteMovie(id);
  }

}
