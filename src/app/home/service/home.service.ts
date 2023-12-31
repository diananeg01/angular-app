import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieModel} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = 'assets/movie.data.json'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.baseUrl);
  }
}
