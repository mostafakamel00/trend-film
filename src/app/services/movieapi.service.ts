import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieapiService {
  constructor(private http: HttpClient) {}
  getTrending(mediaType: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
  }
  getMoviesDetails(id: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
  }
}
