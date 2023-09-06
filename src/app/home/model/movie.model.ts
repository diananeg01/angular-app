export class MovieModel {
  name: string;
  yearOfRelease: number;
  genre: string[];
  rating: number;
  imdbLink: string;

  constructor(name: string, yearOfRelease: number, genre: string[], rating: number, imdbLink: string) {
    this.name = name;
    this.yearOfRelease = yearOfRelease;
    this.genre = genre;
    this.rating = rating;
    this.imdbLink = imdbLink;
  }
}
