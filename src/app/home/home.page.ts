import { Component } from '@angular/core';
import { FilmService, Film } from '../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string;
  films: Film[]
  constructor(private service: FilmService) {
    this.getFilms();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getFilms() {

    this.service.searchFilms(this.searchTerm).then((data) => {
      this.films = data;
    });
  }

  showFilms() {
    return this.films;
  }

}
