import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any = {};
  id: string = '';
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApi: MovieapiService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }
  getMovieDetails() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.movieApi.getMoviesDetails(this.id).subscribe((res) => {
      this.movieDetails = res;
    });
  }
}
