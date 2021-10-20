import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  signUp(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signup`, body);
  }
  logIn(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signin`, body);
  }
  isLogin() {
    return !!localStorage.getItem('TOKEN');
  }
}
