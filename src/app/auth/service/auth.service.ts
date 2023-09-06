import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  register(loginData: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, loginData);
  }

  login(loginData: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
}
