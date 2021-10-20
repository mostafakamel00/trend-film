import { Component, OnInit } from '@angular/core';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Movies: any[] = [];
  trendingTv: any[] = [];
  trendingActor: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private movieApi: MovieapiService) {}

  ngOnInit(): void {
    this.getTrendMovie();
    this.getTrendTv();
    this.getTrendPerson();
  }
  getTrendMovie() {
    this.movieApi.getTrending('movie').subscribe((res) => {
      // console.log(res);
      this.Movies = res.results;
    });
  }
  getTrendTv() {
    this.movieApi.getTrending('tv').subscribe((res) => {
      // console.log(res);
      this.trendingTv = res.results.slice(0, 16);
    });
  }
  getTrendPerson() {
    this.movieApi.getTrending('person').subscribe((res) => {
      console.log(res);
      this.trendingActor = res.results;
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 8,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
