import { Component } from '@angular/core';
import { FilmService, Film } from '../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: FilmService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getFilms(): Film[] {
    return this.data.getAllFilms();
  }

}
