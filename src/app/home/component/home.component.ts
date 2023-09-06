import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieModel} from "../model/movie.model";
import {HomeService} from "../service/home.service";
import {ColumnModel} from "../model/column.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{

  isVisible: boolean = false;
  isEdit: boolean = false;

  movieData: MovieModel[] = [];

  listOfColumns: ColumnModel[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: MovieModel, b: MovieModel) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: MovieModel) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Year of Release',
      sortOrder: 'descend',
      sortFn: (a: MovieModel, b: MovieModel) => a.yearOfRelease - b.yearOfRelease,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Genre',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: MovieModel, b: MovieModel) => a.genre.length - b.genre.length,
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (list: string[], item: MovieModel) => list.some(genre => item.genre.indexOf(genre) !== -1)
    },
    {
      name: 'Rating',
      sortOrder: 'descend',
      sortFn: (a: MovieModel, b: MovieModel) => a.rating - b.rating,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'IMDB link',
      sortOrder: null,
      sortFn: (a: MovieModel, b: MovieModel) => a.imdbLink.localeCompare(b.imdbLink),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: MovieModel) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Actions',
      sortOrder: null,
      sortFn: null,
      sortDirections: [],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    }
  ];

  constructor(private homeService: HomeService, private router: Router) {
  }

  ngOnInit(): void {
    this.homeService.getMovies().subscribe({
      next: res => this.movieData = res
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach(item => {
      item.listOfFilter = [];
    });
  }

  resetSortAndFilters(): void {
    this.listOfColumns.forEach(item => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }

  addMovie() {
    this.isVisible = true;
    this.isEdit = false;
  }

  editMovie(movie: MovieModel) {
    this.isVisible = true;
    this.isEdit = true;
  }

  deleteMovie(movie: MovieModel) {
    console.log(this.movieData.indexOf(movie));
    // this.movieData = this.movieData.splice(this.movieData.indexOf(movie), 1);
    this.movieData = this.movieData.filter(m => m.name !== movie.name);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getGenreColor(genre: string): string {
    switch (genre) {
      case 'Sci-Fi':
        return 'purple';
      case 'Action':
        return 'blue';
      case 'Comedy':
        return 'green';
      case 'Drama':
        return 'red';
      case 'Crime':
        return 'lime';
      case 'Romance':
        return 'geekBlue';
      case 'Adventure':
        return 'cyan';
      case 'Fantasy':
        return 'orange';
      case 'Animation':
        return 'magenta';
      case 'Biography':
        return 'gold';
      case 'History':
        return 'orange';
      case 'War':
        return 'volcano';
      default:
        return 'default';
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
